$(window).scroll(function(){
    let notetop = $(".top").offset().top;
    let notemiddle = $(".middle").offset().top;
    let notebase = $(".base").offset().top;
    let marineimg = $(".marine").offset().top;
    let marineh1 = $(".marine_img").offset().top;
    let marinep = $(".marine h1").offset().top;
    let marineplay = $(".play").offset().top;
    let surf = $(".mo_img").offset().top;
    let ocean = $(".mo_img").offset().top;
    let beach = $(".mo_img1").offset().top;
    let drive = $(".mo_img1").offset().top;
    let moimgh3 = $(".mo_img2").offset().top;
    let molast = $(".mo_last").offset().top;

    let ws=$(this).scrollTop();
    
    if(ws>marineimg-700){
        $(".marine_img").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>marineh1-300){
        $(".marine h1").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>marinep-500){
        $(".marine p").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>marineplay-500){
        $(".play video").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>surf-500){
        $(".surf img").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>ocean-300){
        $(".ocean img").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>beach-200){
        $(".beach img").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>drive-50){
        $(".drive img").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>moimgh3-200){
        $(".mo_img h3").css({transform: 'translateY(0)', opacity: 1})
    }
    if(ws>notetop-800){
        $(".toptext").css({top: "50%",opacity: 1})
    }
    if(ws>notemiddle-800){
        $(".middletext").css({top: "50%",opacity: 1})
    }
    if(ws>notebase-800){
        $(".basetext").css({top: "50%",opacity: 1})
    }
    if(ws>molast-1000){
        $(".mo_last").css({transform: 'translateY(0)',opacity: 1})
    }

});
