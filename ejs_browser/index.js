var datanav = {data:["首页","项目1","项目2","关于我们"]};
var dataContent={buyflag:true,
    things1:["apple","pineapple","pen"],
    things2:["nothing","nothing","nothing"]
};

window.onload=function(){
    var headHtml=new EJS({url:'./model/model_header.ejs'}).render(datanav);
    var contentHtml=new EJS({url:'./model/model_content.ejs'}).render(dataContent);
    var footertHtml=new EJS({url:'./model/model_footer.ejs'}).render();

    document.getElementById("header").innerHTML=headHtml;
    document.getElementById("container").innerHTML=contentHtml;
    document.getElementById("footer").innerHTML=footertHtml;
}