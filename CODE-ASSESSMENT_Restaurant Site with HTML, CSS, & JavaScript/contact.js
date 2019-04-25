var name = document.getElementById('nameAlert');
var email = document.getElementById('emailAlert');
var phone = document.getElementById('phoneAlert');
var yes = document.getElementById('yesAlert');
var no = document.getElementById('noAlert');

function yourInquiry () {
    name.required = true;
    email.required = true;
    phone.required = true;
    yes.required = true;
    no.required = true;

    if (name.value == false) {
      console.log("Alert: Input your name please");
      // alert("Input your name please");
    }
    if (email.value == false) {
      console.log("Alert: which email is best to contact you");
      // alert("which email is best to contact you");
    }
    if (phone.value == false) {
      console.log("Alert: write a vaild phone number; no dashes");
      // alert("write a vaild phone number; no dashes");
    }
    if (yes.value == false && no.value == false) {
      console.log("Alert: we would like to know if you have been here before, to better assist you with your inquiry");
      // alert("we would like to know if you have been here before, to better assist you with your inquiry");
    }
    else {
      console.log("inputs were made");
    }
}
