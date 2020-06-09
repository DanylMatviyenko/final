document.querySelector('.slider__button_left').addEventListener('click', function() {
	document.querySelector('.slider__slides').scrollBy(-150, 0);
});
document.querySelector('.slider__button_right').addEventListener('click', function() {
	document.querySelector('.slider__slides').scrollBy(150, 0);
});