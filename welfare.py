from mitmproxy import http
import requests
import sys
import logging

logging.basicConfig(format='%(asctime)s %(message)s', filename='example.log', level=logging.INFO)

h = '''
<script>
    window.iHealthBridge._doAction = window.iHealthBridge.doAction;
    window.iHealthBridge.doAction = function(f, p, c) {
        if (f === 'locate') {
            c({"adcode": "310100", "city": "上海市", "address": "外白渡桥", "date": 1676696166.1296182, "lat": 31.24309, "lng": 121.48789, "poi": "外白渡桥"}, true)
        }
    }
    navigator.geolocation._getCurrentPosition = navigator.geolocation.getCurrentPosition;
    navigator.geolocation.getCurrentPosition = function(f) {
        navigator.geolocation._getCurrentPosition(p => {
            Object.defineProperty(p.coords, 'longitude', {
                get: function() {
                    return 121.48789;
                }
            });
            Object.defineProperty(p.coords, 'latitude', {
                get: function() {
                    return 31.24309;
                }
            });
            console.info("fake", p);
            f(p);
        });
    }
</script>
'''

def request(flow: http.HTTPFlow) -> None:
    logging.info(flow.request.pretty_url)
    if flow.request.pretty_url == "https://eat.zuifuli.com/ctwrapper?id=1030005" or flow.request.pretty_url == 'https://eat.zuifuli.com/eruda':
        logging.info('hit')
        if 'if-none-match' in flow.request.headers:
            flow.request.headers['if-none-match'] = ''
        if 'ifuli-longitude' in flow.request.headers:
            flow.request.headers['ifuli-longitude'] = '121.48789'
        if 'ifuli-latitude' in flow.request.headers:
            flow.request.headers['ifuli-latitude'] = '31.24309'
        if 'ifuli-location' in flow.request.headers:
            flow.request.headers['ifuli-location'] = '31.24309,121.48789'
        logging.info(flow.request.headers)
            
def response(flow: http.HTTPFlow) -> None:
    if flow.request.pretty_url == "https://eat.zuifuli.com/ctwrapper?id=1030005":
        if flow.response and flow.response.content:
            logging.info(flow.response.get_text())
            flow.response.set_text(flow.response.get_text().replace('<script></script>', h))

    if flow.request.pretty_url == 'https://eat.zuifuli.com/eruda':
        with open('/opt/mitmproxy/eruda', 'r+', encoding='utf-8') as f:
            flow.response.set_text(f.read())
