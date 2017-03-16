/**
 * layer扩展弹出层模块
 */
layui.define(['layer'],function(exports) {
    var layer = layui.layer,
        layerConf = {
            getLayer: function (e) {
                //alert(123);
                if (!e.wsize) {
                    e.wsize = '90%';
                }
                if (!e.hsize) {
                    e.hsize = '90%';
                }
                layer.open({
                    skin: 'layui-layer-molv', //默认皮肤
                    type: 2,
                    title: e.title, //标题
                    area: [e.wsize, e.hsize], //宽高
                    //closeBtn:false,
                    shade: 0.5,//遮罩
                    zIndex: 1,
                    maxmin: true,  //最大最小化
                    scrollbar: false,
                    //content: [url,'no']
                    content:[e.url]
                });
            }
        };

    //输出layerConf接口
    exports('popup',layerConf);
});