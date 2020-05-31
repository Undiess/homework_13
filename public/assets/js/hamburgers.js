$(function(){
    $(".addhamburger").on("click",function(){
        var result = $("#nameham").val().trim()
       var sendresult = {name:result}

        $.ajax("/api/hamburgers",{
            type: "POST",
            data: sendresult})
            .then(
                function(){
                    console.log("created a new hamburger");
                }
            )

    })

    $(".eat").on("click",function(){
        var id = $(this).data("id");  

        $.ajax("/api/hamburgers/"+id,{
            type: "PUT",
        })
        .then(function(){
            location.reload();
        })
        
    })





});


