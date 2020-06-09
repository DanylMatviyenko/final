/*jshint esversion:6*/
const photosSwitcherModule = (function () {
	const imageSwitcher = document.querySelector('.image-switcher');
	const liList = document.querySelectorAll('.image-switcher__product-photo');

	const swapItems = function () {
		imageSwitcher.classList.remove(imageSwitcher.classList[imageSwitcher.classList.length - 1]);
		for(let li of liList) {
			if(li.dataset === this.dataset) {
				imageSwitcher.classList.add(li.dataset.bg);
				li.classList.add('image-switcher__product-photo_display_none');
			}else if(li.classList.contains('image-switcher__product-photo_display_none')) {
				li.classList.remove('image-switcher__product-photo_display_none');
			}
		}
	};

	return {liList, swapItems};
})();

for(let li of photosSwitcherModule.liList) {
	li.addEventListener('click', photosSwitcherModule.swapItems);
}

const sizesList = document.querySelectorAll('.pick-size__icon-holder');

for(let sizeItem of sizesList) {
	sizeItem.addEventListener('click', function () {
		for(let item of sizesList) {
			if(item.classList.contains('pick-size__icon-holder_focused')) {
				item.classList.remove('pick-size__icon-holder_focused');
			}
			if(item.textContent === this.textContent) {
				item.classList.add('pick-size__icon-holder_focused');
			}
		}
	});
}

const buyButton = document.querySelector('.item-from-shop__add-button');

function changeBuyButton () {
	buyButton.classList.add('add-button_user_bought');
	buyButton.textContent = 'product added';
	buyButton.removeEventListener('click', changeBuyButton);
}
buyButton.addEventListener('click', changeBuyButton);

const orderCounter = document.querySelector('.header__order-counter');
function changeOrderCounter() {
	orderCounter.textContent = +orderCounter.textContent + 1;
}

buyButton.addEventListener('click', changeOrderCounter);
