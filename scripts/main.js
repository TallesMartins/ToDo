
let first = document.querySelector('.fst')
let button_add = document.querySelector('#btn_add1')
button_add.onclick = function(){
    
    stylediv(this)
} 
function stylediv(){
    let fst =  document.createElement("div")
    fst.setAttribute('class','card')
    fst.style.background = 'var(--branco)';
    fst.style.width = '280px'
    fst.style.color = '#000'
    fst.style.borderRadius = '6px'
    fst.style.maxHeight = '100%'
    fst.style.display ='flex'
    fst.style.flexDirection = 'column'
    fst.style.alignItems = 'center'
    fst.style.textAlign = 'center'
    fst.style.position = 'relative'
    fst.style.margin = '5px'
    fst.style.pointerEvents = 'auto'
    fst.style.transition = 'all 0.5s ease'
    fst.style.textDecoration = 'none'

    fst.onmouseover = function (){
        fst.style.color = 'var(--branco)'
        fst.style.background = 'var(--azule)'
    }

    fst.onmouseout = function(){
        fst.style.color = 'var(--preto)'
        fst.style.background = 'var(--branco)'
    }

    if(fst.style.textDecoration == 'line-through'){
        line()
    }else{
        line() 
    }

    fst.ondblclick = function(){
        fst.style.textDecoration = 'none'
    }

    function line(){
        fst.onclick = function(){
        fst.style.textDecoration = 'line-through'
        }
    }   

    first.appendChild(fst)

    let txt = document.querySelector('.do_txt').value
    fst.innerHTML = `${txt}` 
    
}

let second = document.querySelector('.snd')
let btn_add2 = document.getElementById('btn_add2')
btn_add2.onclick = function(){   
    stylediv2()
} 

function stylediv2(){
    let snd =  document.createElement("div")
    snd.setAttribute('class','card')
    snd.style.background = 'var(--branco)';
    snd.style.width = '280px'
    snd.style.color = '#000'
    snd.style.borderRadius = '6px'
    snd.style.maxHeight = '100%'
    snd.style.display ='flex'
    snd.style.flexDirection = 'column'
    snd.style.alignItems = 'center'
    snd.style.textAlign = 'center'
    snd.style.position = 'relative'
    snd.style.margin = '5px'
    snd.style.pointerEvents = 'auto'
    snd.style.transition = 'all 0.5s ease'
    snd.style.textDecoration = 'none'

    snd.onmouseover = function (){
        snd.style.color = 'var(--branco)'
        snd.style.background = 'var(--azule)'
    }

    snd.onmouseout = function(){
        snd.style.color = 'var(--preto)'
        snd.style.background = 'var(--branco)'
    }

    if(snd.style.textDecoration == 'line-through'){
        line()
    }else{
        line() 
    }

    snd.ondblclick = function(){
        snd.style.textDecoration = 'none'
    }

    function line(){
        snd.onclick = function(){
            snd.style.textDecoration = 'line-through'
        }
    }   
    second.appendChild(snd)
    let txt2 = document.querySelector('#do_txt2').value
    snd.innerHTML = `${txt2}` 
    console.log('text')
}

let third = document.querySelector('.trd')
let btn_add3 = document.getElementById('btn_add3')
btn_add3.onclick = function(){   
    stylediv3()
} 

function stylediv3(){
    let trd =  document.createElement("div")
    trd.setAttribute('class','card')
    trd.style.background = 'var(--branco)';
    trd.style.width = '280px'
    trd.style.color = '#000'
    trd.style.borderRadius = '6px'
    trd.style.maxHeight = '100%'
    trd.style.display ='flex'
    trd.style.flexDirection = 'column'
    trd.style.alignItems = 'center'
    trd.style.textAlign = 'center'
    trd.style.position = 'relative'
    trd.style.margin = '5px'
    trd.style.pointerEvents = 'auto'
    trd.style.transition = 'all 0.5s ease'
    trd.style.textDecoration = 'none'

    trd.onmouseover = function (){
        trd.style.color = 'var(--branco)'
        trd.style.background = 'var(--azule)'
    }

    trd.onmouseout = function(){
        trd.style.color = 'var(--preto)'
        trd.style.background = 'var(--branco)'
    }

    if(trd.style.textDecoration == 'line-through'){
        line()
    }else{
        line() 
    }

    trd.ondblclick = function(){
        trd.style.textDecoration = 'none'
    }

    function line(){
        trd.onclick = function(){
            trd.style.textDecoration = 'line-through'
        }
    }   
    third.appendChild(trd)
    let txt3 = document.querySelector('#do_txt3').value
    trd.innerHTML = `${txt3}` 
    console.log('text')
}


