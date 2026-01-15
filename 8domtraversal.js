// event handling 
// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventlistener('clik', function() {
// card.style.display = 'none';
// });


// DOM traversal
const close = document.querySelectorAll('.close');

// for( let i = 0; i < close.length; i++) {
//    close[i].addEventListener('click', function(e) {
       // close[i].parentElement.style.display = 'none';
//      console.log(e.target);
//        e.target.parentElement.style.display = 'none';
//   });
// }
close.forEach(function(el) {
   el.addEventListener('click', function(e) {
       e.target.parentElement.style.display = 'none';
       e.preventDefault();
   });
}); 

const nama = document.querySelector('.nama');
console.log(nama.nextElementSibling.nextElementSibling);