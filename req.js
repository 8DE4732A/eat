let headers = $request.headers;
if(headers['ifuli-longitude'] != undefined && headers['ifuli-longitude'] != null) {
    headers['ifuli-longitude'] = '121.488100';
}
if(headers['ifuli-latitude'] != undefined && headers['ifuli-latitude'] != null) {
    headers['ifuli-latitude'] = '31.243084';
}
if(headers['ifuli-location'] != undefined && headers['ifuli-location'] != null) {
    headers['ifuli-latitude'] = '31.243084,121.488100';
}
if($request.url.indexOf('eat.zuifuli.com/ctwrapper') != -1) {
    headers['If-None-Match'] = null
}
$done({headers})