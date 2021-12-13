// import {title_animation} from "./titleAnimation";

const about=document.querySelector('.about');
const title_about=document.querySelector('.title-about');
const description=document.querySelector('.description');
const personal_interests=document.querySelector('.personal-interests');

export  function about_animation(){
    if(window.scrollY>=about.offsetTop-180&& window.scrollY<=about.offsetTop){
    title_about.style.transform="translateY(0px)";
    title_about.style.opacity="1";``



    description.style.transform="translateX(0px)";

    personal_interests.style.transform="scale(1)";
    personal_interests.style.opacity="1";

    // title_animation(about);
}
    
}