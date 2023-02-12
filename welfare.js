if ($request.url.indexOf('eat.zuifuli.com/ctwrapper') != -1) {
    if($response.status == 200){
        $notification.post("最福利已fake", "", "");
        var index = html.lastIndexOf('</script>');
        $done({
            status: 200, 
            headers: $response.headers, 
            body: $response.body.substring(0, index) + "<sript>window.iHealthBridge._doAction=window.iHealthBridge.doAction;window.iHealthBridge.doAction=function(f,p,c){if(f==='locate'){alert('facklocation');c({citycode:'310100',lng:121.4882476128472,lat:31.24249593098958,city:'上海',address:'上海市黄浦区圆明园路靠近兰心大楼'});}else{window.iHealthBridge._doAction(f,p,c);}}</sript>" + $response.body.substring(index)
        })
    }else{
        $done($response)
    }
}else{
    $done($response)
}