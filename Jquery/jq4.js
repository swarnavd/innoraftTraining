$("document").ready(function(){
    $(".head").click(function(){
        $("header").css('background-color','pink');
    })
    $(".side").click(function(){
        $(".side").text('LEFT BAR');
    })
    $(".extratext").click(function(){
        $("#main").fadeOut(3000);
    })
})