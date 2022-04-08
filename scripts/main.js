let button_txt = document.querySelector('.btn_txt')
var btn = document.querySelector('.do_txt')
//1° aba
let input_txt = document.querySelector('#input_txt')
let first = document.querySelector('.fst')
let button_add = document.querySelector('#btn_add1')
//2° aba
let input_txt2 = document.querySelector('#input_txt2')
let second = document.querySelector('.snd')
let btn_add2 = document.getElementById('btn_add2')
//3° aba
let input_txt3 = document.querySelector('#input_txt3')
let third = document.querySelector('.trd')
let btn_add3 = document.getElementById('btn_add3')

button_add.onclick = function(){
    stylediv3(first, input_txt.value)
} 

btn_add2.onclick = function(){   
    stylediv3(second, input_txt2.value)
} 

btn_add3.onclick = function(){   
    stylediv3(third, input_txt3.value)
} 

function stylediv3(aba, input_aba){
    if(input_aba != "" && input_aba != null){
        let aba_todo =  document.createElement("div")
        aba_todo.setAttribute('class','card')
        aba_todo.style.background = 'var(--branco)';
        aba_todo.style.maxWidth = '100%'
        aba_todo.style.width = '280px'
        aba_todo.style.color = '#000'
        aba_todo.style.borderRadius = '6px'
        aba_todo.style.maxHeight = '100%'
        aba_todo.style.display ='flex'
        aba_todo.style.flexDirection = 'column'
        aba_todo.style.alignItems = 'center'
        aba_todo.style.textAlign = 'center'
        aba_todo.style.position = 'relative'
        aba_todo.style.margin = '5px'
        aba_todo.style.pointerEvents = 'auto'
        aba_todo.style.transition = 'all 0.5s ease'
        aba_todo.style.textDecoration = 'none'

        aba_todo.onmouseover = function (){
            aba_todo.style.color = 'var(--branco)'
            aba_todo.style.background = 'var(--azule)'
        }

        aba_todo.onmouseout = function(){
            aba_todo.style.color = 'var(--preto)'
            aba_todo.style.background = 'var(--branco)'
        }

        aba_todo.onclick = function(){
            if(aba_todo.style.textDecoration == 'line-through'){
                aba_todo.style.textDecoration = 'none'
            }else{
            aba_todo.style.textDecoration = 'line-through'
            }
        }

        aba.appendChild(aba_todo)
        aba_todo.innerHTML = `${input_aba}` 

    }else{
        alert("[ERRO] Insira o texto antes de confirmar a inserção")
    } 
    
}


