

function submit () {
    console.log("submit() called");
    var name = document.getElementById('nameAlert');
    var email = document.getElementById('emailAlert');
    var phone = document.getElementById('phoneAlert');
    var yes = document.getElementById('yesAlert');
    var no = document.getElementById('noAlert');

    if (name.value == false) {
      console.log("name not inputted");
      // alert("Input your name please");
    }
    if (email.value == false) {
      console.log("email not inputted");
      // alert("which email is best to contact you");
    }
    if (phone.value == false) {
      console.log("phone not inputted");
      // alert("write a vaild phone number; no dashes");
    }else {
      console.log("inputs were made");
    }
}
