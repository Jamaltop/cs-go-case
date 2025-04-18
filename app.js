const wheel = document.querySelector('.wheel');
const btn = document.querySelector('.btn');
const pItem = document.querySelector('#price-item');
const pRes = document.querySelector('#price-result');
const notif = document.querySelector('.salam');
let arr = [
    {
        name:'Knife',
        src:'/assets/item-1.png'
    },
    {
        name:'Gold Knife',
        src:'/assets/item-2.png'
    },
    {
        name:'Secret Knife',
        src:'/assets/item-3.png'
    },
    {
        name:'AUG',
        src:'/assets/item-4.png'
    },
    {
        name:'AWP CLASSIC',
        src:'/assets/item-5.png'
    },
    {
        name:'Kerambit',
        src:'/assets/item-6.png'
    },
    {
        name:'P90',
        src:'/assets/item-7.png'
    },
    {
        name:'AWP BOLT',
        src:'/assets/item-8.png'
    }
]
let isSpin = false;
arr.reverse();


function spin (){
    
    if(isSpin){
        return;
    }
    else{
    
       
        isSpin = true;
        let randomPrise = Math.floor(Math.random()*7);
        let audio = new Audio('sound/spin.mp3');
    let timeout = setTimeout(() => {
        isSpin = false
        wheel.style.transition = 'none';
        wheel.style.transform = ` perspective(1000px)`;
    },9000)
        audio.play();
        setTimeout(() => {
            audio.pause();
        },8000)
        wheel.style.transition = 'all 8s ease';
        wheel.style.transform = ` perspective(1000px) rotateY( ${1080 + randomPrise * 45}deg)`;
        setTimeout(() => {
            notif.textContent = `YOU WIN ${arr[randomPrise].name}`;
            pRes.style.display = 'flex';
            pItem.src = arr[randomPrise].src
        },9000)
    }
    
   
    
}
pRes.addEventListener('click', () => {
    pRes.style.display = 'none';
    pItem.style.display = 'none';
})
btn.addEventListener('click', spin);