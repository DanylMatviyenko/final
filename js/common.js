'use strict';

/*jshint esversion:6*/

var headerModule = function () {
	var headerSearch = document.querySelector('.header__icon-holder');
	var _headerContainer = document.querySelector('.header__container');
	var _headerInput = document.querySelector('.header__input');

	var _userInputHandler = function _userInputHandler() {
		if (_headerInput.value) {
			window.location.href = "categoty-all.html";
		}
	};

	var inputExpand = function inputExpand() {
		if (_headerContainer.classList.contains('header__container_expanded')) {
			if (_headerInput.value) {
				_userInputHandler();
			}
			_headerContainer.classList.remove('header__container_expanded');
		} else {
			_headerContainer.classList.add('header__container_expanded');
			_headerInput.addEventListener('keyup', function (event) {
				if (event.keyCode === 13) {
					_userInputHandler();
				} else if (event.keyCode === 27) {
					_headerInput.value = '';
					headerSearch.click();
				}
			});
		}
	};

	return { inputExpand: inputExpand, headerSearch: headerSearch };
}();
headerModule.headerSearch.addEventListener('click', headerModule.inputExpand);

document.querySelector('.slider__arrow_right').addEventListener('click', function () {
	document.querySelector('.slider__slides').scrollBy(150, 0);
});
document.querySelector('.slider__arrow_left').addEventListener('click', function () {
	document.querySelector('.slider__slides').scrollBy(-150, 0);
});
