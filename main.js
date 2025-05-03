let figus = JSON.parse(localStorage.getItem('figus')) || [];
if (figus.length == 0) {
  for (let i = 0; i < 180; i++) {
    figus[i] = false;
  }
}
let k = 0;
let container = document.querySelector('.container');
for (let i = 0; i < 180; i++) {
  let btn = document.createElement('button');
  btn.textContent = i + 1;
  if (figus[i] == true) btn.disabled = true;
  else k++;
  btn.onclick = handleClick;
  container.append(btn);
}
let h2 = document.querySelector('h2');
h2.textContent = 'Faltan ' + k + ' figus';

function handleClick(e) {
  let n = +e.target.textContent;
  figus[n - 1] = true;
  e.target.disabled = true;
  localStorage.setItem('figus', JSON.stringify(figus));
}