// top
const topBox = document.querySelector(".top");

topBox.addEventListener ("mouseleave", te);
topBox.addEventListener ("mouseover", teb);

function te(){
    topBox.style.backgroundImage ="url(/GRANHAND/img_susie/susie_top2.jpg)";
}
function teb(){
    topBox.style.backgroundImage ="url('/GRANHAND/img_susie/top_event.jpg')";
}


// middle
const middleBox = document.querySelector(".middle");

middleBox.addEventListener ("mouseleave", me);
middleBox.addEventListener ("mouseover", meb);

function me(){
    middleBox.style.backgroundImage ="url('/GRANHAND/img_susie/susie_middle.jpg')";
}
function meb(){
    middleBox.style.backgroundImage ="url('/GRANHAND/img_susie/middle_event.jpg')";
}


// base
const baseBox = document.querySelector(".base");

baseBox.addEventListener ("mouseleave", be);
baseBox.addEventListener ("mouseover", beb);

function be(){
    baseBox.style.backgroundImage ="url('/GRANHAND/img_susie/susie_bottom2.jpg')";
}
function beb(){
    baseBox.style.backgroundImage ="url('/GRANHAND/img_susie/base_event.jpg')";
}