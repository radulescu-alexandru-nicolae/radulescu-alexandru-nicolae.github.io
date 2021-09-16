const meniu = document.querySelector('.meniu');
const span = meniu.querySelectorAll('span');
const ul_meniu = document.querySelector('nav ul');
meniu.addEventListener('click', (e) => {
    if (window.matchMedia("(max-width: 1200px)").matches) {
        if (span[1].style.opacity !== '0') {
            span[1].style.opacity = "0";
            meniu.style.setProperty('--first-span', '-35deg');
            meniu.style.setProperty('--second-span', '35deg');
            ul_meniu.style.height = "264px";

        } else {
            span[1].style.opacity = "1";
            meniu.style.setProperty('--first-span', '0deg');
            meniu.style.setProperty('--second-span', '0deg');
            ul_meniu.style.height = "0px";
        }
    } else {
        ul_meniu.style.height = "unset";
        ul_meniu.style.transform = "unset";
        
    }
});

function meniu(){
    meniu.addEventListener('click',(e));
}