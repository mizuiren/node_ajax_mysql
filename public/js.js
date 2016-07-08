
$("#button").on("click",function(){
    $.ajax({
        url:"a.html",
        type: "GET",
        data: "",
        dataType: "json",
        success:function(data){
            console.log(data);
        },
        err:function(){
            console.log(err);
        }
    })
})
