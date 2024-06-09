let userscore=0;
let compscore=0;

const userscoree=document.querySelector("#userscore");
const compscoree=document.querySelector("#compscore");
let resetbtn=document.querySelector("#reset");
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const genratecomp = () =>
{
    const options=["rock","paper","scissors"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}
const showwinner= (userwin,userchoice,compchoice) =>
{
    if(userwin)
    {
        userscore++;
        userscoree.innerText=userscore;
        console.log("you win");
        msg.innerText=`you win! your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="#008000";
    }
    else
    {
        compscore++;
        compscoree.innerText=compscore;
        console.log("you loose");
        msg.innerText=`you loose ${compchoice} beats  your ${userchoice}`;
        msg.style.backgroundColor="	#ff0000";
    }
}
const drawgame = () =>
{
    console.log("game was draw");
    msg.innerText="Game is Draw";
    msg.style.backgroundColor="	#001b31";
    
}
const playgame= (userchoice) =>
{
    console.log("user choice = ",userchoice);
    const compchoice=genratecomp();
    console.log("comp choice = ",compchoice);

    if(userchoice===compchoice)
    {
        drawgame();
    }
    else
    {
        let userwin=true;
        if(userchoice==="rock")
        {
           userwin = compchoice==="paper" ? false : true;
        }
        else if(userchoice==="paper")
        {
              userwin = compchoice==="scissors" ? false : true;
        }
        else{
            userwin = compchoice === "rock" ? false : true;
        }
        showwinner(userwin,userchoice,compchoice);
    }
};
choices.forEach((choice) =>
{
    choice.addEventListener("click", ()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
resett.addEventListener("click",resetgame);