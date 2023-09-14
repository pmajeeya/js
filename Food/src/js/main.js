document.addEventListener('DOMContentLoaded', () => {

const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items'),
        modal = document.querySelector('.modal'),
        openModalBtn = document.querySelectorAll('[data-modal]'),
        closeModalBtn = document.querySelector('[data-close]');
        

        //modal
openModalBtn.forEach(btn => {
    btn.addEventListener('click', openModal);
});

function openModal(){
    modal.style.display = 'block';
    document.body.style.overflow = 'hiddem';
}
function closeModal(){
    modal.style.display = 'none';
    document.body.style.overflow = '';
};
closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if(e.target === modal){
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
});
document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.style.display === 'block'){
        closeModal();
    }
});
    //timer
        
let deadline = '2023-09-20';
        
function calcTime(endtime) {
    let days, hours, minutes, seconds;
    let t = Date.parse(endtime) - Date.parse(new Date());
    if(t <= 0){
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
    'days':  days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
};
}

inputValuesInTimer = function(selector, endtime) {
    const timer = document.querySelector(selector),
          days = timer.querySelector('#days'),
          hours = timer.querySelector('#hours'),
          minutes = timer.querySelector('#minutes'),
          seconds = timer.querySelector('#seconds'),
          timeInterval = setInterval(updateClock, 1000);
    
    updateClock();

    function getZero(num) {
        if(num < 10 && num >= 0){
        return `0${num}`;
        } else if (num < 0){
            return '00';
        } else return num;
    }

    updateClock();
    function updateClock(){
        const t = calcTime(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);

        if(t.t <= 0){
            clearInterval(timeInterval);
        }
    }
    // calcTime(timer).forEach(v) = function(){
    //     v.innerHTML = `${indexOf(calcTime).value}`;
    // }
    }


inputValuesInTimer('.timer', deadline)

        //tabs
function hideTabsContent(){
    tabsContent.forEach(item => {
        item.classList.remove('fadeToggle');
    });
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
}
function showTabsContent(i = 0){
    tabsContent[i].classList.add('fadeToggle');
    tabs[i].classList.add('tabheader__item_active');
    }

hideTabsContent();
showTabsContent();

tabsParent.addEventListener('click', (event) => {
    target = event.target;

    if(target && target.classList.contains('tabheader__item')){
        tabs.forEach((item, i) => {
            if(target == item){
            hideTabsContent();
            showTabsContent(i);
            }
        });
    }
});
});