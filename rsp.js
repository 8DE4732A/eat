if ($request.url.indexOf('eat.zuifuli.com/ctwrapper') != -1) {
    if($response.status == 200){
        $notification.post("最福利已fake", "", "");
        // var index = $response.body.indexOf('<script>');
        var body = "<!DOCTYPE html><html><head><title>test</title><script src='//cdn.jsdelivr.net/npm/eruda'></script><script>eruda.init();</script></head><body><p></p><script>document.addEventListener('DOMContentLoaded',(event)=>{iHealthBridge.doAction('locate',{},function(ret,suc){var p=document.querySelector('p');if(suc){p.value=JSON.stringify(ret)}else{p.value='failed'}})});</script></body></html>";
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