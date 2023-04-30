window.onscroll = function() {scrollFunction()};



function scrollFunction() {
  nav = document.getElementById("nav")

  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.style.padding = "10px 0";
    //nav.style.backgroundColor = "#fff";
    nav.classList.add("small-nav");
    nav.classList.remove("large-nav");
  } else {
    nav.style.padding = "20px 0";
    //nav.style.backgroundColor = "#ffffff00";
    nav.classList.add("large-nav");
    nav.classList.remove("small-nav");
  }
}