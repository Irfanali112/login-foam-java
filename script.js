


var names = [];
var emails = [];
var passwaords = [];

function signup() {

  names.push(document.getElementById("name").value);

  emails.push(document.getElementById("email").value);

  passwaords.push(document.getElementById("password").value);

  localStorage.setItem("name", JSON.stringify(names));
  localStorage.setItem("email", JSON.stringify(emails));
  localStorage.setItem("password", JSON.stringify(passwaords));

  alert("signup success")
  window.location.href = "login.html"

  return false;

}



names = JSON.parse(localStorage.getItem("name"));
emails = JSON.parse(localStorage.getItem("email"));
passwaords = JSON.parse(localStorage.getItem("password"));

function login() {


  const email = document.getElementById("email1").value;
  const passwords = document.getElementById("pass1").value;

  

  let isfound = false;

  for (i = 0; i < email.length; i++)

    if (email === emails[i]) {

      isfound = i;
      localStorage.setItem("isfound", JSON.stringify(isfound));
      break;

    }

  if (isfound === false) {

    alert("user is not found")
  }
  else if (passwaords[isfound] === passwords) {

    alert("login success");
    window.location.href = "./detail.html"

  } else {

    alert("user name or password wrong")


  }

  return false;

}

var index = JSON.parse(localStorage.getItem("isfound"));



function loginsucess() {

  document.getElementById("email").innerHTML = names[index];
  document.getElementById("name").innerHTML = emails[index];







}