

function validateForm() {
    
    var form = document.getElementById("survey-form");

    
    var firstName = form.elements["first-name"];
    var lastName = form.elements["last-name"];
    var dob = form.elements["dob"];
    var country = form.elements["country"];
    var gender = form.elements["gender"];
    var profession = form.elements["profession"];
    var email = form.elements["email"];
    var mobileNumber = form.elements["mobile-number"];

  
    if (firstName.value == "" || lastName.value == "" || dob.value == "" || country.value == "" || profession.value == "" || email.value == "" || mobileNumber.value == "") {
        alert("Please fill all the fields");
        return false;
    }

    
    var genderChecked = false;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderChecked = true;
            break;
        }
    }

    if (!genderChecked) {
        alert("Please select a gender");
        return false;
    }

    
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailRegex.test(email.value)) {
        alert("Please enter a valid email address");
        return false;
    }

    
    var mobileNumberRegex = /^[0-9]{10}$/;

    if (!mobileNumberRegex.test(mobileNumber.value)) {
        alert("Please enter a valid mobile number");
        return false;
    }

    
    return true;
}


function submitForm() {
    
    if (!validateForm()) {
        return false;
    }

    
    var form = document.getElementById("survey-form");

    
    var firstName = form.elements["first-name"];
    var lastName = form.elements["last-name"];
    var dob = form.elements["dob"];
    var country = form.elements["country"];
    var gender = form.elements["gender"];
    var profession = form.elements["profession"];
    var email = form.elements["email"];
    var mobileNumber = form.elements["mobile-number"];

   
    var headerText = "You have submitted the following information:";
    document.getElementById("headerText").innerHTML = headerText;

    document.getElementById("first-name-value").innerHTML = firstName.value;
    document.getElementById("last-name-value").innerHTML = lastName.value;
    document.getElementById("dob-value").innerHTML = dob.value;
    document.getElementById("country-value").innerHTML = country.value;
    for (var i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            document.getElementById("gender-value").innerHTML = gender[i].value ;
        }
    }
    
    document.getElementById("profession-value").innerHTML = profession.value;
    document.getElementById("email-value").innerHTML = email.value;
    document.getElementById("mobile-number-value").innerHTML = mobileNumber.value;

    openModal();

    
    resetForm();

    
    return false;
}


function resetForm() {
    
    var form = document.getElementById("survey-form");

   
    var firstName = form.elements["first-name"];
    var lastName = form.elements["last-name"];
    var dob = form.elements["dob"];
    var country = form.elements["country"];
    var gender = form.elements["gender"];
    var profession = form.elements["profession"];
    var email = form.elements["email"];
    var mobileNumber = form.elements["mobile-number"];

    
    firstName.value = "";
    lastName.value = "";
    dob.value = "";
    country.value = "";

    for (var i = 0; i < gender.length; i++) {
        gender[i].checked = false;
    }

    profession.value = "";
    email.value = "";
    mobileNumber.value = "";

    
    return false;
}
var dailog = document.getElementById("dialog");

function openModal() {
    // dailog.show(); 
    dailog.showModal();
}

function closeModal() {
    dailog.close();
} 
