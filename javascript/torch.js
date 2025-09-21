 const body = document.body;
    const button = document.getElementById('torchButton');

    button.addEventListener('click', () => {
      if (body.classList.contains('torch-off')) {
        body.classList.remove('torch-off');
        body.classList.add('torch-on');
        body.style.backgroundColor = 'white';
        body.style.color = 'black';
        button.innerText = 'Turn OFF Torch';
      } else {
        body.classList.remove('torch-on');
        body.classList.add('torch-off');
        body.style.backgroundColor = 'black';
        body.style.color = 'white';
        button.innerText = 'Turn ON Torch';
      }
    });