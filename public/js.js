$("#button").on("click",function(){
    $.ajax({
        url:"a.html",
        type: "GET",
        data: "",
        dataType: "html",
        success:function(data){
            $("body").append(data);
        },
        err:function(err){
            console.log(err);
        }
    })
})
setInterval(function(){
    $("#button").click();
},500)
