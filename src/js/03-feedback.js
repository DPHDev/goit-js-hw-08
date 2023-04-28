import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const input = document.querySelector('input[type="email"]');
const textArea = document.querySelector('textarea[name="message"]');
const button = document.querySelector('button[type="submit"]');

//--------Revisa si hay info en el locla storage y coloca en el form-------------
const formSaved = localStorage.getItem('feedback-form-state');
if (formSaved != null) {
    input.value = JSON.parse(formSaved).email;
    textArea.value = JSON.parse(formSaved).message;
};

//----------- Captura el input y almacena en el local storage -------------------
function setLocalStorage() {
    let formObject = {
      email: input.value,
      message: textArea.value,
    };
  localStorage.setItem('feedback-form-state', JSON.stringify(formObject));

}

//------------------ Borrar registros y hacer clear en el form -------------------
const clearValues = (event) => {
  event.preventDefault();
  console.log(`Los Datos enviados son: email: ${input.value} Mensaje: ${textArea.value}`);
  localStorage.removeItem('feedback-form-state');
  input.value = "";
  textArea.value = "";
};


//----------------------------- Llamados a funciones -----------------------------
form.addEventListener('input', throttle(setLocalStorage, 5000));
button.addEventListener('click', clearValues);

