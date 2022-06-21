const closeMenu = document.querySelector('.close');
const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.hamburger');
const overClose1 = overlay.querySelector('.close-over1');
const overClose2 = overlay.querySelector('.close-over2');
const overClose3 = overlay.querySelector('.close-over3');
const overClose4 = overlay.querySelector('.close-over4');
const dynamicDisplay = document.querySelector('.featured-speakers');

closeMenu.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overClose1.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overClose2.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overClose3.addEventListener('click', () => {
  overlay.style.display = 'none';
});

overClose4.addEventListener('click', () => {
  overlay.style.display = 'none';
});

menu.addEventListener('click', () => {
  overlay.style.display = 'block';
});

const speakers = [
  {
    imgSrc: './resources/picture.jpg',
    name: 'Priscilla Oyebade',
    description: 'Co-Director of OYE e-learning School',
    about: `Priscilla is a Seasoned Software Engineer that is ready address any issue
     as far as Software Engineer is concerned. She is open to new opportunities in the field `,

  },

  {
    imgSrc: './resources/Olufe.jpg',
    name: 'Samuel Oyebade',
    description: 'Director of OYE e-learning School',
    about: `Samuel is a Seasoned Teacher of The WORD that is ready address any issue
     as far as he is concerned. He is open to learning as God direct per time. `,

  },

  {
    imgSrc: './resources/picture-one.jpg',
    name: 'Oluchi Kelechi',
    description: 'Manager, Aviation School',
    about: `Priscilla is a Seasoned Software Engineer that is ready address any issue
     as far as Software Engineer is concerned. She is open to new opportunities in the field `,

  },

  {
    imgSrc: './resources/picture-two.jpg',
    name: 'Temiloluwa Jesugbotemi',
    description: 'Director, School of law',
    about: `Priscilla is a Seasoned Software Engineer that is ready address any issue
     as far as Software Engineer is concerned. She is open to new opportunities in the field `,

  },

  {
    imgSrc: './resources/picture-three.jpg',
    name: 'Ijobajesu Oyebade',
    description: 'Proffessor of Medicine',
    about: `Priscilla is a Seasoned Software Engineer that is ready address any issue
     as far as Software Engineer is concerned. She is open to new opportunities in the field `,

  },

  {
    imgSrc: './resources/picture-four.jpg',
    name: 'Alex Ebonyi',
    description: 'Associate Professor, Computer Science Department, Lagos, Nigeria.',
    about: `Priscilla is a Seasoned Software Engineer that is ready address any issue
     as far as Software Engineer is concerned. She is open to new opportunities in the field `,

  },
];

document.addEventListener('DOMContentLoaded', () => {
  let featuredSpeakersContent = '';
  for (let i = 0; i < speakers.length; i += 1) {
    featuredSpeakersContent += `   
        
        <div class = speakers-flex>
        <div>        
        <img class = "speaker-picture" src = ${speakers[i].imgSrc} alt = "speakers picture"        
        </div>
        </div>
        <div class = "speakers-detail">
            <h4>${speakers[i].name}</h4>
            <p class = "speakers-description">${speakers[i].description}</p><hr class = "hr-style">
            <p>${speakers[i].about}</p>
        </div>
        </div>
        
        
      `;
  }
  dynamicDisplay.innerHTML = featuredSpeakersContent;
  return dynamicDisplay;
});