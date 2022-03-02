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

function validation(){
    const re_email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const re_password_length = /^.{0,12}$/;
    const re_uppercase = /[A-Z]/;
    const re_special = /[$&+,:;=?@#|'<>.^*()%!-]/;
    const re_numeric = /[0-9]/;
    const re_id = /[0-9]*6/;
    const re_phone = /^(\+0?1\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$/;

    let firstname = document.getElementById("first").value.trim();
    let lastname = document.getElementById("last").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let id = document.getElementById("id").value.trim();
    let phonenumber = document.getElementById("phone-number").value.trim();
    let email_required = document.getElementById("email-confirmation").checked;
    let transaction = document.getElementById("transaction").value.trim();

    if(firstname == ""){
        alert("First Name is Required!");
        document.getElementById("first").focus();
        return;
    }

    if(lastname == ""){
        alert("Last Name is Required!");
        document.getElementById("last").focus();
        return;  
    }

    if (email_required && email == ""){
        alert("Email is Required!");
        document.getElementById("email").focus();
        return;
    }

    if(email_required){
        if(re_email.test(email) == false){
            alert("Email is Invalid!")
            return;
        }
    }

    if (password == ""){
        alert("Password is Required!");
        document.getElementById("password").focus();
        return;
    }

    if(re_password_length.test(password) == false){
        alert("Password Must Not Exceed 12 Characters");
        document.getElementById("password").focus();
        return;
    }

    if (re_uppercase.test(password) == false){
        alert("Password Must Contain an Uppercase Letter");
        document.getElementById("password").focus();
        return;
    }

    if (re_special.test(password) == false){
        alert("Password Must Contain a Special Character");
        document.getElementById("password").focus();
        return;
    }

    if (re_numeric.test(password) == false){
        alert("Password Must Contain a Number");
        document.getElementById("password").focus();
        return;
    }

    if (id == ""){
        alert("ID is Required!");
        document.getElementById("id").focus();
        return
    }

    if(re_id.test(id) == false){
        alert("ID Must Be 6 Digits Long");
        document.getElementById("id").focus();
        return;
    }

    if (phonenumber==""){
        alert("Phone Number is Required!");
        document.getElementById("phone-number").focus();
        return;
    }
    
    if(re_phone.test(phonenumber) == false){
        alert("Phone Number is Wrong Format!");
        document.getElementById("phone-number").focus();
        return;
    }


    console.log()
    verification(firstname.toLowerCase() +" " +lastname.toLowerCase(),password,id,transaction)
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
