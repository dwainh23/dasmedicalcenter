
const wrapper=document.querySelector('.wrapper');

const loginLink=document.querySelector('.login-link');

const registerLink=document.querySelector('.register-link');

const btnPopup=document.querySelector('.btnLogin-popup');

const iconClose=document.querySelector('.icon-close');

iconClose.addEventListener('click',()=>{
    wrapper.style.transform=(' scale(0)');
    wrapper.classList.remove('active-popup');
});

btnPopup.addEventListener('click',()=>{
    wrapper.style.transform="scale(1)";
    wrapper.classList.add('active-popup');

});
registerLink.addEventListener('click',()=>{
    wrapper.classList.add('active');
});

loginLink.addEventListener('click',()=>{
    wrapper.classList.remove('active');
});
/* ======================================================================================= */
/* ==================================register credential validation======================= */
/* ======================================================================================= */
const registerForm = document.querySelector('#registrationForm-id');
const rUsername = document.querySelector('#register-username-id');
const rEmail = document.querySelector('#register-email-id');
const rPassword = document.querySelector('#register-password-id');

registerForm.addEventListener('submit', e => {
    validateInputs();
    if(isFormValid()==true){
        signUpStoreFunc();
        registerForm.submit();
    }
    else{
        e.preventDefault();
    }

});

function isFormValid(){
    const inputContainers= registerForm.querySelectorAll('#r-input-box');
    let registerResult=true;
    inputContainers.forEach((haveError)=>{
    if(haveError.classList.contains('error')){
    registerResult=false;
    }
    });
    return registerResult;
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = rEmail => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(rEmail).toLowerCase());
}

const validateInputs = () => {
    const rUsernameValue = rUsername.value.trim();
    const rEmailValue = rEmail.value.trim();
    const rPassValue = rPassword.value.trim();

    if(rUsernameValue === '') {
        setError(rUsername, 'name is required');
    } else {
        setSuccess(rUsername);
    }

    if(rEmailValue === '') {
        setError(rEmail, 'Email is required');
    } else if (!isValidEmail(rEmailValue)) {
        setError(rEmail, 'Provide a valid email address');
    } else {
        setSuccess(rEmail);
    }

    if(rPassValue === '') {
        setError(rPassword, 'number is required');
    } else if (rPassValue.length <8 ) {
        setError(rPassword, 'number must be at least 8 character.');
    } else if (rPassValue.length === 8 ){
        setSuccess(rPassword);
    }else{
        setError(rPassword, 'number must be at least 8 character.');
    }
};

/* ========================================================================================= */
/* ========================================Signup storing================================== */
/* ========================================================================================= */
function signUpStoreFunc(e) {

    const singUpUsername = document.querySelector('#register-username-id').value;
    const singUpEmail = document.querySelector('#register-email-id').value;
    const singUpPassword = document.querySelector('#register-password-id').value;
    var user={
        username:  singUpUsername,
        email:     singUpEmail,
        password: singUpPassword
    };
    var json=JSON.stringify(user);
    localStorage.setItem('email', json);
    alert("user added successfully");
}

/* ========================================================================================= */
/* ========================================Login =========================================== */
/* ========================================================================================= */

function loginFunc(){
    const loginEmail = document.querySelector('#login-email-id').value;
    const loginPassword = document.querySelector('#login-password-id').value;
    const loginForm = document.querySelector('#loginForm-id');

    var data=JSON.parse(localStorage.getItem('email'));
    console.log(data);
    let loginResult=false;
    if(data===null){
        alert("null data");
        loginResult=false;
        e.preventDefault();
        
    }
    else if(loginEmail==data.email && loginPassword==data.password){
        loginResult=true;
        loginForm.submit();
        
        alert("login success");
    }
    else if(loginEmail!=data.email && loginPassword!=data.password){
        e.preventDefault();
        loginResult=false;
        alert("login failed. wrong Email or password");

    }
    return loginResult;
}

//     const loginForm = document.querySelector('#loginForm-id');
// loginForm.addEventListener('submit', e => {

//     const signInBtn=document.getElementById('#login-button-id');

//     if(loginFunc()==true){
//         loginForm.submit();
//     }
//     else if(loginFunc()==false){
//         e.preventDefault();
//         alert("login failure");
//     }
//     else{
//         e.preventDefault();
//         alert("error");
//     }

// });
