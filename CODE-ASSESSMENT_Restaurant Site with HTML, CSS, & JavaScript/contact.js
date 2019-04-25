

function submit () {
    console.log("submit() called");
    var name = document.getElementById('nameAlert');
    var email = document.getElementById('emailAlert');
    var phone = document.getElementById('phoneAlert');
    var yes = document.getElementById('yesAlert');
    var no = document.getElementById('noAlert');

    if (name.value == "") {
      console.log("name not inputted");
      alert("Input your name please.");
    }
    if (email.value == "") {
      console.log("email not inputted");
      alert("Which email is best to contact you.");
    }
    if (phone.value == "") {
      console.log("phone not inputted");
      alert("Write a vaild phone number; no dashes.");
    }else {
      console.log("inputs were made");
      alert("Thank you for submitting your info!");
    }
}
