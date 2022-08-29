let throttle = require('lodash.throttle');

const form = document.querySelector('form');

const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');

let storageForm = { email: '', message: '' };

let loadingStorageForm = JSON.parse(
  localStorage.getItem('feedback-form-state', storageForm)
);

if (loadingStorageForm === null) {
  loadingStorageForm = { email: '', message: '' };
}

inputEmail.value = loadingStorageForm.email;
inputMessage.value = loadingStorageForm.message;

form.addEventListener('submit', onSubmitForm);
inputEmail.addEventListener('input', throttle(onInputEmail, 500));
inputMessage.addEventListener('input', throttle(onInputMessage, 500));

function onSubmitForm(event) {
  // Чтобы была видна консоль, без перезагрузки страницы
  event.preventDefault();
  console.log(
    `SUBMIT --> email : ${inputEmail.value}  message : ${inputMessage.value}`
  );
  localStorage.removeItem('feedback-form-state');
  form.reset();
}

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
