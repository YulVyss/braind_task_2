(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

(function () {
	function addToCartHandler() {
		var btns = document.querySelectorAll('[data-add-to-cart]');
		var count = 0;
		var _iteratorNormalCompletion = true;
		var _didIteratorError = false;
		var _iteratorError = undefined;

		try {
			var _loop = function _loop() {
				var btn = _step.value;

				btn.addEventListener('click', function (e) {
					e.preventDefault();
					fetch('./fakedata/cartResponse.json').then(function (response) {
						return response.json();
					}).then(function (response) {
						count += response.count;
						var cart = document.querySelector('.cart-icon__counter');
						cart.innerHTML = count;
						btn.innerHTML = 'Добавлено';
						btn.classList.remove('btn-primary');
						btn.classList.add('btn-success');
					});
				});
			};

			for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
				_loop();
			}
		} catch (err) {
			_didIteratorError = true;
			_iteratorError = err;
		} finally {
			try {
				if (!_iteratorNormalCompletion && _iterator.return) {
					_iterator.return();
				}
			} finally {
				if (_didIteratorError) {
					throw _iteratorError;
				}
			}
		}

		;
	};

	function main() {
		addToCartHandler();
	};

	main();
})();

},{}]},{},[1])

//# sourceMappingURL=main.js.map
