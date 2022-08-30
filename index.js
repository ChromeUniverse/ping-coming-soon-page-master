const input = document.getElementById('input');
const error = document.getElementById('error-prompt');

function btnHandler() {
  console.log('clicked');
  if (!validator.isEmail(input.value)) {
    input.classList.add('input-error');
    error.style.display = 'block';
  } else {
    input.classList.remove('input-error');
    error.style.display = 'none';
  }
}