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

const title_projects=document.querySelector('.title-project');
const profile=document.querySelector('.profile');
window.addEventListener('load',function(){
    profile.style.transform="scale(1)";
    profile.style.opacity="1";
});
const description=document.querySelector('.description');
const title_about=document.querySelector('.title-about');
const personal_interests=document.querySelector('.personal-interests');
const title_footer=document.querySelector('.title-footer');
const title_skills=document.querySelector('.title-skills');
const title_resume=document.querySelector('.title-resume');
window.addEventListener('scroll',function(){
    if (window.matchMedia("(max-width: 720px)").matches) {
       if(window.scrollY>800 &&window.scrollY <900){
        title_about.style.transform="translateY(0px)";
        title_about.style.opacity="1";
        description.style.transform="translateX(0px)";
        personal_interests.style.transform="scale(1)";
        personal_interests.style.opacity="1";

        }else if(window.scrollY>1900&&window.scrollY<1950){
            title_skills.style.transform="translateY(0px)";
            title_skills.style.opacity="1";
        }else if(window.scrollY>2400&&this.window.scrollY<2500){
            optiunewidth();
            counterF(12);
            animatie(5);
        }else if(window.scrollY>3100 &&window.scrollY<3150){
            title_resume.style.transform="translateY(0px)";
            title_resume.style.opacity="1";
        }else if(window.scrollY>3150 &&window.scrollY<3200){
            animatie_resume();
        }else if(window.scrollY>5100&&window.scrollY<5150){
            title_projects.style.transform="translateY(0px)";
            title_projects.style.opacity="1";
        }
        else if(window.scrollY>6350 && window.scrollY<6400){
            title_footer.style.transform="translateY(0px)";
            title_footer.style.opacity="1";
        }
    }else if(window.matchMedia("(max-width: 1200px)").matches){
        if(window.scrollY>900 &&window.scrollY<1000){
            title_about.style.transform="translateY(0px)";
            title_about.style.opacity="1";
            description.style.transform="translateX(0px)";
            personal_interests.style.transform="scale(1)";
            personal_interests.style.opacity="1";
        }else if(window.scrollY>2000&&window.scrollY<2150){ 
            title_skills.style.transform="translateY(0px)";
            title_skills.style.opacity="1";
        }
            else if(window.scrollY>2150&&window.scrollY<2250){
                optiunewidth();
                counterF(18);   
            animatie(5);
            }else if(window.scrollY>2600 && window.scrollY<2700){
                title_resume.style.transform="translateY(0px)";
                title_resume.style.opacity="1";;
            }else if(window.scrollY>2800 && window.scrollY<2850){
                animatie_resume();
            }else if(window.scrollY>3700 && window.scrollY<3800){
                title_projects.style.transform="translateY(0px)";
            title_projects.style.opacity="1"


            }else if(window.scrollY>5700 && window.scrollY<5750){
                title_footer.style.transform="translateY(0px)";
                title_footer.style.opacity="1";

        

            }
            
    }else if(window.matchMedia("(max-width: 1800px)").matches){
        if(window.scrollY>900 && window.scrollY<1000){
            title_about.style.transform="translateY(0px)";
            title_about.style.opacity="1";
            description.style.transform="translateX(0px)";
            personal_interests.style.transform="scale(1)";
            personal_interests.style.opacity="1";
        }else if(window.scrollY>1750 &&window.scrollY<1800){
            title_skills.style.transform="translateY(0px)";
            title_skills.style.opacity="1";
        }
        
        else if(window.scrollY>2000 && window.scrollY<2200){
            optiunewidth();
            counterF(18);
            animatie(5);
        }
        else if(window.scrollY>2600 && window.scrollY<2650){
            title_resume.style.transform="translateY(0px)";
            title_resume.style.opacity="1";
        }
        else if(window.scrollY>2800 &&window.scrollY<2900){
            animatie_resume();
        }else if(window.scrollY>3300 && window.scrollY<3400){
            title_projects.style.transform="translateY(0px)";
            title_projects.style.opacity="1"
        }
        else if(window.scrollY>4500 && window.scrollY<4550){
            title_footer.style.transform="translateY(0px)";
            title_footer.style.opacity="1";
        }
    }
    
    else if(window.matchMedia("(min-width: 1800px)").matches){
        if(window.scrollY>800&&window.scrollY<850){
            title_about.style.transform="translateY(0px)";
            title_about.style.opacity="1";
            description.style.transform="translateX(0px)";
            personal_interests.style.transform="scale(1)";
            personal_interests.style.opacity="1";
        }else if(window.scrollY>1500 && this.window.scrollY<1600){
            title_skills.style.transform="translateY(0px)";
            title_skills.style.opacity="1";
        }else if(window.scrollY>1800 && window.scrollY<1900){
            optiunewidth();
            counterF(25);
            animatie(5);
        }else if(window.scrollY>2200 && window.scrollY<2300){
            title_resume.style.transform="translateY(0px)";
            title_resume.style.opacity="1";
        }else if(window.scrollY>2800 && window.scrollY<2850){
            animatie_resume();
        }else if(window.scrollY>3700 && window.scrollY<3800){
            title_projects.style.transform="translateY(0px)";
            title_projects.style.opacity="1"
        }else if(window.scrollY>4350 && window.scrollY<4400){
            title_footer.style.transform="translateY(0px)";
            title_footer.style.opacity="1";

        }
    }
})



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


function animatie_resume(){
    element_resume.forEach(element=>{
        element.style.transform="translateY(0px)";
        element.style.opacity="1";
        element.style.zIndex="1";
    })
}