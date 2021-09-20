
const title_skills=document.querySelector('.title-skills');
export default function skill_animation(){
    title_skills.style.transform="translateY(0px)";
    title_skills.style.opacity="1";
}


const options=document.querySelectorAll('.skills li .optiune');

const values=[];
export function optiunewidth(){
    valuesTarget();

    for(let i=0;i<options.length;i++){
      options[i].style.width=`${values[i]}`+"%";
     
    }
}
export function valuesTarget(){

    counters.forEach(counter=>{
        const value=counter.getAttribute('target');
       values.push(value);
    })



}const counters = document.querySelectorAll('.counter');
const li = document.querySelectorAll('.skills li');


const speed = 200;
export function animatie(time) {
    li.forEach(element => {
        element.style.setProperty('--animation', `animatieLi ${time}s linear`);
        element.style.setProperty('--background', `animatieBackground 2s linear`);
    })
}



export function counterF(timp) {
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