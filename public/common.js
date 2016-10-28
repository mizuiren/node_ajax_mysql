$("#button").on("click",function(){
    $.ajax({
        url:"../getCity",
        type: "GET",
        data: "",
        dataType: "text",
        success:function(data){
            var data=JSON.parse(data);
            console.log(data);
            data.forEach(function(n,i){
                $("body").append("<br/>"+n.desc_col);
            });            
        },
        err:function(err){
            console.log(err);
        }
    })
})
