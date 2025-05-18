const getStartedBtn = document.getElementById('get-started');
const input = document.getElementById('email-input');
const signUpBtn = document.getElementById('sign-up-btn');
const errMessage = document.getElementById('error-message');

getStartedBtn.addEventListener('click', () => {
  input.scrollIntoView({ behavior: 'smooth', block: 'center' });
  input.focus();
});

const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isMatched() {
  return pattern.test(input.value.trim());
}

let debounce;

function checkMail() {
  clearTimeout(debounce);
  errMessage.style.display = 'none';
  debounce = setTimeout(() => {
    if (!isMatched()) {
      errMessage.style.display = 'initial';
    }
  }, 1300);
}

signUpBtn.addEventListener('click', () => {
  input.removeEventListener('input', checkMail);
  if (!isMatched()) {
    errMessage.style.display = 'initial';
    input.addEventListener('input', checkMail);
    input.focus();
    return;
  }
  input.value = '';
});

input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault();
    signUpBtn.click();
  }
});
