function frmSubmit(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var bloodType = checkBloodType();

    document.getElementById("displayName").innerHTML = greetMsg(firstName, lastName);
    document.getElementById("displayBloodComp").innerHTML = checkComp(bloodType);
    
}

function greetMsg(fName, lName){
    return "Hi Welcome " + fName + " " + lName;
}

function checkBloodType(){
    if(document.getElementById("A").checked)
        return "A";
    else if(document.getElementById("O").checked)
        return "O";
}

function checkComp(bloodType){
    if(bloodType == "O")
        return "You Can Donor For Anyone";  
    else if(bloodType == "AB")
        return "You can Receive From Anyone";
    else if(bloodType == "A" || bloodType == "B")
        return "You Should recive or donate for same Blood Group";
    else    
        return "There is no Compatablity";
}




