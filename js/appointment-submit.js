
const params = new URLSearchParams(window.location.search);

const name = params.get('name');
const email = params.get('email'); 
const pNumber = params.get('number'); 
const dateTime = params.get('date'); 
var selectedDoctorVale= localStorage.getItem('select-lists');

document.getElementById('submitted-name').innerHTML = name;
document.getElementById('submitted-email').innerHTML = email;
document.getElementById('submitted-number').innerHTML = pNumber;
document.getElementById('submitted-doctor').innerHTML =  selectedDoctorVale;
document.getElementById('submitted-dateTime').innerHTML = dateTime;
