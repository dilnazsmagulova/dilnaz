

var butt = document.getElementById("myBtn");

butt.addEventListener("click", otherFunction);


function otherFunction() {
  var audio = document.getElementById("audio");
  audio.play();
  alert ("Don't forget to follow us on Instagram");
  
}






animat.onclick = function() {
    let start = Date.now();

    let timer = setInterval(function() {
      let timePassed = Date.now() - start;

      animat.style.left = timePassed / 5 + 'px';

      if (timePassed > 4000) clearInterval(timer);

    }, 20);
  }

  function mOver(obj) {
    obj.innerHTML = "Always remember it"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Love and value yourself"
  }


  document.getElementById("tex").addEventListener("keypress", myFunction);
 function myFunction() {
    document.getElementById("tex").style.backgroundColor = "pink";
  }


  const propert = {
    firstname: "About ",
    lastname: "us ",
    
  }
  document.getElementById("propert").innerHTML = " Some information " + propert.firstname + propert.lastname ;

  $(document).ready(function() {
    $(".jq").css("color","black");
  });
 
  let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // 
}