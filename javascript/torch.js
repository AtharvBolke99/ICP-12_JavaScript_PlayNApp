const btn = document.getElementById('toggleBtn');
const body = document.body;

let isOn = false;

btn.addEventListener('click', () => {
  isOn = !isOn;

  if (isOn) {
    body.classList.remove('off');
    body.classList.add('on');
    btn.textContent = 'Turn Off';
  } else {
    body.classList.remove('on');
    body.classList.add('off');
    btn.textContent = 'Turn On';
  }
});
