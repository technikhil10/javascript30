const hero = document.querySelector('.hero')

const text = hero.querySelector('h1')

//Here walk variable is to create offset of 100 i.e shadow offset how much far it would go depends on this
const walk = 100;

const textShadow =  function(e){

    const {offsetWidth: width, offsetHeight: height} = hero

    let {offsetX : x, offsetY: y} = e

    if(this !== e.target)
    {
        x = x + e.target.offsetLeft
        y = y + e.target.offsetTop
    }

    //Below we create xWalk and yWalk to set the mouse pointer 
    //value between -50 to +50 which is overall offset of 100

    const xWalk = Math.round((x/width*walk) - (walk/2))
    const yWalk = Math.round((y/width*walk) - (walk/2))


    //here we set the text-shadow depending on xWalk and yWalk
    text.style.textShadow = `
        ${xWalk}px ${yWalk}px 5px #f2a68f,
        ${xWalk * -1}px ${yWalk * -1}px 5px #fa75cc
        
    ` 
}

//add listeners
hero.addEventListener('mousemove',textShadow)