/*jshint esversion:6*/


const headerModule = (function () {
	const headerSearch = document.querySelector('.header__icon-holder');
	const _headerContainer = document.querySelector('.header__container');
	const _headerInput = document.querySelector('.header__input');


	const _userInputHandler = function () {
		if(_headerInput.value) {
			window.location.href = "categoty-all.html";
		}
	};


	const inputExpand = function () {
		if(_headerContainer.classList.contains('header__container_expanded')) {
			if(_headerInput.value) {
				_userInputHandler();
			}
			_headerContainer.classList.remove('header__container_expanded');
		}else {
			_headerContainer.classList.add('header__container_expanded');
			_headerInput.addEventListener('keyup', (event) => {
				if(event.keyCode === 13) {
					_userInputHandler();
				}else if(event.keyCode === 27) {
					_headerInput.value = '';
					headerSearch.click();
				}
			});
		}
		
	};

	return {inputExpand, headerSearch};
})();
headerModule.headerSearch.addEventListener('click', headerModule.inputExpand);



