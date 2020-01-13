const menuButton = document.querySelector('#button')

menuButton.addEventListener('click',(e)=>{
    const navigationList = document.querySelector('.mainNavigation__list');
    navigationList.classList.toggle('mainNavigation__list--visible'); 
    // const navbox= document.querySelector('.navbox--js');
    // navbox.classList.toggle('navbox--visible');    
       
    
});
let myArray=['pi',12,'bla bla', 888, 'mural', 'ohm', 'korniszon']



document.cookie ="cookie#1 = bla bla bla";
document.cookie ="cookie#2 = bum cyk cyk";

//tworzymy dziesięć elementów do loacalStorage
for(i=0;i<10;i++){localStorage.setItem(`element nr ${i}`,`wartość nr ${i+6}`)};
// Tworzymy obiekt o nazwie "obiekt" :)
const object={name:'Eduardo', nationality:'Mexican', forname:'Sanchez'}
// Zamienieniamy obiekt na string JSONowy za pomocą metody JSON.stringify
const objectStringify = JSON.stringify(object);
// Wypisujemy utworzonego stringa w konsoli
console.log(objectStringify);
// Dodajemy stringa do laocalStorage pod nazwą obiekt
// Robimy to bo nie możemy dodawać obiektów do localStorage
localStorage.setItem('objectLocal',objectStringify);
// Pobieramy do zmiennej "objectJSON" string "objectLocal" 
const objectJSON = localStorage.getItem('objectLocal');
// Przekształcamy z powrotem stringa w obiekt przy pomocy JSON.parse
const objectPars = JSON.parse(objectJSON);

for(let propertyName in object)
{console.log(`${propertyName}:${object[propertyName]}`)}

const inputLS = document.querySelector('.inputLocalStorage');
if (localStorage.getItem('input')!= null){
    inputLS.value = localStorage.getItem('input')
}

inputLS.addEventListener('keyup',(e) => {console.log(e.target.value)});
inputLS.addEventListener('keyup',(e) => {localStorage.setItem('input',e.target.value)});

const sections = document.querySelectorAll('.main__header');
const sectionsDiv = document.querySelector('.sections');
const sectionsList = document.querySelector('.sectionsList');
sections.forEach((e)=>{
    const section = document.createElement('li');
    section.innerText = e.textContent;
    sectionsList.prepend(section);
    
})
sectionsDiv = document.addEventListener('click', e =>{
    sectionsList.classList.toggle('sectionsList--show');
})