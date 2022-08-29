const inputEmail = document.querySelector('input');
const inputMessage = document.querySelector('textarea');
const inputSabmit = document.querySelector('button');

let storageForm = { email: '', message: '' };

let localStorageObject = localStorage.getItem(
  'feedback-form-state',
  JSON.stringify(storageForm)
);
let insertStorageForm = JSON.parse(localStorageObject);

if (insertStorageForm === null) {
  insertStorageForm = { email: '', message: '' };
}

inputSabmit.addEventListener('click', onSubmitForm);
inputEmail.addEventListener('input', onInputEmail);
inputMessage.addEventListener('input', onInputMessage);

function onSubmitForm(event) {
  event.preventDefault();
  console.log(
    `SUBMIT --> email : ${inputEmail.value}  message : ${inputMessage.value}`
  );
  localStorage.removeItem('feedback-form-state');
  inputEmail.value = '';
  inputMessage.value = '';
}
inputEmail.value = insertStorageForm.email;
inputMessage.value = insertStorageForm.message;

function onInputEmail(event) {
  storageForm.email = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(storageForm));
}

function onInputMessage(event) {
  storageForm.message = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(storageForm));
}
