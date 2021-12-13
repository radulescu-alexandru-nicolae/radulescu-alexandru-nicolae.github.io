export default class Footer{
    constructor(){
        this.container=document.querySelector('.container');
        this.setFooter();
        this.animationFooter();
        this.animation();
        this.scrollAnimation();
    }


    setFooter=()=>{
        let footer=document.createElement('footer');
        footer.className='contact';
        footer.innerHTML=
        `
        <section class="first-container-footer">
        <i class="fas fa-envelope"></i>
        <article class="title-footer title-sectiune">
            <h2>Contact Me</h2>
            <span></span>
            <span></span>
        </article>
    </section>   
     <form action="">
        <input type="text" placeholder="Your Name">
        <input type="text" placeholder="Phone Number">
        <input type="text" placeholder="Email Address">
        <input type="text" placeholder="Subject">
        <textarea placeholder="Message"></textarea>
        <button>
            Send Message
            <i class="fas fa-paper-plane"></i>
        </button>
    </form>
        
        `
        this.container.appendChild(footer);
    }
    animation=()=>{

        function title_animation(element){
            const title_sectiune=element.querySelector('.title-sectiune');
            title_sectiune.style.animation ="bounce 2s 0.5s both";
          }
        function contactAnimation(){
            const title_footer=document.querySelector('.title-footer');
            title_footer.style.transform="translateY(0px)";
            title_footer.style.opacity="1";
            title_animation(contact);
        }
        const contact=document.querySelector('.contact');
        console.log(contact);
        window.addEventListener('scroll',function(){
            if(window.scrollY>=contact.offsetTop-180&&window.scrollY<=contact.offsetTop){
                contactAnimation();
                }
        }
        )
    }   
    animationFooter=()=>{
const title_footer=document.querySelector('.title-footer');
    title_footer.style.transform="translateY(0px)";
    title_footer.style.opacity="1";
}

    scrollAnimation=()=>{
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


function scrollToElement(element){
    window.scrollTo({
        top: element.offsetTop-80, behavior: 'smooth'
    })
}

    }
    }