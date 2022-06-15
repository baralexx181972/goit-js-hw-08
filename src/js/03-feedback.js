import throttle from 'lodash.throttle';

const FEEDBACK_KEY = 'feedback-form-state';

const refs = {
  emailRef: document.querySelector('[name="email"]'),
  messageRef: document.querySelector('[name="message"]'),
  formRef: document.querySelector('.feedback-form'),
  submitBtn: document.querySelector('button'),
};

if (localStorage.getItem(FEEDBACK_KEY) !== null) {
  const feedbackLocalData = JSON.parse(localStorage.getItem(FEEDBACK_KEY));

  refs.emailRef.value = feedbackLocalData.email;
  refs.messageRef.value = feedbackLocalData.message;
}

refs.formRef.addEventListener('input', throttle(onFormInput, 500));

let feedbackForm = {
  email: refs.emailRef.value,
  message: refs.messageRef.value,
};

function onFormInput(event) {
  if (event.target === refs.emailRef) {
    feedbackForm.email = event.target.value;
  }

  if (event.target === refs.messageRef) {
    feedbackForm.message = event.target.value;
  }

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(feedbackForm));
}

refs.submitBtn.addEventListener('click', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();

  localStorage.removeItem(FEEDBACK_KEY);
  console.log(feedbackForm);
  refs.emailRef.value = '';
  refs.messageRef.value = '';
  feedbackForm.email = '';
  feedbackForm.message = '';
}
