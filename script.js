function frmSubmit(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var bloodType = document.getElementsByName("bloodType").value;

    document.getElementById("display").innerHTML = "Hi Welcome " + firstName; 
}