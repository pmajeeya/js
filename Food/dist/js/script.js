/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.tabheader__item'),
    tabsContent = document.querySelectorAll('.tabcontent'),
    tabsParent = document.querySelector('.tabheader__items'),
    modal = document.querySelector('.modal'),
    openModalBtn = document.querySelectorAll('[data-modal]'),
    closeModalBtn = document.querySelector('[data-close]');

  // 

  class MenuCard {
    constructor(src, alt, title, descr, price, parentSelector, ...classes) {
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.src = src;
      this.alt = alt;
      this.parent = document.querySelector(parentSelector) || document.querySelector('.menu .container');
      this.classes = classes;
      this.rate = 9;
      this.changeToUAH();
    }
    changeToUAH() {
      this.price = this.price * this.rate;
    }
    render() {
      const element = document.createElement('div');
      if (this.classes.length === 0) {
        this.classes = "menu__item";
        element.classList.add(this.classes);
      } else {
        this.classes.forEach(className => element.classList.add(className));
      }
      element.innerHTML = `
                <img src="${this.src}" alt="${this.alt}">
                <h3 class="menu__item-subtitle">“${this.title}”</h3>
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
  new MenuCard('img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"', 'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 23, ".menu .container").render();
  new MenuCard('img/tabs/elite.jpg', 'elite', 'Меню “Премиум”', 'В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 61, '.menu .container').render();
  new MenuCard('img/tabs/post.jpg', 'post', 'Меню "Постное"', 'Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков..', 47).render();

  //modal
  openModalBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
  });
  function openModal() {
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
    clearInterval(modalTimerId);
  }
  function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
  ;
  closeModalBtn.addEventListener('click', closeModal);
  modal.addEventListener('click', e => {
    if (e.target === modal) {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    }
  });
  document.addEventListener('keydown', e => {
    if (e.code === 'Escape' && modal.style.display === 'block') {
      closeModal();
    }
  });
  const modalTimerId = setInterval(openModal, 5000);
  function showModalByScroll() {
    if (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
      openModal();
      window.removeEventListener('scroll', showModalByScroll);
    }
  }
  window.addEventListener('scroll', showModalByScroll);
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
      days = Math.floor(t / 1000 / 60 / 60 / 24), hours = Math.floor(t / 1000 / 60 / 60) % 24, minutes = Math.floor(t / 1000 / 60) % 60, seconds = Math.floor(t / 1000) % 60;
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
  tabsParent.addEventListener('click', event => {
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
});
/******/ })()
;
//# sourceMappingURL=script.js.map