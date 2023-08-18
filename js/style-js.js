const sections = document.querySelectorAll('section');
for(const section of sections){
    section.style.border = '2px solid red';
    section.style.backgroundColor = 'lightgray';
    section.style.marginBottom = '10px'
    section.style.borderRadius = '10px'
    section.style.paddingLeft ='10px'

}

const placesContainer = document.getElementById('place-container');
placesContainer.style.backgroundColor = 'yellowgreen'