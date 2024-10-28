let string = "";
let memory = 0; 

let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML === 'M+') {
      memory += parseFloat(string) || 0; 
      alert(`Stored in memory: ${memory}`);
    } else if (e.target.innerHTML === 'M-') {
      memory -= parseFloat(string) || 0; 
      alert(`Subtracted from memory: ${memory}`);
    } else if (e.target.innerHTML === 'MC') {
      memory = 0; 
      alert('Memory cleared.');
    }
    

    if (e.target.innerHTML === '=') {
      try {
        string = eval(string.replace(/\^/g, '**').replace(/√/g, 'Math.sqrt')); 
        document.querySelector('input').value = string;
      } catch {
        document.querySelector('input').value = "Error"; 
        string = "";
      }
    } else if (e.target.innerHTML === 'C') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      if (string === "Error") string = ""; 
      string += e.target.innerHTML; 
      document.querySelector('input').value = string;
    }
  });
});

document.addEventListener('keydown', (e) => {
  const key = e.key;
  const keyMappings = {
    '0': '0', '1': '1', '2': '2', '3': '3', '4': '4', 
    '5': '5', '6': '6', '7': '7', '8': '8', '9': '9', 
    '+': '+', '-': '-', '*': '*', '/': '/', 
    'Enter': '=', 'Backspace': 'C', 
    'Escape': 'MC'
  };

  if (keyMappings[key]) {
    const button = Array.from(buttons).find(btn => btn.innerHTML === keyMappings[key]);
    button.click();
  } else if (key === 'm') { 
    document.querySelector('.memory').click();
  }
});
