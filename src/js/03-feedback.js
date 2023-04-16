import  throttle  from 'lodash.throttle';

const throttle = require('lodash.throttle');

const emailEl = document.querySelector('input[type = "email"]');
const messageEl = document.querySelector('textarea[name= "message"]');
const formEl = document.querySelector('.feedback-form');
const btn = document.querySelector('button');


function saveForm() {
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
    localStorage.clear();
    formEl.reset();
};

formEl.addEventListener('submit', clearData);