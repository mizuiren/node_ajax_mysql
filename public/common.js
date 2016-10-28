$("#button").on("click",function(){
    $.ajax({
        url:"../getCity",
        type: "GET",
        data: "",
        dataType: "text",
        success:function(data){
            var data=JSON.parse(data);
            console.log(data);
            var html="<table>";
            data.forEach(function(n,i){
                html+="<tr>";
                for(var j in n){
                    html+="<td>"+n[j]+"</td>";
                }
                html+="</tr>";
            }); 
            html+="</html>";
            $("body").html(html);           
        },
        err:function(err){
            console.log(err);
        }
    })
})
