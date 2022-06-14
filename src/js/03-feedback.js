// import throttle from 'lodash.throttle';

// const FEEDBACK_KEY = 'feedback-form-state';

// const formRef = document.querySelector('.feedback-form');
// const emailRef = document.querySelector('[name="email"]');
// const messageRef = document.querySelector('[name="message"]');
// const feedbackForm = { email: '', message: '' };
// let storageData = localStorage.getItem(FEEDBACK_KEY);
// const parsedLocalStorageData = JSON.parse(storageData);

// formRef.addEventListener('input', throttle(onFormInput, 500));

// formRef.addEventListener('submit', onFormSubmit);

// onFormData();

// function onFormInput(event) {
//   if (event.target.name === 'email') {
//     feedbackForm.email = event.target.value;
//   } else if (event.target.name === 'message') {
//     feedbackForm.message = event.target.value;
//   }
//   localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackForm));
// }

// function onFormData() {
//   if (parsedLocalStorageData) {
//     emailRef.value = parsedLocalStorageData.email;
//     messageRef.value = parsedLocalStorageData.message;
//   }
// }

// function onFormSubmit(event) {
//   event.preventdefault();

//   const {
//     elements: { email, message },
//   } = event.currentTarget;

//   if (email.value === '' || message.value === '') {
//     console.log('fill in all fields');
//   }
//   console.log(feedbackForm);
//   feedbackForm.email = '';
//   feedbackForm.message = '';
//   event.currentTarget.reset();
//   localStorage.removeItem(FEEDBACK_KEY);
// }

import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, message },
  } = event.target;

  if (email.value === '' || message.value === '') {
    return console.log('You need fill in all fields!');
  }

  console.log(`email: "${email.value}", message: "${message.value}"`);

  localStorage.removeItem(localStorageLable);

  event.target.reset();
}

const localStorageLable = 'feedback-form-state';
const localStorageFormData = localStorage.getItem(localStorageLable);

let formData = JSON.parse(localStorageFormData);
if (formData === null) {
  formData = {
    email: '',
    message: '',
  };
}

printFormData(formData);

function printFormData(storage) {
  document.querySelector('input[name=email]').value = storage.email;
  document.querySelector('textarea[name=message]').textContent =
    storage.message;
}

feedbackForm.addEventListener('input', throttle(logInputedString, 500));

function logInputedString(e) {
  const name = e.target.name;
  const value = e.target.value;
  switch (name) {
    case 'email':
      loggingEmailMessage(name, value);
      break;

    case 'message':
      loggingEmailMessage(name, value);
      break;

    default:
      break;
  }
}

function loggingEmailMessage(name, value) {
  formData[name] = value;

  localStorage.setItem(localStorageLable, JSON.stringify(formData));
}
