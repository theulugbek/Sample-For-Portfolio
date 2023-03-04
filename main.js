var bars = document.querySelector('.bars');
var ultop = document.querySelector('.ultop');
var languages = document.querySelector('.languages');
var icon = document.querySelector('.icon');



bars.addEventListener('click', function(){
    // menuni yopish
    if(ultop.classList.contains('ultopjs')){
        hide();
    }
    //menuni ochish
    else {
        show();
    }
});
var removeClasses = function(){
    ultop.classList.remove('ultopjs', 'hidelist');
}
var show = function(){
    ultop.classList.add('ultopjs');
    languages.classList.add('languagesjs');
    icon.classList.add('fa-times');
    ultop.removeEventListener('animationend', removeClasses);
}
var hide = function(){
    ultop.classList.add('hidelist');
    icon.classList.remove('fa-times');
    languages.classList.remove('languagesjs');
    ultop.addEventListener('animationend', removeClasses);
}