const btnHamburger = document.getElementById('hamburger');
const header = document.querySelector('.header');
const fadeElems = document.querySelectorAll('.has-fade');

const menu = () => {
    console.log('Clicked');
    header.classList.toggle('open');
}

const overlay = () => {
    if(header.classList.contains('open')) {
        fadeElems.forEach(element => {              
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });
    } else {
        fadeElems.forEach(element => {    
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }
}


btnHamburger.addEventListener('click', () => {
    menu();
    overlay();
});