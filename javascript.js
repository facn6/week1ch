document.getElementById("submit").onclick = validate;

function validate() {
  var name = document.getElementById("name").value;
  var validateName = /^[a-z ,.'-]+$/i;

  var email = document.getElementById("email").value;
  var validateEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (validateEmail.test(email) == true && validateName.test(name) == true) {
    document.getElementById("alert").innerHTML =
      "Your message has been sent successfully, we will be in touch with you ASAP.";
    document.getElementById("alert").style.color = "green";
    document.getElementById("display").style.display = "none";
  } else if (
    validateEmail.test(email) == false &&
    validateName.test(name) == false
  ) {
    document.getElementById("alert").innerHTML =
      "Your email address and name are invalid!";
    document.getElementById("alert").style.color = "red";
  } else if (validateEmail.test(email) == false) {
    document.getElementById("alert").innerHTML =
      "Your email address is invalid!";
    document.getElementById("alert").style.color = "red";
  } else if (validateName.test(name) == false) {
    document.getElementById("alert").innerHTML = "Your sure that's your name?";
    document.getElementById("alert").style.color = "red";
  } else {
    document.getElementById("alert").innerHTML =
      "The system is down, feel free to send us an email on DontBother@NeverGonnaCheck.com";
    document.getElementById("alert").style.color = "red";
  }
}
