var data={buyflag:true,
    things1:["apple","pineapple","pen"],
    things2:["nothing","nothing","nothing"]
};

window.onload=function(){
    var html=new EJS({url:'./model1.ejs'}).render(data);
    document.getElementById("container").innerHTML=html;
}