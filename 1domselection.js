// #1 DOM SELECTION
// document.getElementById
const judul = document.getElementById('judul');
judul.style.color = 'white';
judul.style.backgroundColor = 'pink';

// document.getElementsByTagName()
const p = document.getElementsByTagName('P');

for (let i = 0; i < p.length; i++ ) {
    p[i].style.color = 'blue';
    p[i].style.backgroundColor = 'lightblue';
}
 const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '35px';

// document.getEleemntsByClassName()
// const p1 = document.getElementByClassName('p1')[0];
