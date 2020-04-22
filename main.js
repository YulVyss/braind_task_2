
(function () {
	function addToCartHandler() {
		let btns = document.querySelectorAll('[data-add-to-cart]');
		let count = 0;
		for (let btn of btns) {
			btn.addEventListener('click', function (e) {
				e.preventDefault();
				fetch('./fakedata/cartResponse.json')
					.then(function (response) {
						return response.json();
					})
					.then(function (response) {
						count += response.count;
						let cart = document.querySelector('.cart-icon__counter');
						cart.innerHTML = count;
						btn.innerHTML = 'Добавлено';
						btn.classList.remove('btn-primary');
						btn.classList.add('btn-success');
					});
			});
		};
	};

	function main() {
		addToCartHandler();
	};

	main();
}());
