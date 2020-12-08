


var names=[];
var emails=[];
var passwaords=[];

function login(){

    names.push(document.getElementById("name").value);

    emails.push(document.getElementById("email").value);
    passwaords.push(document.getElementById("password").value);
 
      localStorage.setItem("names",JSON.stringify(name));
      localStorage.setItem("emails",JSON.stringify(email));
      localStorage.setItem("passwords",JSON.stringify(password));


     window.location.href="login.html"

      return false;

}


