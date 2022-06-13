import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const formRef = document.querySelector('.feedback-form');
const emailRef = document.querySelector('[name="email"]');
const messageRef = document.querySelector('[name="message"]');
const feedbackForm = { email: '', message: '' };
let storageData = localStorage.getItem(FEEDBACK_KEY);
const parsedLocalStorageData = JSON.parse(storageData);

formRef.addEventListener('input', throttle(onFormInput, 500));

formRef.addEventListener('submit', onFormSubmit);

onFormData();

function onFormInput(event) {
  if (event.target.name === 'email') {
    feedbackForm.email = event.target.value;
  } else if (event.target.name === 'message') {
    feedbackForm.message = event.target.value;
  }
  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackForm));
}

function onFormData() {
  if (parsedLocalStorageData) {
    emailRef.value = parsedLocalStorageData.email;
    messageRef.value = parsedLocalStorageData.message;
  }
}

function onFormSubmit(event) {
  event.preventdefault();

  const {
    elements: { email, message },
  } = event.currentTarget;

  if (email.value === '' || message.value === '') {
    console.log('fill in all fields');
  }
  console.log(feedbackForm);
  feedbackForm.email = '';
  feedbackForm.message = '';
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
}
