$(function(){
    $(".addhamburger").on("click",function(){
        var result = $("#nameham").val().trim()
       var sendresult = {name:result}

        $.ajax("/api/cats",{
            type: "POST",
            data: sendresult})
            .then(
                function(){
                    console.log("created a new hamburger");
                }
            )

        })
    });
