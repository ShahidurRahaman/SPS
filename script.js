let compCh=0;
let Ch=0;
let BP=0;
let RP=0;

function autochoice(){
    compCh=choiceGen();
    console.log("Auto-Choiced");
}
function autochoiceshow(){
    let phand=document.getElementById("comp-hand");
    if (compCh == 1){
        phand.style.cssText=`
        background-image: url(/Images/Stone.png);
        transform: scaleX(-1);
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 45vw;
        animation: slide-in 1.5s;
        `;
    }
    else if(compCh==2){
        phand.style.cssText=`
        transform: scaleX(-1);
        background-image: url(/Images/Paper.png); 
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 45vw;
        animation: slide-in 1.5s;
        `;
    }
    else{
        phand.style.cssText=`
        transform: scaleX(-1);
        background-image: url(/Images/Scissors.png); 
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 45vw;
        animation: slide-in 1.5s;
        `;
    }
}
function choiceGen(){
    return (1+Math.floor(Math.random() * 3));
}
function choice(){
    let phand=document.getElementById("player-hand");
    if (Ch == 1){
        phand.style.cssText=`
        background-image: url(/Images/Stone.png); 
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 45vw;
        animation: slide-in 1.5s;
        `;
    }
    else if(Ch==2){
        phand.style.cssText=`
        background-image: url(/Images/Paper.png); 
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 45vw;
        animation: slide-in 1.5s;
        `;
    }
    else{
        phand.style.cssText=`
        background-image: url(/Images/Scissors.png); 
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center 45vw;
        animation: slide-in 1.5s;
        `;
    }
    console.log("Player-Choiced");
}
function getchoice(ch){
    Ch=ch;
    console.log("Fetched " + Ch);
}
async function init(){
    if(RP<5 && BP<5){
        await system();
    }
    else{
        box=document.getElementById("gameover").style.display="block"
        if(RP==5){
            result=document.getElementById("result").innerHTML="<span style='color: red'>Nooooo</span> <span style='color: orange'>You</span> <span style='color: yellow'>Lost</span> 😭"
        }
        else if(BP==5){
            result=document.getElementById("result").innerHTML="<span style='color: red'>Congrats </span> <span style='color: orange'>You</span> <span style='color: yellow'>Won</span> 😉"
        }
    }
}
async function system(){
    Ch=0;
    await timer();
    autochoice();
    // console.log(compCh, Ch, RP, BP);
}
function check(){
    if(Ch==1){
        if(compCh==1){

        }
        else if(compCh==2){
            redpoint();
        }
        else{
            bluepoint();
        }
    }
    else if(Ch==2){
        if(compCh==1){
            bluepoint();
        }
        else if(compCh==2){

        }
        else{
            redpoint();
        }
    }
    else {
        if(compCh==1){
            redpoint();
        }
        else if(compCh==2){
            bluepoint();
        }
        else{

        }
    }
}
function redpoint(){
    if(RP<5){
        document.getElementById(`r${RP+1}`).style.backgroundColor="#FF0000";
        RP++;
    }
    else{
        
    }
}
function bluepoint(){
    if(BP<5){
        document.getElementById(`b${BP+1}`).style.backgroundColor="#00B2FF";
        BP++;
    }
    else{

    }
}
async function timer(){
    let clock=document.getElementById("time");
    setTimeout(()=>{ clock.innerHTML=3, console.log(3) },0);
    setTimeout(()=>{ clock.innerHTML=2, console.log(2) },1000);
    setTimeout(()=>{ clock.innerHTML=1, console.log(1) },2000);
    setTimeout(()=>{ 
        clock.innerHTML=""; 
        if(Ch == 0){
            Ch=choiceGen();
        }
        autochoiceshow();
        choice();
    },2800);
    setTimeout(()=>{check()},3500);
    setTimeout(()=>{fadeOut()},5000);
    setTimeout(() => {
        init();
    }, 5000);
}
function fadeOut(){
    let phand=document.getElementById("player-hand");
    let chand=document.getElementById("comp-hand");
    phand.style.cssText=``;
    chand.style.cssText=``;
}