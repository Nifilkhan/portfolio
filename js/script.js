let date = new Date();
let year = date.getFullYear();
document.getElementById("year").innerHTML = year;


// footer

class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <div class="section">
        <div class="container-fluid">
          <div class="footer">
            <div class="sort-note">
              <a class="navbar-brand" href="index.html">NIFIL Khan</a>
              <p>I’m Nifil Khan, a junior and talented Web Developer with both front end and backend development skills.</p>
              <hr style="margin: 20px 0; color: rgb(82, 82, 82); width: 60%;">
              <span class="contact"><a href="mailto:nifilkhan.stackup@gmail.com" class="email">
                <img src="./img/email.png" alt="email me"> &nbsp; &nbsp;
                nifilkhan.stackup@gmail.com</a></span>
            </div>
    
            <div class="social-links text-center">
              <a href="https://www.linkedin.com/in/nifil-khan-5624912b0/"><img src="./img/LinkedIn Circled.png" alt="linkedin"></a>
              <a href="https://www.instagram.com/__khanz_____/"> <img src="img/Instagram.png" alt="twitter"></a>
              <a href="https://github.com/Nifilkhan"><img src="./img/GitHub.png" alt="github"></a>
              
            </div>
          </div>
        </div>
      </div>
  
    </footer>  
        `;
  }
}

// customElements.define("main-header", Header);
customElements.define("main-footer", Footer);

// Back to top
const amountScrolled = 200;
const btnBackToTop = document.querySelector('.back-to-top');

const backToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const toggleBtnBackToTop = () => {
  window.scrollY > amountScrolled 
    ? btnBackToTop.classList.add('back-to-top_show')
    : btnBackToTop.classList.remove('back-to-top_show');
}

btnBackToTop.addEventListener('click', backToTop);
window.addEventListener('scroll', toggleBtnBackToTop);
