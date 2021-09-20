const profile=document.querySelector('.profile');

export default function animatieProfile(){
    window.addEventListener('load',function(){
        profile.style.transform="scale(1)";
        profile.style.opacity="1";
    });
}