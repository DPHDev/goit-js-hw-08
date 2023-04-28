import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
// const elements = form.children;
const input = document.querySelector('input[type="email"]');
const textArea = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button[type="submit"]');

form.addEventListener('click', () => {
  console.log(textArea.value);
});

//-------------Objeto default "feedback-form-state" ------------------
const formObject = {
  email: "",
  message: ""
}

//--------Revisa si hay info en el locla storage y coloca en el form-------------
const formSaved = localStorage.getItem('feedback-form-state');
if (formSaved) {
    input.value = JSON.parse(formSaved).email;
    textArea.value = JSON.parse(formSaved).message;
};

//---------Captura el input y almacena en el local storage-------------------
function setLocalStorage() {
  formObject = {
    email: input.value,
    message: textArea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formObject));
}

function clearValues() {
  console.log(formObject);
  formObject.email = "";
  formObject.message = "";
  localStorage.removeItem('feedback-form-state');
};


//--------------------- Llamados a funciones -------------------------
form.addEventListener('input', throttle(setLocalStorage, 5000));
form.addEventListener('submit', clearValues());

