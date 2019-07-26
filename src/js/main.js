const menuButton = document.querySelector('.menu__button--js')

menuButton.addEventListener('click',(e)=>{
    // const navigationList = document.querySelector('.navigationList--js');
    // navigationList.classList.toggle('navigationList--visible'); 
    const mainNavigation__list= document.querySelector('.mainNavigation__list');
    mainNavigation__list.classList.toggle('mainNavigation__list--visible');    
       
    
});

