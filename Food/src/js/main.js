document.addEventListener('DOMContentLoaded', () => {

const tabs = document.querySelectorAll('.tabheader__item'),
        tabsContent = document.querySelectorAll('.tabcontent'),
        tabsParent = document.querySelector('.tabheader__items');
        
        //timer
        
let deadline = '2023-09-20';
        
function calcTime(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
    days = Math.floor(t / 1000 / 60 / 60 / 24),
    hours = Math.floor(t / 1000 / 60 / 60) % 24,
    minutes = Math.floor(t / 1000 / 60) % 60,
    seconds = Math.floor(t / 1000) % 60;
return {
    't': t,
    'days':  days,
    'hours': hours,
    'minutes': minutes,
    'seconds': seconds
};
}

inputValuesInTimer = function(selector, endtime) {
    const timer = document.querySelector(selector);
    const days = timer.querySelector('#days');
    const hours = timer.querySelector('#hours');
    const minutes = timer.querySelector('#minutes');
    const seconds = timer.querySelector('#seconds');
    
    function getZero(num) {
        if(num < 10 && num >= 0){
        return `0${num}`;
        } else return num;
    }

    updateClock();
    function updateClock(){
        const t = calcTime(endtime);

        days.innerHTML = getZero(t.days);
        hours.innerHTML = getZero(t.hours);
        minutes.innerHTML = getZero(t.minutes);
        seconds.innerHTML = getZero(t.seconds);
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