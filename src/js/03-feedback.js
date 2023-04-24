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
    if (emailEl.value === '' || messageEl.value === '') {
        btnEl.disabled = true;
    } else {
          btnEl.disabled = false;
    }

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
    e.preventDefault();
    btnEl.disabled = true;
    if (emailEl.value === "" || messageEl.value === "") {
        alert('Please fill all blank spaces!');

    } else {
        const data = {
            email: emailEl.value,
            message: messageEl.value,
        };
        console.log(data)
        localStorage.clear();
        formEl.reset();
    }
};

formEl.addEventListener('submit', clearData);

