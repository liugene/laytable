/**
 * page扩展分页模块
 */
layui.define(['laypage','tpl'],function(exports){
    var laypage = layui.laypage,
        tpl = layui.tpl,
        pageConf = {
            /**
             * @param a 包括:
             * url 请求地址
             * count: 赋值总记录数ID
             * page:分页条视图ID
             * tbvid 表格tbody渲染显示HTML ID
             * tfid 表格tfoot渲染ID
             * tfvid 表格tfoot渲染显示HTML ID
             * infoid 统计信息渲染ID
             * infovid 统计信息渲染显示HTML ID
             */
            getPage: function(a){
                //获取文本框值用于设置分页总数
                var rows = $(a.count).val();
                //var flag = true;
                laypage({
                    cont: a.page, //容器。值支持id名、原生dom对象，jquery对象。
                    pages: rows, //总页数
                    skip:true,
                    curr: 1, //当前页
                    jump: function(e,first){
                        //触发分页后的回调
                        var curr = e.curr; //获得当前页后，去向服务端发送请求，获得相关数据。
                        //调用分页方法
                        $.ajax({
                            url: a.url,
                            type:'GET',
                            data:{"flag": a.flag,"p":curr},
                            dataType:'json',
                            success:function(data){
                                //使用laytpl模板引擎
                                $(a.count).val(data.count);
                                console.log(data.count);
                                if(a.id.tbid){
                                    tpl.getTpl(data, a.id.tbid,a.id.tbvid);
                                }
                                tpl.getTpl(data, "#list1", "#view1");
                                if(a.id.tfid){
                                    tpl.getTpl(data, a.id.tfid, a.id.tfvid);
                                }
                                if(a.id.infoid){
                                    tpl.getTpl(data, a.id.infoid, a.id.infovid);
                                }
                            }
                        });
                    }
                });
            }
        };

    //输出pageConf接口
    exports('page',pageConf);
});