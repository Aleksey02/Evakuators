let sliderBtnLeft = document.querySelector('.howWeight__btn-left');
let sliderBtnRight = document.querySelector('.howWeight__btn-right');

let paginations = document.querySelectorAll('.howWeight__pagination-point');

let sliderItems = document.querySelectorAll('.howWeight__item');

sliderBtnLeft.addEventListener('click', ()=>{
    if(!paginations[0].classList.contains('active')){
        paginations[0].classList.add('active');
        paginations[1].classList.remove('active');
        sliderItems[0].classList.add('active');
        sliderItems[1].classList.add('active');
        sliderItems[2].classList.remove('active');
        sliderItems[3].classList.remove('active');
    }
})
sliderBtnRight.addEventListener('click', ()=>{
    if(!paginations[1].classList.contains('active')){
        paginations[1].classList.add('active');
        paginations[0].classList.remove('active');
        sliderItems[2].classList.add('active');
        sliderItems[3].classList.add('active');
        sliderItems[0].classList.remove('active');
        sliderItems[1].classList.remove('active');
    }
})

let costBtns = document.querySelectorAll('.cost__btn');
let costContents = document.querySelectorAll('.cost__content');

costBtns.forEach((btn, index)=>{
    btn.addEventListener('click', ()=>{
        if(!btn.classList.contains('active')){
            costBtns[index].classList.add('active');
            costBtns[1-index].classList.remove('active');
            costContents[index].classList.add('active');
            costContents[1-index].classList.remove('active');

        }
    })
})

