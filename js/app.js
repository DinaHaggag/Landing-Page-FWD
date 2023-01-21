// Global Variables
let navbarList = document.getElementById("navbarList");
let sections = document.querySelectorAll("section[id]");



// creat nav bar list items
function createNavElement(content,section){
    let listItem = document.createElement("li");
    let menuLink = document.createElement("a");
    
    menuLink.textContent = content;
    menuLink.classList.add("menuLink");
    listItem.appendChild(menuLink);
   
 
    // go to active section
    menuLink.setAttribute("href",`#${section}`);

    return listItem;
}

let navList = ["Historical Fiction","Fantasy","Science Fiction","Horror"];

for (let i =0;i<navList.length;i++){
    
    navbarList.appendChild(createNavElement(navList[i],"section"+(i+1)));
    }

    
// add new section
const addSec = document.getElementById('addSec');
addSec.addEventListener('click', addSection);

function addSection(){
    var secCount = document.querySelectorAll("section[id]").length+1;
    let newSec = `<section id= 'section`+secCount+`' >
    <div class="landingContainer" id="new">
      <h2>Business</h2>
      <button type="button" class="collapsible">+</button>
      <div>
        <h3> Mission Possible: How to build a business for our times  </h3>
        <h4>  by Alexandre Mars  </h4>
        <p>Is entrepreneurship the path for everyone? No. But can anyone, no matter where they come from, become a successful entrepreneur if they choose to? According to Alexandre Mars, the answer is a resounding yes. Serial tech entrepreneur, millionaire and philanthropist Alexandre Mars gives us a behind-the-scenes look at what it really takes to become an entrepreneur, and one who does good along the way, sharing tricks of the trade he learned over his career building companies (and selling them to the likes of Blackberry and Publicis) in the U.S. and Europe.</p>
        <p>Part of a new generation of philanthropists, Alexandre is one of the leading global entrepreneurial voices changing the way the business world thinks about money, its power and its purpose. Mission Possible reminds us that there's no one way to start and build a business. Bringing together a wealth of perspectives from dozens of today's top entrepreneurs from around the world, including the founder of Pinterest and the former Buddhist monk who created Headspace, readers will discover it is possible to make money and have a bigger mission too. </p>
      </div>
    </div>
  </section>`;
  document.querySelector('#main').insertAdjacentHTML("beforeend", newSec);
  let newHeader = createNavElement("Business",'section'+secCount);
  navbarList.appendChild(newHeader);
  colnewNode = document.getElementById('section'+secCount).querySelector('button');
  colnewNode.addEventListener("click", function() {
      this.classList.toggle("active");
      let content = this.nextElementSibling;
      if (content.style.display === "block") {
          content.style.display = "none";
        } else {
            content.style.display = "block";
        }
    });
};

   

    // smooth scroll
    let links = document.querySelectorAll('a[href^="#"]')
 
for (let link of links) {  
    link.addEventListener('click', (e)=> {
        let hashval = link.getAttribute('href')
        let target = document.querySelector(hashval)
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        history.pushState(null, null, hashval)
        e.preventDefault()
    })
}
// navbar disappear

var isScrolling;

window.addEventListener('scroll', function ( event ) {

	navbarList.style.display = "block";
        addSec.style.display = "block";

	window.clearTimeout( isScrolling );


	isScrolling = setTimeout(function() {

		navbarList.style.display = "none";
        addSec.style.display = "none";

	}, 1000);

}, false);


// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  sections = document.querySelectorAll("section[id]");
  let scrollY = window.pageYOffset; // the scrolled space measure
  let sectionId;
  sections.forEach(current => {
    let sectionHeight = current.offsetHeight; // element's hieght including the borders
    let  sectionTop = (current.getBoundingClientRect().top + window.pageYOffset)-50;
    sectionId = current.getAttribute("id");
    if (
      scrollY >= sectionTop &&
      scrollY < (sectionTop + sectionHeight)
    ){
        current.classList.add("activeClass");
        document.querySelector(".navbarMenu a[href*=" + sectionId + "]").classList.add("activeNav");
    } else {
        current.classList.remove("activeClass");
        document.querySelector(".navbarMenu a[href*=" + sectionId + "]").classList.remove("activeNav");
    }
  });
}

// top button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
} 





 // section collapse
 let collap = document.getElementsByClassName("collapsible");
 let i;

for (i = 0; i < collap.length; i++) {
 collap[i].addEventListener("click", function() {
//  this.classList.toggle("active");
 let content = this.nextElementSibling;
 if (content.style.display === "block") {
   content.style.display = "none";
 } else {
   content.style.display = "block";
 }
});
} 
