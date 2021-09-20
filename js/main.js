import about_animation from "./about.js";
import contact_animation from "./contact.js";
import animation_resume from "./resume.js";
import title_animation from "./titleAnimation.js";
import { animatie_resume_elemente } from "./titleAnimation.js";
import skill_animation from "./skill.js";
import animatie_project from "./project.js";
import meniuF from "./meniu.js";
import { optiunewidth,counterF,animatie } from "./skill.js";
import animatieProfile from "./profile.js";
import navScroll from "./nav.js";

meniuF();
animatieProfile();
const about=document.querySelector('.about');
const skill=document.querySelector('.skills');
const resume=document.querySelector('.resume');
const project=document.querySelector('.projects');
const contact=document.querySelector('.contact');
window.addEventListener('scroll',function(){
    if(window.scrollY>=about.offsetTop-180&& window.scrollY<=about.offsetTop){
        about_animation();
        title_animation(about);
    }else if(window.scrollY>=skill.offsetTop-180&&window.scrollY<=skill.offsetTop){
       skill_animation();
       title_animation(skill);
       optiunewidth();
       counterF(12);
       animatie(5);
    }else if(window.scrollY>=resume.offsetTop-180&&window.scrollY<=resume.offsetTop){
        animation_resume();
        title_animation(resume);
        animatie_resume_elemente();
    }else if(window.scrollY>=project.offsetTop-180&&window.scrollY<=project.offsetTop){
        
        animatie_project();
        title_animation(project);

    }else if(window.scrollY>=contact.offsetTop-180&&window.scrollY<=contact.offsetTop){
    contact_animation();
    title_animation(contact);
    }
})


navScroll();

