const nav=document.querySelector('nav');
const about=document.querySelector('.about');
const skill=document.querySelector('.skills');
const resume=document.querySelector('.resume');
const project=document.querySelector('.projects');
const contact=document.querySelector('.contact');


export default function navScroll(){
nav.addEventListener('click',(e)=>{
    console.log(e.target.textContent)
   if(e.target.textContent==='Home'){
    window.scrollTo({
        top: 0, behavior: 'smooth'
    })
   }else if(e.target.textContent==='About'){
       console.log('e');
       scrollToElement(about);
   }else if(e.target.textContent==='Skills'){
    scrollToElement(skill);
   }else if(e.target.textContent==='Resume'){
    scrollToElement(resume);
   }else if(e.target.textContent==='Projects'){
       scrollToElement(project);
   }else if(e.target.textContent==='Contact'){
    scrollToElement(contact);
   }
})

}
function scrollToElement(element){
    window.scrollTo({
        top: element.offsetTop-80, behavior: 'smooth'
    })
}