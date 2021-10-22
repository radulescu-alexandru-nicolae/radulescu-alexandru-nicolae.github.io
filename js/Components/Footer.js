export default class Footer{
    constructor(){
        this.container=document.querySelector('.container');
        this.setFooter();
        this.animationFooter();

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


    animationFooter=()=>{
const title_footer=document.querySelector('.title-footer');
    title_footer.style.transform="translateY(0px)";
    title_footer.style.opacity="1";
}
    }