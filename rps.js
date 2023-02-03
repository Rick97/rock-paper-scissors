var userScore=0;
var cpuScore=0;
        
var userChoice;
var cpuChoice;
var allChoices=[
    {
        name:"rock",
        image:"sasso.png"
    },
    {
        name:"paper",
        image:"carta.png"
    },
    {
        name:"scissors",
        image:"forbice.png"
    }
];
var possibleUserChoices=document.getElementsByClassName("user-choice");
        
for(i=0; i<possibleUserChoices.length; i++){
    possibleUserChoices[i].addEventListener("click", onUserPick)
}    
function onUserPick(){
        userChoice=this.dataset.name;
        cpuPick();
        var cpuImage="<img src='"+ cpuChoice.image+"'>";
        var cpuText="<h3 style='text-transform: capitalize;'>"+cpuChoice.name+"</h3>";
        document.getElementById("computer-choice").innerHTML= cpuImage+cpuText;
        document.getElementById("result").innerHTML=checkScore();
        document.getElementById("player-score").innerHTML=userScore;
        document.getElementById("cpu-score").innerHTML=cpuScore;
}
        
function cpuPick(){
    cpuChoice=allChoices[Math.floor(Math.random()*allChoices.length)];
}

        
function checkScore(){
    if(userChoice==cpuChoice.name){
        return"Tie";
    }
    if(userChoice=="rock"){
        if(cpuChoice.name=="paper"){
            cpuScore++;
            console.log(cpuScore);
            return "You lose";
        }
        else{
            userScore++;
            return "You win!";
        }
    }
    if(userChoice=="paper"){
        if(cpuChoice.name=="scissors"){
            cpuScore++;
            return "You lose";
        }
        else{
            userScore++;
            return "You win!";
        }
    }
    if(userChoice=="scissors"){
        if(cpuChoice.name=="rock"){
            cpuScore++;
            return "You lose";
        }
        else{
            userScore++;
            return "You win!";
        }
    }
    

}
