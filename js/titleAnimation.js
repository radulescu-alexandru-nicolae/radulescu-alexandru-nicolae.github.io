export default function title_animation(element){
    const title_sectiune=element.querySelector('.title-sectiune');
    title_sectiune.style.animation ="bounce 2s 0.5s both";
}
const element_resume=document.querySelectorAll('.element_educ_exp');



export  function animatie_resume_elemente(){
    element_resume.forEach(element=>{
        element.style.transform="translateY(0px)";
        element.style.opacity="1";
        element.style.zIndex="1";
    })
}