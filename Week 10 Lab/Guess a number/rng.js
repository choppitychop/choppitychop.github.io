function ranNumGen(){
    let computerNumber = [];
    let userGuess = parseInt(prompt("Pick a number between 1-10 to see how many times it appears in my list: "));
    let counter = 0;
    
    if(userGuess >=11 || userGuess <=0){
            document.getElementById("display-result").innerHTML+="Please enter numbers between 1-10 only.<br>"
        }

    else {
        for(i=0; i<5; i++){
            computerNumber[i] = Math.floor(Math.random()*10+1);
            if(userGuess === computerNumber[i]){
                counter++;
            }
        }
    
        document.getElementById("display-result").innerHTML+="You entered # "+userGuess+", it appeared "+counter+" time(s) in my list.<br>"
        document.getElementById("rng-list").innerHTML+="My list contained these numbers: "+computerNumber.toString()+"<br>";
    }
   

}