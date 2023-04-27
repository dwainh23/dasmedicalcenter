const form1 = document.querySelector('#form-box');
const nameC = document.querySelector('#name');
const emailC = document.querySelector('#email');
const numberC = document.querySelector('#number');
const iconClose=document.querySelector('.icon-close');


form1.addEventListener('submit', e => {
    validateInputs();
    if(isFormValid()==true){
        form1.submit();
    }
    else{
        e.preventDefault();
    }
    
});
function isFormValid(){
    let result=true;
    const inputContainers= form1.querySelectorAll('.input-box');
    inputContainers.forEach((haveError)=>{
    if(haveError.classList.contains('error')){
        result=false;
    }
    else if(haveError.classList.contains('success')){
        result=true;
    }
    });
    return result;
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

const isValidEmail = emailC => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(emailC).toLowerCase());
}

const validateInputs = () => {
    const nameValue = nameC.value.trim();
    const emailValue = emailC.value.trim();
    const numberValue = numberC.value.trim();

    if(nameValue === '') {
        setError(nameC, 'name is required');
    } else {
        setSuccess(nameC);
    }

    if(emailValue === '') {
        setError(emailC, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(emailC, 'Provide a valid email address');
    } else {
        setSuccess(emailC);
    }

    if(numberValue === '') {
        setError(numberC, 'number is required');
    } else if (numberValue.length <8 ) {
        setError(numberC, 'number must be at least 8 character.')
    } else if (numberValue.length == 8 ){
        setSuccess(numberC);
    }
};
