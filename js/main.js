'use strict'

const close = document.querySelector('.close');
const open = document.querySelectorAll('.open');
const answer = document.querySelector('.answer');

close.addEventListener('click', function(){
    console.log('close clicked');
    if(answer.style.display === 'block'){
        answer.style.display = 'none';
    }else{
        answer.style.display = 'block';
    }
})

open.addEventListener('click', function(){
    console.log('open clicked');
    if(answer.style.display === 'none'){
        answer.style.display = 'block';
    }else{
        answer.style.display = 'none';
    }
})