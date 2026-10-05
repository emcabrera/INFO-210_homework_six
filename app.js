const cageEle = document.getElementById("cage");
const pokemon = document.getElementById("pokemon");
const target = document.getElementById("target");

function setTarget() {
    let left = Math.floor(Math.random()*500)-80;
    let top = Math.floor(Math.random()*500)-80;

    if (left < 0){
        left = 0;
    }

    if(top < 0){
        top = 0;
    }

    target.style.left = left + "px";
    target.style.top = top + "px";
}

setTarget();

let interval = null;
let timer = false;

function changeLocation(){
    let left = Math.floor(Math.random()*500)-80;
    let top = Math.floor(Math.random()*500)-80;

    if (left < 0){
        left = 0;
    }

    if(top < 0){
        top = 0;
    }

    pokemon.style.left = left + "px";
    pokemon.style.top = top + "px";
    hitBox();
}

function startMovement(){
    interval = setInterval(() => {
        changeLocation();
    }, 1000)
}

function endMovement(){
    clearInterval(interval);
}

function hitBox(){
    const pTop = parseFloat(window.getComputedStyle(pokemon).top);
    const pLeft = parseFloat(window.getComputedStyle(pokemon).left);
    const tTop = parseFloat(window.getComputedStyle(target).top);
    const tLeft = parseFloat(window.getComputedStyle(target).left);
    console.log(pTop - tTop, pLeft - tLeft);
    if(pTop - tTop < 80 && pLeft - tLeft < 80 && pTop - tTop > 0 && pLeft - tLeft>0 ){
        console.log("hit")
    }
}

document.getElementById("scoot").addEventListener("click", changeLocation);
document.getElementById("move").addEventListener("click", ()=>{
    timer = !timer;

    if(timer){
        startMovement();
    }else{
        endMovement();
    }
});

changeLocation();
hitBox()