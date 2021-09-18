
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
const description=document.querySelector('.description');
const title_about=document.querySelector('.title-about');
const personal_interests=document.querySelector('.personal-interests');

const title_projects=document.querySelector('.title-project');
const profile=document.querySelector('.profile');
window.addEventListener('load',function(){
    profile.style.transform="scale(1)";
    profile.style.opacity="1";
});

const title_footer=document.querySelector('.title-footer');
const title_skills=document.querySelector('.title-skills');
const title_resume=document.querySelector('.title-resume');



//animation counting
const counters = document.querySelectorAll('.counter');
const li = document.querySelectorAll('.skills li');


const speed = 200;
function animatie(time) {
    li.forEach(element => {
        element.style.setProperty('--animation', `animatieLi ${time}s linear`);
        element.style.setProperty('--background', `animatieBackground 2s linear`);
    })
}
const options=document.querySelectorAll('.skills li .optiune');

const values=[];
function optiunewidth(){
    valuesTarget();

    for(let i=0;i<options.length;i++){
      options[i].style.width=`${values[i]}`+"%";
     
    }
}
function valuesTarget(){

    counters.forEach(counter=>{
        const value=counter.getAttribute('target');
       values.push(value);
    })



}

function counterF(timp) {
    counters.forEach(counter => {
        const animate = () => {
            const value = +counter.getAttribute('target');
            const data = +counter.innerText;
            const time = value / speed;
            if (data < value) {
                counter.innerText = Math.ceil(data + time);
                setTimeout(animate, timp);
            } else {
                counter.innerText = value;
            }
        }
        animate();
    });
}

const element_resume=document.querySelectorAll('.element_educ_exp');

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


function contact_animation(){
    title_footer.style.transform="translateY(0px)";
    title_footer.style.opacity="1";
}
function about_animation(){
    title_about.style.transform="translateY(0px)";
    title_about.style.opacity="1";
    description.style.transform="translateX(0px)";
    personal_interests.style.transform="scale(1)";
    personal_interests.style.opacity="1";
}
function animatie_project(){
    title_projects.style.transform="translateY(0px)";
        title_projects.style.opacity="1"
}
function animation_resume(){
    title_resume.style.transform="translateY(0px)";
    title_resume.style.opacity="1";
}
function skill_animation(){
    title_skills.style.transform="translateY(0px)";
    title_skills.style.opacity="1";
}
function title_animation(element){
    const title_sectiune=element.querySelector('.title-sectiune');
    title_sectiune.style.animation ="bounce 2s 0.5s both";
}




function animatie_resume_elemente(){
    element_resume.forEach(element=>{
        element.style.transform="translateY(0px)";
        element.style.opacity="1";
        element.style.zIndex="1";
    })
}