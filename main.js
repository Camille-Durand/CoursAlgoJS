const user = {
    'id' : 1,
    'nom': 'Fang',
    'prenom': 'Cam',
    'age': 21,
    'image' :'./bisbis.jpg'
  }

const divine = document.querySelector('div');

const para = document.querySelectorAll('p');
para[0].textContent = user.nom;
para[1].textContent = user.prenom;
para[2].textContent = user.age;

const image = document.querySelector('img');
image.src = user.image;

para[0].style.fontSize = "11px"; 
para[0].style.color = "blue";

para[1].style.fontSize = "11px"; 
para[1].style.color = "blue";

para[2].style.fontSize = "11px"; 
para[2].style.color = "blue";

image.style.height = '100px';
image.style.width = '100px';

image.style.margin = '10px'

divine.style.backgroundColor = 'rgb(220,220,220)';