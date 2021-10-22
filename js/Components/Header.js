export default class Header{
    constructor(){

        this.container=document.querySelector('.container');
    this.setHeader();
    this.headerFunction();
}




    setHeader=()=>{
        const header=document.createElement('header');
        header.innerHTML=
        `
        <section class="profile">
        <figure class="profile-picture">
            <img src="/img/61038217_2978601505697730_5454142955889623040_n.jpg" alt="">
        </figure>
        <article class="text">
            <h1>Radulescu Alexandru</h1>
            <p>Full stack web developer</p>
        </article>
        <ul>
            <li><a href=""><i class="fab fa-facebook-f"></i></i></a></i>
            </li>
            <li><a href=""><i class="fab fa-github"></i></a></li>
            <li><a href=""><i class="fab fa-linkedin"></i></a></li>
            <li><a href=""><i class="fab fa-skype"></i></a></li>
        </ul>
    </section>
        `;
        this.container.appendChild(header);
    }

    headerFunction=()=>{
        const profile=document.querySelector('.profile');


    window.addEventListener('load',function(){
        profile.style.transform="scale(1)";
        profile.style.opacity="1";
    });
}
    }