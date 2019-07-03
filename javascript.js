document.getElementById("submit").onclick = validate;

function validate() {
  var email = document.getElementById("email").value;
  var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (validateEmail.test(email) == true) {
    document.getElementById("alert").innerHTML = "Thanks for your message!";
    document.getElementById("alert").style.color = "green";
    document.getElementById("display").style.display = "none";
  } else {
    document.getElementById("alert").innerHTML =
      "Your email address is invalid!";
    document.getElementById("alert").style.color = "red";
  }
}

function changeVal() {
  window.location.href = "#Kira";
}

function changeVal2() {
  window.location.href = "#Ghassan";
}
