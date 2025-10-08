const tb1 = document.getElementById('thumb-1')
const tb2 = document.getElementById('thumb-2')
const tb3 = document.getElementById('thumb-3')
const imagem =  document.getElementById('dynamic-image')


tb1.addEventListener('click',function(){
    imagem.src = './img/disjuntor_3_tb0.png'
})


tb2.addEventListener('click',function(){
     imagem.src = './img/disjuntor_3_tb2_big.png';
})

tb3.addEventListener('click',function(){
    imagem.src = './img/disjuntor_2_tb3_big.png';
})



