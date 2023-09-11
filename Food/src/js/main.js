document.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'),
          tabsParent = document.querySelector('.tabheader__items');

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