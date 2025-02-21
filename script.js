function goToCatalog() {
  document.querySelector('#catalog').scrollIntoView({ behavior: 'smooth' });
}

let heartCount=0;

function incrementHerat(elemnt){
  heartCount++;
  elemnt.innerText=`❤️ ${heartCount}`;
  document.querySelector('.heart-counter').innerText=`💖 ${heartCount}`;
}