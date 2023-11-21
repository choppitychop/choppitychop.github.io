function num_of_subjects(){
    let subs_nums = prompt("How many subjects do you have? ")
    let results=0;
    let grade="";
    for(i=1; i<=subs_nums; i++){
        results=prompt("Enter result for subject "+i+": ");
        document.getElementById("subject-results").innerHTML+="Your result for subject "+i+" is "+results+"<br>";
        if(results >=80){
            grade="A";
            document.getElementById("subject-results").innerHTML+="Grade: "+grade+"<br><br>";
        }
        else if(results >=70){
            grade="B";

            document.getElementById("subject-results").innerHTML+="Grade: "+grade+"<br><br>";
        }
        else if(results >=60){
            grade="C";

            document.getElementById("subject-results").innerHTML+="Grade: "+grade+"<br><br>";
        }
        else if(results >=40){
            grade="D";

            document.getElementById("subject-results").innerHTML+="Grade: "+grade+"<br><br>";
        }
        else {
            grade="F";

            document.getElementById("subject-results").innerHTML+="Grade: "+grade+"<br><br>";
        }
    }
}
