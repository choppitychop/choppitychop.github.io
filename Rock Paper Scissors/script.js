function game(){
    var userChoice;
    var computerNum;

    userChoice=parseInt(prompt("Enter your choice: "));
    computerOptions = [1,2,3]
    

    if(userChoice==1){
     
        if(computerNum==1){
            alert("Tie!")
        }
        else if(computerNum==2){
            alert("You lose!")
        } 
        else {
            alert("You win! Computer chose Scissors")
        }
    }
    
    if(userChoice==2){
        if(computerNum==2){
            alert("Tie!")
        }
        else if(computerNum==3){
            alert("You lose!")
        } 
        else {
            alert("You win! Computer chose Rock")
        }
    }

    if(userChoice==3){
        if(computerNum==3){
            alert("Tie!")
        }
        else if(computerNum==1){
            alert("You lose!")
        } 
        else {
            alert("You win! Computer chose Paper")
        }
    }
}


