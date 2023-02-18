let headers = $request.headers;
if(headers['ifuli-longitude'] != undefined && headers['ifuli-longitude'] != null) {
    headers['ifuli-longitude'] = '121.48789';
}
if(headers['ifuli-latitude'] != undefined && headers['ifuli-latitude'] != null) {
    headers['ifuli-latitude'] = '31.24309';
}
if(headers['ifuli-location'] != undefined && headers['ifuli-location'] != null) {
    headers['ifuli-location'] = '31.24309,121.48789';
}
if($request.url.indexOf('eat.zuifuli.com/ctwrapper') != -1) {
    headers['If-None-Match'] = null
}
$done({headers})
console.log('request', headers);