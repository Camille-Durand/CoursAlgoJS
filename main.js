/* 
//Récup en fonction de l'id des infos attachées avec
const article1bis = document.getElementById('article1');
console.log(article1bis);
console.log(1);

//querySelector => nom de la classe associée, pas de id
const article1 = document.querySelector('.article');
const allArticle = document.querySelectorAll('.article');
console.log(allArticle);

//CSS style
const titre = document.querySelector('h1');
titre.textContent = "Mon nv titre";
titre.style.color = "red";
titre.style.fontSize = "37px"; 
*/


const titre = document.querySelector('h1');
titre.style.fontSize = '14px';

const para = document.querySelector('p');
para.style.fontFamily = 'Arial';
para.style.color = 'green';

const divi = document.querySelector('div');
divi.style.margin = '30px';

titre.textContent = 'Nv titre';
para.textContent = 'Nv contenu du paragraphe';