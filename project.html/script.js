/** @format */

const scroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true,
});
function circleMouse(){
    window.addEventListener("mousemove",function(details))
    document.querySelector("#mincircle").style.transform=`translate(${details.clientX}px,${details.clientY})`
}
circleMouse();