const menuButton = document.querySelector('#button')

menuButton.addEventListener('click',(e)=>{
    const navigationList = document.querySelector('.mainNavigation__list');
    navigationList.classList.toggle('mainNavigation__list--visible'); 
    // const navbox= document.querySelector('.navbox--js');
    // navbox.classList.toggle('navbox--visible');    
       
    
});
let myArray=['pi',12,'bla bla', 888, 'mural', 'ohm', 'korniszon']
const object={name:'Eduardo', nationality:'Mexican', forname:'Sanchez'}
for(let propertyName in object)
{console.log(`${propertyName}:${object[propertyName]}`)}

document.cookie ="cookie#1 = bla bla bla";
document.cookie ="cookie#2 = bum cyk cyk";


for(i=0;i<10;i++){localStorage.setItem(`element nr ${i}`,`wartość nr ${i+6}`)};
