export default class Main{
    constructor(){
        this.container=document.querySelector('.container');
        this.setMain();
        this.scrollAnimation();
        this.setTypeProject();
    }
    setMain=()=>{
        let main=document.createElement('main');
        main.innerHTML=`
        
        <section class="about">
        <i class="fas fa-info"></i>

        <article class="title-about title-sectiune">
            <h2>About me</h2>
            <span></span>
            <span></span>
        </article>
        <article class="description">
            <p><strong>Hello!My name is Radulescu Alexandru</strong> and currently I'm student in the third year at
            Calculatoare,Automatica si Informatica Aplicata from Craiova.I'm an oppen
            mind persona who is eager to learn new things and develope new skills.
            </p>
        </article>
        <article class="personal-interests">
          <article class="personal-details">
           <h3>Personal Details</h3>
            <ul>
                <li>
                    <strong>Birthdate</strong>
                    <p>20-11-1999</p>
                </li>
                <li>
                    <strong>Phone</strong>
                    <p>0770176008</p>
                </li>

                <li>
                    <strong>Email</strong>
                    <p>radulescu.andu200@outlook.com</p>
                </li>

                <li>
                    <strong>Adress</strong>
                    <p>Romania,Craiova</p>
                </li>
            </ul>
          </article>
        <article class="my-interests">
            <h3>My Interests</h3>
            <ul>
                <li>
                    <i class="fas fa-gamepad"></i>
                    <p>Games</p>
                </li>
                <li>
                    <i class="fas fa-headphones"></i>
                    <p>Music</p>
                </li>
                <li>
                    <i class="fas fa-video"></i>
                    <p>Movies</p>
                </li>
                <li>
                    <i class="fas fa-swimmer"></i>
                    <p>Swim</p>
                </li>
                <li>
                    <i class="fas fa-file-code"></i>
                    <p>Code</p>
                </li>
                <li>
                    <i class="fas fa-chess-king"></i>
                    <p>Chess</p>
                </li>
            </ul>
        </article>  
        </article>
    <a href="/cv/CV - Radulescu Alexandru.pdf" download="CV">
        <p>Download CV</p>
        <i class="fas fa-download"></i>
    </a>
    </section>

    <section class="skills">
        <div class="container-skills-background">
            <article class="first-container-skills">
               <svg id="Capa_1" enable-background="new 0 0 512 512" height="512" viewBox="0 0 512 512" width="512" xmlns="http://www.w3.org/2000/svg"><g><path d="m386.372 165.925c0-10.2-8.299-18.499-18.499-18.499h-1.242c-1.589 0-2.96-1.085-3.41-2.701-2.133-7.646-5.101-15.084-8.824-22.107-.765-1.442-.544-3.146.551-4.239l.633-.633c7.212-7.213 7.212-18.95 0-26.162l-14.785-14.784c-7.229-7.229-18.932-7.231-26.162 0l-.138.138c-1.12 1.119-2.85 1.325-4.311.509-7.212-4.026-14.878-7.244-22.785-9.564-1.44-.423-2.446-1.793-2.446-3.377 0-10.201-8.298-18.499-18.498-18.499h-20.908c-10.201 0-18.499 8.299-18.499 18.543 0 1.54-1.006 2.91-2.445 3.333-7.908 2.321-15.574 5.539-22.785 9.564-1.46.814-3.192.611-4.32-.518l-.13-.129c-7.223-7.223-18.932-7.231-26.161 0l-14.784 14.783c-7.229 7.229-7.231 18.931 0 26.162l.633.633c1.093 1.094 1.314 2.798.55 4.239-3.723 7.021-6.692 14.459-8.824 22.106-.451 1.616-1.821 2.702-3.41 2.702h-1.243c-10.201 0-18.499 8.299-18.499 18.499v20.907c0 10.201 8.299 18.499 18.499 18.499h2.228c1.538 0 2.897 1.04 3.381 2.589 2.293 7.342 5.37 14.474 9.145 21.197.727 1.295.464 2.97-.639 4.073l-1.821 1.82c-7.229 7.229-7.231 18.931 0 26.162l14.783 14.783c7.228 7.228 18.931 7.232 26.161 0l2.315-2.314c1.078-1.079 2.725-1.357 4.005-.674 6.659 3.551 13.701 6.428 20.93 8.548 1.432.42 2.431 1.813 2.431 3.389v3.346c0 10.2 8.299 18.499 18.499 18.499h20.908c10.2 0 18.498-8.299 18.498-18.499v-3.346c0-1.576 1-2.969 2.431-3.389 7.23-2.121 14.272-4.997 20.93-8.548 1.279-.682 2.927-.405 4.006.675l2.313 2.313c7.228 7.229 18.931 7.231 26.163 0l14.784-14.784c7.212-7.213 7.212-18.949-.001-26.162l-1.82-1.819c-1.103-1.104-1.367-2.78-.641-4.073 3.775-6.721 6.852-13.853 9.147-21.199.483-1.548 1.842-2.588 3.38-2.588h2.228c10.2 0 18.499-8.299 18.499-18.499v-20.905zm-14.999 20.907c0 1.931-1.57 3.501-3.501 3.501h-2.228c-8.135 0-15.248 5.271-17.697 13.115-1.983 6.349-4.643 12.515-7.908 18.326-4.003 7.13-2.723 16.186 3.113 22.024l1.82 1.82c1.365 1.365 1.365 3.586 0 4.951l-14.783 14.783c-1.367 1.367-3.583 1.369-4.952 0l-2.313-2.313c-5.705-5.706-14.617-7.066-21.669-3.303-5.756 3.07-11.844 5.556-18.094 7.39-7.777 2.281-13.208 9.593-13.208 17.781v3.346c0 1.93-1.57 3.5-3.5 3.5h-20.908c-1.931 0-3.501-1.57-3.501-3.5v-3.346c0-8.188-5.432-15.5-13.208-17.781-6.248-1.833-12.335-4.319-18.093-7.39-2.667-1.422-5.599-2.113-8.523-2.113-4.809 0-9.597 1.867-13.145 5.415l-2.315 2.314c-1.366 1.366-3.581 1.368-4.95 0l-14.784-14.783c-1.366-1.367-1.368-3.582 0-4.951l1.821-1.821c5.836-5.836 7.116-14.892 3.112-22.023-3.264-5.813-5.924-11.979-7.907-18.326-2.45-7.845-9.562-13.116-17.697-13.116h-2.228c-1.93 0-3.501-1.57-3.501-3.501v-20.907c0-1.93 1.57-3.5 3.501-3.5h1.243c8.269 0 15.612-5.622 17.857-13.671 1.844-6.61 4.41-13.039 7.629-19.11 3.87-7.3 2.585-16.089-3.196-21.87l-.633-.633c-1.366-1.367-1.368-3.582 0-4.951l14.784-14.784c.892-.892 1.933-1.025 2.474-1.025s1.583.133 2.485 1.035l.129.129c5.821 5.822 14.962 7.056 22.228 3 6.235-3.481 12.863-6.263 19.698-8.269 7.784-2.284 13.22-9.573 13.22-17.769 0-1.931 1.57-3.501 3.501-3.501h20.908c1.93 0 3.5 1.57 3.5 3.545 0 8.151 5.437 15.44 13.222 17.725 6.834 2.005 13.462 4.787 19.698 8.268 7.265 4.055 16.406 2.822 22.228-2.999l.139-.139c1.365-1.366 3.583-1.368 4.95 0l14.784 14.784c1.365 1.365 1.365 3.586 0 4.951l-.632.632c-5.783 5.782-7.067 14.571-3.197 21.871 3.218 6.071 5.786 12.501 7.628 19.11 2.245 8.049 9.588 13.671 17.858 13.671h1.242c1.931 0 3.501 1.57 3.501 3.5v20.908z"/><path d="m256 96.26c-43.25 0-78.437 35.187-78.437 78.437 0 43.311 35.298 78.437 78.437 78.437 43.144 0 78.437-35.132 78.437-78.437 0-43.25-35.187-78.437-78.437-78.437zm0 141.876c-17.739 0-33.792-7.328-45.316-19.104 6.929-10.753 17.429-18.719 29.671-22.424 4.679 2.462 10 3.864 15.645 3.864s10.965-1.401 15.645-3.864c12.243 3.705 22.743 11.671 29.672 22.424-11.525 11.776-27.578 19.104-45.317 19.104zm-18.715-71.379c0-10.319 8.395-18.715 18.715-18.715s18.715 8.395 18.715 18.715c0 10.319-8.396 18.715-18.715 18.715s-18.715-8.395-18.715-18.715zm73.561 39.76c-6.999-9.208-16.188-16.494-26.717-21.204 3.526-5.327 5.586-11.704 5.586-18.556 0-18.59-15.124-33.714-33.714-33.714s-33.714 15.124-33.714 33.714c0 6.852 2.06 13.229 5.585 18.556-10.529 4.71-19.719 11.996-26.718 21.205-5.453-9.362-8.593-20.228-8.593-31.82 0-34.98 28.459-63.439 63.439-63.439s63.438 28.459 63.438 63.439c0 11.592-3.14 22.458-8.592 31.819z"/><path d="m381.263 51.619c-33.873-33.629-78.869-51.966-126.577-51.614-40.215.291-78.124 13.808-109.628 39.09-3.231 2.593-3.748 7.312-1.156 10.543 2.593 3.229 7.312 3.748 10.543 1.155 28.845-23.148 63.545-35.523 100.35-35.789 43.742-.321 84.886 16.467 115.901 47.259 31.02 30.796 48.102 71.827 48.102 115.534 0 37.393-12.329 72.551-35.653 101.675-2.59 3.233-2.068 7.952 1.165 10.542 1.384 1.108 3.039 1.646 4.683 1.646 2.199 0 4.378-.962 5.858-2.812 25.115-31.358 38.946-70.796 38.946-111.051 0-47.734-18.657-92.545-52.534-126.178z"/><path d="m370.942 305.203c-3.34-2.448-8.034-1.728-10.483 1.613-10.254 13.982-18.897 29.084-25.775 44.942h-157.261c-10.179-23.552-24.116-45.067-41.482-64.018-27.38-29.877-42.557-68.659-42.737-109.203-.168-37.868 13.102-74.882 37.368-104.22 2.64-3.192 2.192-7.919-.999-10.558-3.192-2.641-7.919-2.192-10.558.999-26.5 32.041-40.993 72.472-40.809 113.846.196 44.281 16.774 86.638 46.678 119.27 15.624 17.05 28.269 36.327 37.681 57.379-7.727 4.488-12.939 12.851-12.939 22.412 0 7.193 2.949 13.709 7.698 18.407-4.749 4.699-7.698 11.214-7.698 18.407s2.949 13.708 7.698 18.407c-4.749 4.699-7.698 11.214-7.698 18.407 0 14.284 11.622 25.906 25.906 25.906h.477v2.098c0 18.033 14.671 32.704 32.704 32.704h94.576c18.034 0 32.704-14.671 32.704-32.704v-2.098h.477c14.285 0 25.906-11.622 25.906-25.906 0-7.193-2.948-13.708-7.698-18.407 4.749-4.699 7.698-11.214 7.698-18.407s-2.948-13.708-7.698-18.407c4.749-4.699 7.698-11.214 7.698-18.407 0-9.532-5.178-17.872-12.866-22.371 6.253-13.946 13.978-27.243 23.045-39.608 2.449-3.341 1.726-8.034-1.613-10.483zm-49.948 174.093c0 9.763-7.943 17.706-17.706 17.706h-94.576c-9.763 0-17.706-7.943-17.706-17.706v-2.098h129.987v2.098zm-97.818-38.912h113.293c6.014 0 10.907 4.893 10.907 10.907s-4.893 10.907-10.907 10.907h-160.938c-6.014 0-10.907-4.893-10.907-10.907s4.893-10.907 10.907-10.907h12.585c4.142 0 7.499-3.358 7.499-7.499s-3.358-7.499-7.499-7.499h-12.585c-6.014 0-10.907-4.893-10.907-10.907s4.893-10.907 10.907-10.907h160.938c6.014 0 10.907 4.893 10.907 10.907s-4.893 10.907-10.907 10.907h-113.293c-4.142 0-7.499 3.358-7.499 7.499s3.357 7.499 7.499 7.499zm113.293-51.812h-160.938c-6.014 0-10.907-4.893-10.907-10.908 0-5.327 3.841-9.767 8.898-10.714.161-.021.323-.042.484-.074.5-.07 1.007-.12 1.526-.12h160.938c.544 0 1.075.053 1.599.131.167.033.334.055.501.077 5.012.982 8.807 5.404 8.807 10.7-.001 6.015-4.894 10.908-10.908 10.908z"/></g></svg>
                <article class="title-skills title-sectiune"> 
                    <h2>Skills</h2>
                    <span></span>
                    <span></span>
                </article>

            </article>
            <article class="container-skills">
                <section class="technical-skills">
                    <h4>Technical Skills</h4>
                    <ul>
                        <li>
                            <p>Java</p>
                            <article class="container-optiune">
                                <article class="java optiune">
                                    <div class="container-span-li">
                                        <span class="counter" target="60">0</span>
                                    </div>

                                </article>
                            </article>
                        </li>
                        <li>
                            <p>JavaScript</p>
                            <article class="container-optiune">
                                <article class="javascript optiune">
                                    <div class="container-span-li">
                                        <span class="counter" target="50">0</span>
                                    </div>
                                </article>
                            </article>
                        </li>
                        <li>
                            <p>Html & CSS</p>
                            <article class="container-optiune">
                                <article class="html-css optiune">
                                    <div class="container-span-li">
                                        <span class="counter" target="75">0</span>

                                    </div>
                                </article>

                            </article>
                        </li>
                        <li>
                            <p>MYSQL</p>
                            <article class="container-optiune">
                                <article class="mysql optiune">
                                    <div class="container-span-li">
                                        <span class="counter" target="40">0</span>
                                    </div>
                                </article>
                            </article>
                        </li>
                        <li>
                        <p>Spring</p>
                        <article class="container-optiune">
                            <article class="spring optiune">
                                <div class="container-span-li">
                                    <span class="counter" target="40">0</span>
                                </div>
                            </article>
                        </article>
                    </li>
                    </ul>

                </section>
                <section class="profesional-skills">
                    <h4>Profesionals Skills</h4>
                    <ul>
                        <li>
                            <p>Comunication</p>
                            <article class="container-optiune">
                                <article class="comunication optiune">
                                    <div class="container-span-li">
                                        <span class="counter" target="80">0</span>
                                    </div>
                                </article> 

                            </article>
                        </li>
                        <li>
                            <p>Teamwork</p>
                            <article class="container-optiune">
                                <article class="teamwork optiune">
                                    <div class="container-span-li">
                                        <span class="counter" target="75">0</span>
                                    </div>
                                </article>
                            </article>
                        </li>
                        <li>
                            <p>Creativity</p>
                            <article class="container-optiune">
                                <article class="creativity optiune">
                                    <div class="container-span-li">
                                        <span class="counter" target="45">0</span>
                                    </div>
                                </article>
                            </article>
                        </li>
                        <li>
                            <p>Dedication</p>
                            <article class="container-optiune">
                                <article class="dedication optiune">
                                    <div class="container-span-li">
                                        <span class="counter" target="90">0</span>
                                    </div>
                                </article>
                            </article>
                        </li>
                    </ul>
                </section>

            </article>
        </div>
    </section>
<section class="resume">
<article class="first-container-resume">
    <i class="fas fa-file"></i>
    <article class="title-resume title-sectiune">
        <h2>Resume</h2>
        <span></span>
        <span></span>
    </article>
</article>
<section class="education-experience">
    <section class="education">
        <h3>Education</h3>
        <article class="educ_exp educ_exp_first">
            <article class="container-education">
                <div class="element-education element_educ_exp">
                    <div class="description">
                        <h4>Liceul teoretic <strong>Henri Coanda</strong></h4>
                        <p><strong>2015-2019</strong></p>
                        <p>
                        I studied the bio-chemistry profile and I managed to take the baccalaureate exam successfully. Here I learned how to work in a team and how to interact with other people.  </p>
                    </div>
                    <span></span>       
                </div>
            <div class="element-education element_educ_exp">
                <div class="description">
                    <h4>Automatica si Informatica Aplicata la <strong>UCV University</strong></h4>
                    <p><strong>2019-2023</strong></p>
                    <p>I'm still a studente here and in the past years I could understand what I want to do.Due to this University I learned what this field means,and how to learne by myself.I grew up a lot here due to projects we had or the summer practice where we could work with a profesor on a certain domein.
                    </div>
                <span></span>  
            </div>
             </article>

        </article>
    </section>
    <section class="experience">
        <h3>Experience</h3>
        <article class="educ_exp educ_exp_second">
            <article class="container-experience">
                <div class="element-experience element_educ_exp">
                    <div class="description">
                        <h4>Back-end developer at <strong>BRD</strong></h4>
                        <p><strong>01/03/2022 - Current</strong></p>
                        <p>I'm working as a backend developer at BRD where I use <strong>Java</strong> and <strong>Spring</strong> for creating microservices.I learned at a minimum level how to work with <strong>Jenkins</strong> and <strong>OpenShift</strong>
                        </p>
                    </div>
                    <span></span>  
                </div>

                <div class="element-experience element_educ_exp">
                    <div class="description">
                        <h4>Intership at <strong>OSF Digital</strong></h4>
                        <p><strong>2021 - 1 month</strong></p>
                        <p>I participated in a one-month internship at OSF where I worked with <strong>NodeJs</strong> , <strong>HTML</strong>,<strong>CSS</strong>,<strong>JavaScript</strong> for creating a basic EComerce website.</p>
                    </div>
                    <span></span>  
                </div>
            </article>
        </article>
    </section>

</section>
</section>
<section class="projects">
<section class="first-container-projects">
    <i class="fas fa-project-diagram"></i>
    <article class="title-project title-sectiune">
        <h2>Projects</h2>
        <span></span>
        <span></span>
    </article>
</section>
<section class="project-type">
<ul>
<li>Front-End</li>
<li>Back-End</li>
<li>All</li>
</ul>

</section>
<section class="container-projects">

    <article class="project front">
    <img src="img/taramul-zanelor.png" alt="">
        </a>
        <div class="overlay">
        <a class="redirect" href="https://radulescu-alexandru-nicolae.github.io/taramul-zanelor-mockup/">
        <i class="fas fa-directions"></i>
        </a>
        <i class="fas fa-search"></i>
        </a>
           
            <h3>Taramul Zanelor</h3>
             <p>A basic website for a kindergarten </p>      
        </div>

    </article>
    <article class="project front">
        <img src="/img/EcomerceImg.png" alt="">
        <div class="overlay">
  <a class="redirect" href="https://github.com/radulescu-alexandru-nicolae/shop-online-mockup">
  <i class="fas fa-directions"></i></a>

            <i class="fas fa-search"></i>
          <div class="info"> 
          <h3>EComerce</h3>
          <p>Front End part for an EComerce website wher I used API</p>      
          </div>
        </div>

    </article>
    <article class="project front">
        <a href="">
        <img src="img/DashBoard.PNG" alt="">
        </a>
        <div class="overlay">
            <i class="fas fa-search"></i>
       <a class="redirect" href="https://radulescu-alexandru-nicolae.github.io/dashboard-sass/">
       <i class="fas fa-directions"></i></a>
            <h3>Project Name</h3>
             <p>Description</p>      
        </div>

    </article>
    <article class="project backend">
    <img src="img/backend-for-article-2.jpg" alt="">
<div class="overlay">
<a class="redirect" href="https://github.com/radulescu-alexandru-nicolae/online-school">
<i class="fas fa-directions"></i>
</a>

<i class="fas fa-search"></i>
<div class="info">
<h3>School Cours
</h3>
 <p>A back-end version for a school website where you could enrol in diferent courses.</p>     
</div>
</div>
</article>

    <article class="project backend">
                <img src="img/backend-for-article-2.jpg" alt="">
        <div class="overlay">
        <a class="redirect" href="https://github.com/radulescu-alexandru-nicolae/cinematograf">
        <i class="fas fa-directions"></i>
        </a>

            <i class="fas fa-search"></i>
            <div class="info"> <h3>Cinema</h3>
            <p>A back-end version for cinema where you can buy tickets and reserve seats.</p>      
            
            </div>
           
        </div>
    </article>
   
    <article class="project backend">
                <img src="img/backend-for-article-2.jpg" alt="">
        <div class="overlay">
        <a class="redirect" href="https://github.com/radulescu-alexandru-nicolae/firma-curierat">
        <i class="fas fa-directions"></i></a>

            <i class="fas fa-search"></i>
            <div class="info"> 
            <h3>Curier Company</h3>
             <p>A prjoect where I tried to simulate how back-end from a Curier Company works</p>   </div>  
        </div>
    </article>
</section>

</section>    
        `


        this.container.appendChild(main);
    }
    setTypeProject=()=>{
        let projectTpe=document.querySelector('.project-type');
        projectTpe.addEventListener('click',(e)=>{
            if(e.target.tagName===`LI`){
              let text=e.target.textContent;
                if(text==='Back-End'){
                  this.setBackround(e.target);
                  this.displayOn();
                  this.displayProject('backend');
                }else if(text==='Front-End'){
                  this.setBackround(e.target); 
                  this.displayOn();
                  this.displayProject('front');
                }else if(text==='All'){
                  this.setBackround(e.target);
                  this.displayOn();
                  this.displayProject('project');
                }
            }
        })
       

    
        
    }
    setBackround=(element)=>{
        let projectTpe=document.querySelector('.project-type');
        let ul=projectTpe.querySelector('ul');
        let li=ul.querySelectorAll('li');

        li.forEach(e=>{
            if(e.textContent===element.textContent){
         
                e.style.backgroundColor ='#252A2E';
                    e.style.color='#1CB698';
                    e.style.border=`1px solid #1CB698`;
            }else{
                e.style.backgroundColor='#1CB698';
                e.style.color='white';
            }
        })
    }
    displayOn=()=>{
        let contProject=document.querySelector('.container-projects');
        let  projects=contProject.querySelectorAll('.project');
        projects.forEach(e=>{
            e.style.display="flex";
    })}
    displayProject=(name)=>{
    this.displayOn();
        let contProject=document.querySelector('.container-projects');
        let  projects=contProject.querySelectorAll('.project');
        projects.forEach(e=>{
          if(e.classList.contains(name)===false){
              e.style.display="none";
          }else{
              e.style.display="flex";
          }
        })
    }
    scrollAnimation=()=>{
        const about=document.querySelector('.about');
        const skill=document.querySelector('.skills');
        const resume=document.querySelector('.resume')
        const project=document.querySelector('.projects');

        const counters=document.querySelectorAll('.counter');
        const values=[];
        const options=document.querySelectorAll('.skills li .optiune');
        const speed=200;
        const li=document.querySelectorAll('.skills li');
        const element_resume=document.querySelectorAll('.element_educ_exp');
       function animatieAbout(){
            const title_about=document.querySelector('.title-about');
            const description=document.querySelector('.description');
            const personal_interests=document.querySelector('.personal-interests');
            title_about.style.transform="translateY(0px)";
            title_about.style.opacity="1";
            description.style.transform="translateX(0px)";
            personal_interests.style.transform="scale(1)";
            personal_interests.style.opacity="1"
            title_animation(about);
        };
        function animationSkill(){
           
            optiunewidth();
            counterF(12);
            animatie(5);
            const tilte_skil=document.querySelector('.title-skills');
            tilte_skil.style.transform="translateY(0px)";
            tilte_skil.style.opacity="1"
            title_animation(skill);

           
            

        }

        function animationResume()
        {
            const title_resume=document.querySelector('.title-resume');
            title_resume.style.transform="translateY(0px)";
    title_resume.style.opacity="1";


    title_animation(resume)
animatie_resume_elemente();
        }

      function animatie_resume_elemente(){
            element_resume.forEach(element=>{
                element.style.transform="translateY(0px)";
                element.style.opacity="1";
                element.style.zIndex="1";
            })
        }

        function projectAnimation(){
            const title_projects=document.querySelector('.title-project');
            title_projects.style.transform="translateY(0px)";
            title_projects.style.opacity="1"
            title_animation(project);
        }









      function optiunewidth(){
            valuesTarget();
        
            for(let i=0;i<options.length;i++){
           options[i].style.width=`${values[i]}`+"%";
             
            }
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
            });}
     function valuesTarget(){
          counters.forEach(counter=>{
                const value=counter.getAttribute('target');
           values.push(value);
            })
        
        
        
        }
       function animatie(time) {
           li.forEach(element => {
                element.style.setProperty('--animation', `animatieLi ${time}s linear`);
                element.style.setProperty('--background', `animatieBackground 2s linear`);
            })
        }
      function title_animation(element){
        const title_sectiune=element.querySelector('.title-sectiune');
        title_sectiune.style.animation ="bounce 2s 0.5s both";
      }




     
 
      window.addEventListener('scroll',function(){
        if(window.scrollY>=about.offsetTop-180&& window.scrollY<=about.offsetTop){
             animatieAbout();

        }else if(window.scrollY>=skill.offsetTop-180&&window.scrollY<=skill.offsetTop){
            animationSkill();
            
        }else if(window.scrollY>=resume.offsetTop-180&&window.scrollY<=resume.offsetTop){
            animationResume();

        }else if(window.scrollY>=project.offsetTop-180&&window.scrollY<=project.offsetTop){

            projectAnimation();
        }
        // else if(window.scrollY>=contact.offsetTop-180&&window.scrollY<=contact.offsetTop){
        //     contactAnimation();
        // }
    
    
    });

    }
    
  

}