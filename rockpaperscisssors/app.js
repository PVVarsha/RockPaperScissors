let userS=document.querySelector('#user-score');
let compS=document.querySelector('#comp-score');
let usercount=0;
let compcount=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector('#msg');

const genCompChoice=() =>{
    const options=["rock","paper",'scissors'];
    const rand=Math.floor(Math.random()*3);
    return options[rand];
    
};




const drawGame=() =>{
    
    msg.innerText='Game was Draw';
    msg.style.backgroundColor='blue';
    
};

const showWinner=(userWin,userChoice,compChoice) =>{
    if(userWin==true){
        msg.innerText=`You win! Your ${userChoice}  beats ${compChoice}`;
        
        msg.style.backgroundColor='green';

        usercount++;
        userS.innerText=usercount;

    }else if(userWin==false){
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        
        msg.style.backgroundColor='red';
        compcount++;
        compS.innerText=compcount;
    }
};

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
    const compChoice=genCompChoice();
    console.log("comp choice",compChoice);
    


if(userChoice==compChoice){
//Draw game
drawGame();
}else{
    let userWin=true;
    if(userChoice=='rock'){
        userWin=compChoice=='paper'?false: true;

    }else if(userChoice=='paper'){
        userWin=compChoice=='rock'?true:false;
    }else{
        userWin= compChoice=='rock'? false:true;
    }
    showWinner(userWin,userChoice,compChoice);
    
    
}
};


choices.forEach((choice)=>{
    
    choice.addEventListener("click",() =>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
        
        
        

    });
        
});