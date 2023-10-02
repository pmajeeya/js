document.addEventListener('DOMContentLoaded', () => {

	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		tabsParent = document.querySelector('.tabheader__items'),
		modal = document.querySelector('.modal'),
		openModalBtn = document.querySelectorAll('[data-modal]');

	// 


	class MenuCard {
		constructor(src, alt, title, descr, price, parentSelector = '.menu .container', ...classes) {
			this.title = title;
			this.descr = descr;
			this.price = price;
			this.src = src;
			this.alt = alt;
			this.parent = document.querySelector(parentSelector);
			this.classes = classes;
			this.rate = 9;
			this.changeToUAH();
		}
		changeToUAH() {
			this.price = this.price * this.rate;
		};
		render() {
			const element = document.createElement('div');
			if (this.classes.length === 0) {
				this.classes = 'menu__item';
				element.classList.add(this.classes);
			} else {
				this.classes.forEach(className => element.classList.add(className));
			}
			element.innerHTML = `
            <img src="${this.src}" alt="${this.alt}">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.descr}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
            `;
			this.parent.append(element);
		}
	}

	const getRecource = async (url) => {
		let res = await fetch(url);

		if(!res.ok){
			throw new Error(`Couldn't fetch ${url}, status:${res.status}`);
		}

		return await res.json();
	};

	getRecource('http://localhost:3000/menu')
		.then(data => {
			data.forEach(({img, altimg, title, descr, price}) => {
				new MenuCard(img, altimg, title, descr, price).render();
			});
		});


	//modal

	const forms = document.querySelectorAll('form');

	const message = {
		loading: 'img/form/spinner.svg',
		success: 'Спасибо, мы скоро свяжемся с вами!',
		failure: 'Что-то пошло не так...)'
	};

	openModalBtn.forEach(btn => {
		btn.addEventListener('click', openModal);
	});

	function openModal() {
		modal.classList.add('fadeToggle');
		document.body.style.overflow = 'hidden';
		clearInterval(modalTimerId);
	}

	function closeModal() {
		modal.classList.remove('fadeToggle');
		document.body.style.overflow = '';
	};

	modal.addEventListener('click', (e) => {
		if (e.target === modal || e.target.getAttribute('data-close') == '') {
			modal.classList.remove('fadeToggle');
			document.body.style.overflow = '';
		}

	});
	document.addEventListener('keydown', (e) => {
		if (e.code === 'Escape' && modal.style.display === 'block') {
			closeModal();
		}
	});
	const modalTimerId = setInterval(openModal, 50000);

	function showModalByScroll() {
		if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
			openModal();
			window.removeEventListener('scroll', showModalByScroll);
		}
	}

	window.addEventListener('scroll', showModalByScroll);

	forms.forEach(item => {
		bindPostData(item);
	});


	const postData = async (url, data) => {
		let res = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: data
		});
		return await res.json();
	};


	function bindPostData(form) { 
		form.addEventListener('submit', (e) => {
			e.preventDefault();

			const statusMessage = document.createElement('img');
			statusMessage.src = message.loading; //
			statusMessage.style.cssText = `
											display: block;
											margin: 0 auto;
										  `;
			form.insertAdjacentElement('afterend', statusMessage);
	
			const formData = new FormData(form);
	
			const object = {};
			
			const json = JSON.stringify(Object.fromEntries(formData.entries()));
			formData.forEach(function (value, key) {
				object[key] = value;
			});
			
			
			debugger; postData('http://localhost:3000/requests', json)	
				.then(data => {
					debugger; console.log(data);
					showThanksModal(message.success);
					statusMessage.remove();
				})
				.catch(() => {
					console.log(message.failure);
					showThanksModal(message.failure);
				})
				.finally(() => {
					form.reset();
				});
			
		});

	}

	function showThanksModal(message) {
		prevModal = modal.querySelector('.modal__dialog');
		prevModal.style.display = 'none';

		openModal();

		prevModal.classList.remove('fadeToggle');

		const thanksModal = document.createElement('div');
		thanksModal.classList.add('modal__dialog');
		thanksModal.innerHTML = `
            <div class='modal__content'>
            <div class='modal__close' data-close>&times</div>
            <div class='modal__title'>${message}</div>
            </div>
            `;
		modal.append(thanksModal);

		const thanksModalTimer = setTimeout(() => {
			thanksModal.remove();
			prevModal.style.display = 'block';
			closeModal();

		}, 4000);

	}

	//timer

	let deadline = '2023-09-20';

	function calcTime(endtime) {
		let days, hours, minutes, seconds;
		let t = Date.parse(endtime) - Date.parse(new Date());
		if (t <= 0) {
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(t / 1000 / 60 / 60 / 24),
			hours = Math.floor(t / 1000 / 60 / 60) % 24,
			minutes = Math.floor(t / 1000 / 60) % 60,
			seconds = Math.floor(t / 1000) % 60;
		}
		return {
			't': t,
			'days': days,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		};
	}

	inputValuesInTimer = function (selector, endtime) {
		const timer = document.querySelector(selector),
			days = timer.querySelector('#days'),
			hours = timer.querySelector('#hours'),
			minutes = timer.querySelector('#minutes'),
			seconds = timer.querySelector('#seconds'),
			timeInterval = setInterval(updateClock, 1000);

		updateClock();

		function getZero(num) {
			if (num < 10 && num >= 0) {
				return `0${num}`;
			} else if (num < 0) {
				return '00';
			} else return num;
		}

		updateClock();
		function updateClock() {
			const t = calcTime(endtime);

			days.innerHTML = getZero(t.days);
			hours.innerHTML = getZero(t.hours);
			minutes.innerHTML = getZero(t.minutes);
			seconds.innerHTML = getZero(t.seconds);

			if (t.t <= 0) {
				clearInterval(timeInterval);
			}
		}
		// calcTime(timer).forEach(v) = function(){
		//     v.innerHTML = `${indexOf(calcTime).value}`;
		// }
	};


	inputValuesInTimer('.timer', deadline);

	//tabs

	function hideTabsContent() {
		tabsContent.forEach(item => {
			item.classList.remove('fadeToggle');
		});
		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}
	function showTabsContent(i = 0) {
		tabsContent[i].classList.add('fadeToggle');
		tabs[i].classList.add('tabheader__item_active');
	}

	hideTabsContent();
	showTabsContent();

	tabsParent.addEventListener('click', (event) => {
		target = event.target;

		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideTabsContent();
					showTabsContent(i);
				}
			});
		}
	});
	fetch('http://localhost:3000/menu')
		.then(data => data.json())
		.then(res => console.log(res));



	//// slider 
	const slider = document.querySelector('.offer__slider'),
		  sliderPictures = slider.querySelectorAll('.offer__slide'),
		  sliderCounterTotal = slider.querySelector('#total'),
		  sliderPrev = slider.querySelector('.offer__slider-prev'),
		  sliderNext = slider.querySelector('.offer__slider-next');
	let   sliderCounterCurrent = slider.querySelector('#current');
	let current = 1,
		total = sliderPictures.length;

	function sliderProcess(){

		console.log(sliderPictures);


		total = sliderPictures.length;
		sliderCounterTotal.innerHTML = addZero(total);

		
		console.log(sliderPictures[2]);
		// slider.addEventListener('click', (e) => {
		// 	// if(e.target === sliderPrev){
		// 	// 	current -= 1; 
		// 	// 	if(sliderCounterСurrent <= 0) sliderCounterСurrent = total;
		// 	// 	console.log(e.target.classList);
		// 	// 	e.target.classList.remove('fadeToggle');
		// 	// 	// sliderPictures[current].classList.add('fadeToggle');
		// 	// 	console.dir(sliderPictures[current].classList);
		// 	// }
		// 	// if(e.target === sliderNext){
		// 	// 	current += 1;
		// 	// 	if(sliderCounterСurrent <= 0) sliderCounterСurrent = total;
		// 	// 	e.target.classList.remove('fadeToggle');
		// 	// 	sliderPictures[current].classList.add('fadeToggle');
		// 	// }
		// });

		sliderPrev.addEventListener('click', (e) => {
			slideShow(-1);
		});
		sliderNext.addEventListener('click', (e) => {
			slideShow(1);
		});

		function slideCount(n) {
			current += n;
			if (current > sliderPictures.length) {
				current = 1;
			} else if(current <= 0) {
				current = total;
			};
			// console.log('current is calculated.');
			sliderCounterCurrent.innerHTML = addZero(current);
		}

		function slideShow(n) {
			slideCount(n);
			sliderPictures.forEach((slide) => {
				slide.classList.remove('fadeToggle');
			});
			sliderPictures[current - 1].classList.add('fadeToggle');
			console.log(`shown ${current} slide.`);
		}		

		function addZero(n) {
			if (n < 10) return `0${n}`;
		}
	};
	sliderProcess();
});