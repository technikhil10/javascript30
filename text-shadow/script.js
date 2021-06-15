const hero = document.querySelector('.hero')

const text = hero.querySelector('h1')
const walk = 100;

const textShadow =  function(e){

    const {offsetWidth: width, offsetHeight: height} = hero

    let {offsetX : x, offsetY: y} = e

    if(this !== e.target)
    {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }

    const xWalk = Math.round((x/width*walk) - (walk/2))
    const yWalk = Math.round((y/width*walk) - (walk/2))

    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 5px #f2a68f,
        ${xWalk * -1}px ${yWalk * -1}px 5px #fa75cc
        
    ` 

    console.log(xWalk,yWalk);





}

hero.addEventListener('mousemove',textShadow)