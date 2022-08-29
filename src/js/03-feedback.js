let throttle = require('lodash.throttle');

const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');
const inputSabmit = document.querySelector('button');

let storageForm = { email: '', message: '' };

let loadingStorageForm = JSON.parse(
  localStorage.getItem('feedback-form-state', storageForm)
);

console.log(loadingStorageForm);

if (loadingStorageForm === null) {
  loadingStorageForm = { email: '', message: '' };
}

inputSabmit.addEventListener('click', onSubmitForm);
inputEmail.addEventListener('input', throttle(onInputEmail, 500));
inputMessage.addEventListener('input', throttle(onInputMessage, 500));

function onSubmitForm(event) {
  event.preventDefault();
  console.log(
    `SUBMIT --> email : ${inputEmail.value}  message : ${inputMessage.value}`
  );
  localStorage.clear('feedback-form-state');
  inputEmail.value = '';
  inputMessage.value = '';
}
inputEmail.value = loadingStorageForm.email;
inputMessage.value = loadingStorageForm.message;

function memoryForm() {
  localStorage.setItem('feedback-form-state', JSON.stringify(storageForm));
}

function onInputEmail(event) {
  storageForm.email = event.target.value;
  memoryForm();
}

function onInputMessage(event) {
  storageForm.message = event.target.value;
  memoryForm();
}
