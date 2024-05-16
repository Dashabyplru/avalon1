let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
	showSlides(slideIndex += n);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("mySlides");
	//let dots = document.getElementsByClassName("dot");
	if (n > slides.length) {slideIndex = 1}    
	if (n < 1) {slideIndex = slides.length}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";  
	}
	/*for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}*/
	slides[slideIndex-1].style.display = "block";  
	//dots[slideIndex-1].className += " active";
}

function openModal() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'block';
}

const openModalLink = document.getElementById('openModalLink');
openModalLink.addEventListener('click', function(event) {
  event.preventDefault();
  openModal();
});

const closeModal = document.querySelector('.close');
closeModal.addEventListener('click', function() {
  const modal = document.getElementById('myModal');
  modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
  const modal = document.getElementById('myModal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});