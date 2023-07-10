const accord=document.querySelectorAll('.accordian__container')

accord.forEach( item => {
const title =item.querySelector('.accordian__container__title')

title.addEventListener('click', ()=> {
    for( i=0; i<accord.length;i++){
        if(accord[i]!=item){
            accord[i].classList.remove('active');
        }
        else{
        item.classList.toggle('active');
        }

    }

});
})