/*jshint esversion:6*/
const bagModule = (function () {
	

	function countQty () {
		const itemsQty = document.querySelectorAll('.orders-table__current__amount');
		let sum = 0;
		for(let itemQty of itemsQty) {
			sum += +itemQty.textContent;
		}
		document.querySelector('.header__order-counter').textContent = sum;
	}

	function arrowAdd() {
		this.parentElement.previousElementSibling.textContent = +this.parentElement.previousElementSibling.textContent + 1;
		countQty();
	}
	function arrowDecrease() {
		if(+this.parentElement.previousElementSibling.textContent !== 0) {
			this.parentElement.previousElementSibling.textContent = +this.parentElement.previousElementSibling.textContent - 1;
			countQty();
		}

	}
	function removeItem(index) {
		const table = document.querySelector('.orders-table');
		const trList = Array.from(document.querySelectorAll('.trorders-table__tbody-tr'));
		trList.splice(index, 1);
		const tbody = document.querySelector('.orders-table__tbody');
		tbody.innerHTML = '';

		for(let i = 0; i < trList.length; i++) {
			trList[i].dataset.index = i;
			tbody.append(trList[i]);
		}

		countQty();
	}

	return {countQty, arrowAdd, arrowDecrease, removeItem};
})();
bagModule.countQty();

for(let but of document.querySelectorAll('.change-amount__button-plus')) {
	but.addEventListener('click', bagModule.arrowAdd);
}

for(let but of document.querySelectorAll('.change-amount__button-minus')) {
	but.addEventListener('click', bagModule.arrowDecrease);
}

for(let closeBut of document.querySelectorAll('.orders-table__delete-but')) {
	closeBut.addEventListener('click', function() {
		bagModule.removeItem(+this.parentElement.parentElement.dataset.index);
	});
}

document.querySelector('.orders__check-out__add-button').addEventListener('click', function () {
	window.location.href = "categoty-all.html";
});