 function callDateTime() {
    var currentDate = (new Date()).toDateString();
    var currentTime = (new Date()).toLocaleTimeString();
    document.getElementById('date').innerHTML = `${currentDate} - ${currentTime}`;

}
setInterval(callDateTime, 1000);

const painSlider = document.getElementById('painLevel');
let painNumber = painSlider.value;
painSlider.addEventListener("input", painSliderUpdater);

function painSliderUpdater(){
painNumber = painSlider.value;
document.getElementById('painNumber').innerText = painNumber;
}




function openModal() {
    verifySubmit()
    displayReviewInfo();

}


function displayReviewInfo(){
  let fname = document.getElementById('fname').value; 
  let lname = document.getElementById('lname').value; 
  let mint = document.getElementById('mint').value; 
  let dob = document.getElementById('dob').value; 
  let ssn = document.getElementById('ssn').value; 
  let phone = document.getElementById('Phone').value; 
  let email = document.getElementById('Email').value; 
  let optin;
  if (document.getElementById('optYes').checked) {
    optin = "Yes";
  } else if (document.getElementById('optNo').checked) {
    optin = "No";
  }
  let add1 = document.getElementById('addLine1').value; 
  let add2 = document.getElementById('addLine2').value; 
  let city = document.getElementById('City').value; 
  let state = document.getElementById('State').value; 
  let zip = document.getElementById('Zip').value; 
  let painLevel = document.getElementById('painLevel').value; 
  let payment;
  if (document.getElementById('payOut').checked) {
   payment = "Out of pocket";
  } else if (document.getElementById('payIns').checked) {
   payment = "Insurance";
  }
  let sex;
  if (document.getElementById('sexMale').checked) {
   sex = "Male";
  } else if (document.getElementById('sexFemale').checked) {
   sex = "Female";
  } 
  let userID = document.getElementById('UserID').value;
  let password = document.getElementById('password').value;

  document.getElementById("reviewModal").style.display = "block";

if (!validateName('fname')) {
  document.getElementById('fnameR').innerText = "First Name: Invalid";
  document.getElementById('fnameR').style.color = "red"
} 
else {
  document.getElementById('fnameR').innerText = "First Name: " + fname;
  document.getElementById('fnameR').style.color = "green"
}


if (!validateName('lname')) {
  document.getElementById('lnameR').innerText = "Last Name: Invalid";
  document.getElementById('lnameR').style.color = "red"
} 
else {
  document.getElementById('lnameR').innerText = "Last Name: " + lname;
  document.getElementById('lnameR').style.color = "green"
}


    document.getElementById('mintR').innerText = "Middle Int: "+ mint;

    document.getElementById('dobR').innerText = "Date of Birth: "+ dob;

    document.getElementById('ssnR').innerText = "SSN: "+ ssn;

    document.getElementById('PhoneR').innerText = "Phone: "+ phone;

if (!validateEmail()) {
  document.getElementById('EmailR').innerText = "Email: Invalid";
  document.getElementById('EmailR').style.color = "red"
} 
else {
  document.getElementById('EmailR').innerText = "Email: " + email;
  document.getElementById('EmailR').style.color = "green"
}

    document.getElementById('OptinR').innerText = "Opt-In for texts: "+ optin;

    document.getElementById('addLine1R').innerText = "Address Line 1: "+ add1;

    document.getElementById('addLine2R').innerText = "Address Line 2: "+ add2;

    document.getElementById('CityR').innerText = "City: "+ city;

    document.getElementById('StateR').innerText = "State: "+ state;

    document.getElementById('ZipR').innerText = "Zip: "+ zip;

    document.getElementById('painLevelR').innerText = "Pain Level: "+ painLevel;

if (!validateUserID()) {
  document.getElementById('userIDR').innerText = "UserID: Invalid";
  document.getElementById('userIDR').style.color = "red"
} 
else {
  document.getElementById('userIDR').innerText = "UserID: " + userID;
  document.getElementById('userIDR').style.color = "green"
}


    document.getElementById('sexR').innerText = "Sex: "+ sex;

    document.getElementById('paymentR').innerText = "Payment Method: "+ payment;
if (!validatePassword()) {
  document.getElementById('passwordR').innerText = "Password: Invalid";
  document.getElementById('passwordR').style.color = "red"
} 
else {
  document.getElementById('passwordR').innerText = "Password: " + password;
  document.getElementById('passwordR').style.color = "green"
} 
}

function closeModal() {
    document.getElementById("reviewModal").style.display = "none";
}


  const nameCode = /^[A-Za-z]+(?:['-][A-Za-z]+)*$/;
  const emailCode = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function validateUserID() {
    let userIDV = document.getElementById('UserID').value;
    let letter1 = userIDV.charAt(0);
    let alertMessage = "";
    if (/^[0-9]$/.test(letter1)) {
      alertMessage += "The first character of your UserID should not be a number.\n";
    }
    if (userIDV.length <=5 || userIDV.length >=20){
      alertMessage += "The User ID should be between 5 and 20 characters.\n";
    }
    if(!/^[A-Za-z0-9_-]+$/.test(userIDV)){
      alertMessage +=  "The User ID should contain only numbers, letters, _ and -.\n";
    }
    if(alertMessage.length > 5){
      document.getElementById('UserIDError').innerText = alertMessage;  
    }
    else {
      document.getElementById('UserIDError').innerText = " ";
      return true;
    }

}

  function validatePassword() {
    let pwrd = document.getElementById('password').value;
    let alertMessage = "";
    if (pwrd.length < 8) {
      alertMessage += "The password must be longer than 8 characters.\n";
    }
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/.test(pwrd)){
      alertMessage += "The password must contain at least:\n- one uppercase letter\n- one lowercase leter\n- one digit\n";
    }
    if(pwrd == document.getElementById('UserID').value){
      alertMessage +=  "The password cannot match the User ID.\n";
    }
    if(pwrd != document.getElementById('repassword').value){
      alertMessage +=  "The passwords must match.\n";
    }
    if(alertMessage.length > 5){
      document.getElementById('passwordError').innerText = alertMessage;   
    }  
    else{
      document.getElementById('passwordError').innerText = " ";
      return true;
    }
}

  function validateRepassword() {
    let pwrd = document.getElementById('password').value;
    let alertMessage = "";
    if(pwrd != document.getElementById('repassword').value){
      alertMessage +=  "The passwords must match.\n";
    }
    if(alertMessage.length > 5){
      document.getElementById('repasswordError').innerText = alertMessage;
    }
    else{
      document.getElementById('repasswordError').innerText = " ";
      return true;
    }
}
  function validateName(type){
    const name = document.getElementById(type).value;
    const error = type +"Error";
    if(!nameCode.test(name)){
      document.getElementById(error).innerText = "Letters, Apostrophes and Dashes only";
    }
    else{
      document.getElementById(error).innerText = " ";
      return true;
    }
}    
    
  function validateEmail(){
    const emailV = document.getElementById('Email').value;
    if(!emailCode.test(emailV)){
      document.getElementById('EmailError').innerText = "Please fill out email in the format name@domain.tld";
      return false;
    }
    else{
      document.getElementById('EmailError').innerText = " ";
      return true;
    }
  } 

 function verifySubmit(){
  let fnameV1 = validateName('fname');
  let lnameV1 = validateName('lname');
  let emailV1 = validateEmail();
  let userIDV1 = validateUserID();
  let pwrdV1 = validatePassword();
  let repwrdV1 = validateRepassword();

  if (fnameV1 && lnameV1 && emailV1 && userIDV1 && pwrdV1 && repwrdV1) {
    document.getElementById('submitBtnContainer').style.display = "block";
  } 
  else {
  document.getElementById('submitBtnContainer').style.display = "none";
  }

 } 




let ssnValidate = document.getElementById('ssn');

ssnValidate.addEventListener("input", (e) => {
let ssnInput = ssnValidate.value;
ssnInput = ssnInput.replace(/\D/g, "");
ssnInput = ssnInput.substring(0, 9);

if (ssnInput.length > 5) {
  ssnInput = ssnInput.replace(/(\d{3})(\d{2})(\d{1,4})/, "$1-$2-$3");
} 
else if (ssnInput.length > 3) {
 ssnInput = ssnInput.replace(/(\d{3})(\d{1,2})/, "$1-$2");
}

ssnValidate.value = ssnInput;
});

let phoneValidate = document.getElementById('Phone');

phoneValidate.addEventListener("input", (e) => {
let phoneInput = phoneValidate.value;
phoneInput = phoneInput.replace(/\D/g, "");
phoneInput = phoneInput.substring(0, 10);

if (phoneInput.length > 6) {
  phoneInput = phoneInput.replace(/(\d{3})(\d{3})(\d{1,4})/, "$1-$2-$3");
} 
else if (phoneInput.length > 3) {
 phoneInput = phoneInput.replace(/(\d{3})(\d{1,3})/, "$1-$2");
}

phoneValidate.value = phoneInput;
});