const sub = document.querySelectorAll('.sub')
const sub_bg = document.querySelector('.sub_bg')
const nav = document.querySelector('nav')

sub_bg.style.height = '0';
sub_bg.style.transition = 'height 0.3s';
for(let i of sub){
    i.style.height = '0';
    i.style.overflow = 'hidden';
    i.style.transition = 'height 0.3s';
}

nav.addEventListener('mouseover',()=>{
    sub_bg.style.height = '220px';
    for(let i of sub){
        i.style.height = '220px';
    }
})
nav.addEventListener('mouseout',()=>{
    sub_bg.style.height = '0';
    for(let i of sub){
        i.style.height = '0';
    }
})