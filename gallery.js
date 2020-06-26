var slideIndex = 1;
showSlides(slideIndex);


function plusSlides(n){
  clearInterval(myTimer);
  if (n < 0){
    showSlides(slideIndex -= 1);
  } else {
   showSlides(slideIndex += 1); 
  }
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 7000);
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 7000);
  }
}


function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}


window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 7000);
})

function currentSlide(n){
  clearInterval(myTimer);
  myTimer = setInterval(function(){plusSlides(n + 1)}, 7000);
  showSlides(slideIndex = n);
}




var listIndex = 1;
showList(listIndex);

// Next/previous controls
function plusList(n) {
  showList(listIndex += n);
}

// Thumbnail image controls
function currentList(n) {
  showList(listIndex = n);
}

function showList(n) {
  var i;
  var list = document.getElementsByClassName("list");
  var nav = document.getElementsByClassName("listnavop");
  var option = document.getElementById("option");
  if (n > list.length) {listIndex = 1}
  if (n < 1) {listIndex = list.length}
  for (i = 0; i < list.length; i++) {
    list[i].style.display = "none";
  }
  for (i = 0; i < nav.length; i++) {
    nav[i].className = nav[i].className.replace(" active", "");
  }
  list[listIndex-1].style.display = "block";
  nav[listIndex-1].className += " active";
  captionText.innerHTML = nav[listIndex-1].alt;
}

