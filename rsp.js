if ($request.url.indexOf('eat.zuifuli.com/ctwrapper') != -1) {
    if($response.status == 200){
        $notification.post("最福利已fake", "", "");
        // var index = $response.body.indexOf('<script>');
        var body = "<!DOCTYPE html><html><head><title>test</title></head><body><p></p><script>document.addEventListener('DOMContentLoaded',(event)=>{iHealthBridge.doAction('locate',{},function(ret,suc){var p=document.querySelector('p');p.value=JSON.stringify(ret)})});</script></body></html>";
        console.log('body', body);
        $done({
            status: 200, 
            body: body
        });
    }else{
        $done({})
    }
} else {
    $done({})
}