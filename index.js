const button = document.querySelector('.btn');

button.addEventListener('mouseover',(event)=>{
    const Xval= (event.pageX -button.offsetLeft);
    const Yval= (event.pageY -button.offsetTop);

    button.style.setProperty("--xPos", Xval + "px");
    button.style.setProperty("--yPos", Yval +"px");
});