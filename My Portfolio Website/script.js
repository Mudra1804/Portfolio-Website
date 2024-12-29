const sections = {
    home: `<h3>Hi, I am Mudra Mujumdar...</h3>
        <p>
          I am a passionate developer with expertise in web development. I love building clean and visually appealing websites and exploring new technologies. Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        </p>`,
    about:`<h3>About Me</h3>
    <p>
      I am a web developer with a keen interest in creating user-friendly and interactive web applications. With a strong foundation in HTML, CSS, and JavaScript, I continuously strive to improve my skills and learn new technologies.
    </p>
    <p>
      I enjoy collaborating with clients to bring their ideas to life, and I am always looking for ways to improve the user experience of my projects.
    </p>
    <a href="./assets/Mudra_Mujumdar.pdf" target="_blank" class="btn btn-primary">Download Resume</a>`
}
function updateContent(section)
{
    const dynamicContent = document.getElementById('dynamicContent');
    dynamicContent.classList.remove('visible');
    setTimeout(()=>{
        dynamicContent.innerHTML = sections[section];
        dynamicContent.classList.add('visible');
    }, 500);
    
}
document.addEventListener('DOMContentLoaded', function () {
    const skillsSection = document.querySelector('.skills');

    window.addEventListener('scroll', function () {
        const sectionPosition = skillsSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        
        if (sectionPosition < windowHeight) {
            skillsSection.classList.add('visible');
        } else {
            skillsSection.classList.remove('visible'); 
        }
    });
});
function confirmRedirect(url){
    if(confirm("Do you want to visit the Gihub Repository?"))
    {
        window.open(url, "_blank");
    }
}

// Scroll to the top of the page on refresh
window.onload = function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  
