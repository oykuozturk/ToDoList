let addToDoButton=document.getElementById('addToDo');
let toDoContainer=document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let clearToDo = document.getElementById('clearToDo');
addToDoButton.addEventListener('click', function(){ 
    let paragraph=document.createElement('p'); //paragraf olustur
    paragraph.classList.add('paragrapf-styling');
    toDoContainer.appendChild(paragraph); //paragrafi div icerisine at
    paragraph.innerHTML=inputText.value; //inputText'e yazilani paragraf icerisine aktar
    inputText.value=""; //inputText icerigini sifirla

    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration='line-through';
    }); //bir kere tiklandiginda paragrafta yazili olan ifadenin uzeri cizilsin

    paragraph.addEventListener('dblclick',function(){
        toDoContainer.removeChild(paragraph);
    }); //iki kere tiklanildiginda paragrafta yazili olan ifade silinsin

    clearToDo.addEventListener('click',function(){
        // paragraph.style.display="none";
        paragraph.remove();
    })
})