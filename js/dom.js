console.log('Hello from js');


const liCollection = document.getElementsByTagName('li');
for( li of liCollection){
    console.log(li)
}

//option-1: getElementByTagName  //khub besi use karbona
const allHeadings = document.getElementsByTagName(h2);
for ( h2 of allHeadings){
    console.log(h2)
}

const placesTitle = document.getElementById('places-title');
placesTitle.innerText = 'Favorite places to visit';


//option-3: getElementsByClassName   // prochur use karbo
const places = document.getElementsByClassName('important-places');
for(const place of places){
    console.log(place)
}


//option-4: querySelector     //sometimes use karbo
  
// option-5: querySelectorAll   // sometimes use karbo

const someLi = document.querySelectorAll('.fruits-container li');
for ( const li of someLi){
    console.log(li);
}

document.getElementById('fruits-title').style.color='red';
