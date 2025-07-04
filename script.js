const prevButton = document.getElementById('prev')
const nextButton = document.getElementById('next')
const saibaButton = document.getElementById('saiba')
const items = document.querySelectorAll('.item')
const list = document.querySelector('.list')

let active = 0;
const total = items.lenght
let timer;
let tela = 0;

function update(direction){
    //clearInterval(timer)
    document.querySelector('.item.active').classList.remove('active')
    if(tela == 0)
    {
        tela = 1
        active = 1
    }
    else{
        tela = 0
        active = 0
    }
    items[active].classList.add('active')
}

prevButton.addEventListener('click',function(){
    update(-1)
})


nextButton.addEventListener('click',function(){
    update(1)
})

saibaButton.addEventListener('click',function(){
    
})

//clearInterval(timer)
timer = setInterval( ()=> {
    update(1);
}, 5000)

