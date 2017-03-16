/**
 * laytpl模板引擎扩展模块
 */
layui.define(['laytpl'],function(exports){
    var laytpl = layui.laytpl,
        tplConf = {
            /**
             * @param data 需要处理的JSON数据
             * @param jsid 渲染循环赋值的HTML id代码块
             * @param tbid 嵌入层ID
             */
            getTpl:function(data,jsid,tbid){
                //使用laytpl模板引擎
                var gettpl = $(jsid).html();
                laytpl(gettpl).render(data, function(html){
                    $(tbid).html(html);
                });
            }
        };

    //输出Laytpl接口
    exports('tpl',tplConf);
});