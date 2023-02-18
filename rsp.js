if ($request.url.indexOf('eat.zuifuli.com/ctwrapper') != -1) {
    if($response.status == 200){
        $notification.post("最福利已fake", "", "");
        var h = "<script>window.iHealthBridge._doAction=window.iHealthBridge.doAction;window.iHealthBridge.doAction=function(f,p,c){if(f==='locate'){c({'adcode':'310100','city':'上海市','address':'外白渡桥','date':1676696166.1296182,'lat':31.24309,'lng':121.48789,'poi':'外白渡桥'},true)}};navigator.geolocation._getCurrentPosition=navigator.geolocation.getCurrentPosition;navigator.geolocation.getCurrentPosition=function(f){navigator.geolocation._getCurrentPosition(p=>{Object.defineProperty(p.coords,'longitude',{get:function(){return 121.48789}});Object.defineProperty(p.coords,'latitude',{get:function(){return 31.24309}});console.info('fake',p);f(p)})}</script>";
        var body = $response.body.replace('<script></script>', h)
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