var requiredFields = document.getElementsByClassName("required")
var employees = {
    "oscar feliz": {
        "password":"aA@1",
        "id":123456,
    },
    "daniel sternberg": {
        "password": "bB!2",
        "id":234567,
    },
}

for (let i = 0; i < requiredFields.length; i++){
    requiredFields[i].innerHTML =  requiredFields[i].innerHTML + " *"
}

function login_regex_test(element, regex, alert_message){
    element_value = element.value.trim();

    if (regex.test(element_value) == false){
        alert(alert_message)
        element.focus();
    }
    
    return regex.test(element_value);
}

function validation(){
    const re_empty_string= /^(?!\s*$).+/;
    const re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re_password_length = /^.{0,12}$/;
    const re_uppercase = /[A-Z]/;
    const re_special = /[$&+,:;=?@#|'<>.^*()%!-]/;
    const re_numeric = /[0-9]/;
    const re_id = /[0-9]*6/;
    const re_phone = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    let firstname = document.getElementById("first");
    let lastname = document.getElementById("last");
    let email = document.getElementById("email");
    let password = document.getElementById("password");
    let id = document.getElementById("id");
    let phonenumber = document.getElementById("phone-number");
    let email_required = document.getElementById("email-confirmation").checked;
    let transaction = document.getElementById("transaction");

    if(login_regex_test(firstname,re_empty_string,"First Name is Required!") == false){return}
    if(login_regex_test(lastname,re_empty_string,"Last Name is Required!") == false){return}
    if(email_required && login_regex_test(email,re_empty_string,"Email is Required!") == false){return}
    if(email_required && login_regex_test(email,re_email,"Email is Invalid!") == false){return}
    if(login_regex_test(password,re_empty_string,"Password is Required!") == false){return}
    if(login_regex_test(password,re_password_length,"Password Must Not Exceed 12 Characters!") == false){return}
    if(login_regex_test(password,re_uppercase,"Password Must Contain an Uppercase Letter!") == false){return}
    if(login_regex_test(password,re_special,"Password Must Contain a Special Character!") == false){return}
    if(login_regex_test(password,re_numeric,"Password Must Contain a Number!") == false){return}
    if(login_regex_test(firstname,re_empty_string,"ID is Required!") == false){return}
    if(login_regex_test(id,re_id,"ID Must Be 6 Digits Long!") == false){return}
    if(login_regex_test(phonenumber,re_empty_string,"Phone Number is Required!") == false){return}
    if(login_regex_test(phonenumber,re_phone,"Phone Number is Wrong Format!") == false){return}

    verification(firstname.value.trim().toLowerCase() +" " +lastname.value.trim().toLowerCase(),password.value.trim(),id.value.trim(),transaction.value.trim())
}

function verification(name, password, id,transaction){
    if(name in employees){
        if (employees[name]["password"] != password){
            alert("Password is Wrong!");
            return;
        }
        if(employees[name]["id"] != id){
            alert("ID is wrong!");
            return;
        }
        
    }
    else {
        alert("Name doesn't Exist!")
        return;
    }

    alert("Welcome! You have enterenced the system" + " Name: " + name + " Transaction: " + transaction)
}
