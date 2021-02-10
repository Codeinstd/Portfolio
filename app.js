//Resources 
const menuItems = document.getElementById('menu-items');
const menuBtn = document.getElementById('menu');
const closeMenuBtn = document.getElementById('close-menu');

const skillsTab = document.getElementById('skills');
const worksTab = document.getElementById('works');
const sayHelloBtn = document.getElementById('say-hello');
const cardTab = document.getElementById('card');


const projects = document.getElementsByClassName('project');
const card = document.getElementsByClassName('card');
const dim = document.getElementById('dim');
const photoHolder = document.getElementById('photo-holder');

const simpleView = document.getElementById('simple-view');
const tooSimpleLink = document.getElementById('too-simple');
const overallContainer = document.getElementById('overall-container');
const tooFancyLink = document.getElementById('too-fancy');

const date = document.getElementById('date');

//Menu btn is clicked
menuBtn.addEventListener('click', () => {
    menuItems.classList.add('fade-in');
});

//Close-Menu btn is clicked
closeMenuBtn.addEventListener('click', () => {
    menuItems.classList.remove('fade-in');
});

//close menu when a menu item is clicked on mobile or tablet
function tabIsClicked(element){
    element.addEventListener('click', () => {
        menuItems.classList.remove('fade-in');
        if(element.id === 'say-hello') location.assign('#contact-me'); //navigate to contacts when say hello is clicked
    });
}
tabIsClicked(skillsTab);
tabIsClicked(worksTab);
tabIsClicked(sayHelloBtn);


//click anywhere on screen to hide dim and photo
dim.addEventListener('click', () => {
    dim.style.display = "none";
    photoHolder.style.background = "none";
})



//simple link is clicked
tooSimpleLink.addEventListener('click', () => {
    simpleView.style.display = 'none';
    overallContainer.style.display = 'block';
    location.assign('#body');
})

//make sure copyright date is update
date.innerText = new Date().getFullYear();