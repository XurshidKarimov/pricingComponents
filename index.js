'use strict';

function swap1(){
    let getSpan1 = document.getElementById('monthly'),
        getSpan2 = document.getElementById('anually'),
        getCircle = document.getElementById('circle').style,
        getPrice = document.getElementsByClassName('cards-block__content__cards__card__price__number');

        getSpan1.classList.remove('active');
        getSpan2.classList.add('active');
        getCircle.removeProperty('right');
        getCircle.left = '4px';

        for (el of getPrice){
            el.innerHTML = String(Math.trunc(+el.innerHTML * 10) + 0.99); 
        }
        
}

function swap2(){
    let getSpan1 = document.getElementById('monthly'),
        getSpan2 = document.getElementById('anually'),
        getCircle = document.getElementById('circle').style;
        getPrice = document.getElementsByClassName('cards-block__content__cards__card__price__number');

        getSpan2.classList.remove('active');
        getSpan1.classList.add('active');
        getCircle.removeProperty('left');
        getCircle.right = '4px';

        for (el of getPrice){
            el.innerHTML = String(((+el.innerHTML / 10).toFixed(2) - 0.01)); 
        }
}