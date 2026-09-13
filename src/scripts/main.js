const button = document.querySelector('#hello-button');
const greeting = document.querySelector('#greeting');

if (button && greeting) {
  button.hidden = false;
  button.addEventListener('click', () => {
    greeting.textContent = 'Hallo zurück! Schön, dass du vorbeischaust.';
  });
}
