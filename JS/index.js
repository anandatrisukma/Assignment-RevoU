//VALIDATE FORM
function validateform() {
  // GET INPUT VALUE
  var name = document.forms["contact-us-form"]["name"].value;
  var email = document.forms["contact-us-form"]["email"].value;
  var destination = document.forms["contact-us-form"]["destination"].value;
  // VALIDATE INPUT
  if (name == "" || email == "" || destination == "") {
    alert("Please fill in your form completely.");
    return false;
  } else {
    alert("The form has been sent. Thank you.");
  }
}
// BANNER SLIDESHOW
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("testimony");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {
    myIndex = 1;
  }
  x[myIndex - 1].style.display = "block";
  setTimeout(carousel, 5000);
}
