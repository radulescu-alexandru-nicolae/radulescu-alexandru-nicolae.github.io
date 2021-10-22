export default class Nav{
    constructor(){

        this.container=document.querySelector('.container');
        this.setNav();
        this.navScroll();
        this.meniu();
    }
    setNav=()=>{
       const nav=document.createElement('nav');
       nav.innerHTML=
       `
       <section class="container-nav">
       <a href="">Andu</a>
       <article class="meniu">
           <div class="container-span">
               <span></span>
               <span></span>
               <span></span>
           </div>
       </article>
       <ul>
           <li><p>Home</p></li>
           <li><p>About</p></li>
           <li><p>Skills</p></li>
           <li><p>Resume</p></li>
           <li><p>Projects</p></li>
           <li><p>Contact</p></li>
       </ul>
   </section>
       ` ;
       this.container.appendChild(nav);

    }
    scrollToElement=(element)=>{
        window.scrollTo({
            top: element.offsetTop-80, behavior: 'smooth'
        })
    }
    navScroll=()=>{
        const nav=document.querySelector('nav');
const about=document.querySelector('.about');
const skill=document.querySelector('.skills');
const resume=document.querySelector('.resume');
const project=document.querySelector('.projects');
const contact=document.querySelector('.contact');
nav.addEventListener('click',(e)=>{
   if(e.target.textContent==='Home'){
    window.scrollTo({
        top: 0, behavior: 'smooth'
    })
   }else if(e.target.textContent==='About'){
       this.scrollToElement(about);
   }else if(e.target.textContent==='Skills'){
    this.scrollToElement(skill);
   }else if(e.target.textContent==='Resume'){
    this.scrollToElement(resume);
   }else if(e.target.textContent==='Projects'){
    this.scrollToElement(project);
   }else if(e.target.textContent==='Contact'){
    this.scrollToElement(contact);
   }
})
    }
    meniu=()=>{
        const meniu = document.querySelector('.meniu');
const span = meniu.querySelectorAll('span');
const ul_meniu = document.querySelector('nav ul');
    meniu.addEventListener('click', (e) => {
        if (window.matchMedia("(max-width: 1200px)").matches) {
            if (span[1].style.opacity !== '0') {
                span[1].style.opacity = "0";
                meniu.style.setProperty('--first-span', '-35deg');
                meniu.style.setProperty('--second-span', '35deg');
                ul_meniu.style.height = "450px";
    
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
    })
    ;
    window.addEventListener('resize',(e)=>{
        if(window.matchMedia("(min-width:800px").matches){
            ul_meniu.style.height = "unset";
            ul_meniu.style.transform = "unset";
        }else if(window.matchMedia("(max-width:800px").matches){
            ul_meniu.style.height = "0px";
        }
    })
   
}
    }
    
 


  