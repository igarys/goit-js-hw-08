import  throttle  from 'lodash.throttle';

const throttle = require('lodash.throttle');

const emailEl = document.querySelector('input[type = "email"]');
const messageEl = document.querySelector('textarea[name= "message"]');
const formEl = document.querySelector('.feedback-form');
const btnEl = document.querySelector('button[type = "submit"]');

// function disabledBtn() {
//     if (emailEl.value === "" || messageEl.value === "")
    
//     btnEl.disabled = true;
// }
// disabledBtn();

function saveForm() {
    btnEl.disabled = false;
    const data = {
        email: emailEl.value,
        message: messageEl.value,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(data));
};

formEl.addEventListener('input',throttle(saveForm, 500));

function autoFillForm() {

 const updateData = JSON.parse(
    localStorage.getItem(`feedback-form-state` || '')
  );
  emailEl.value = updateData.email || '';
  messageEl.value = updateData.message || '';
}

autoFillForm();



const clearData = (e) => {
    if (emailEl.value === "" || messageEl.value === "") {
        e.preventDefault();
        alert('Please fill all blank spaces!');

    } else {
        e.preventDefault();
        // localStorage.clear();
        formEl.reset();
    }
};

formEl.addEventListener('submit', clearData);
