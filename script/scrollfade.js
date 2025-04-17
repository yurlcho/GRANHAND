$(window).scroll(function(){
    let notetop = $(".top").offset().top;
    let notemiddle = $(".middle").offset().top;
    let notebase = $(".base").offset().top;

    let ws=$(this).scrollTop();

    if(ws>notetop-500){
        $(".toptext").css({top: "50%",opacity: 1})
    }
    if(ws>notemiddle-500){
        $(".middletext").css({top: "50%",opacity: 1})
    }
    if(ws>notebase-500){
        $(".basetext").css({top: "50%",opacity: 1})
    }
});
