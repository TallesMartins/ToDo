let button_txt = document.querySelector('.btn_txt')
var btn = document.querySelector('.do_txt')
var cards = document.querySelector('.aba_todo')
//1° aba
let input_txt = document.querySelector('#inputCardToDo')
let first = document.querySelector('.fst')
let button_add = document.querySelector('#btnAddToDo')
//2° aba
let input_txt2 = document.querySelector('#inputCardOngoing')
let second = document.querySelector('.snd')
let btn_add2 = document.getElementById('btnAddOngoing')
//3° aba
let input_txt3 = document.querySelector('#inputCardDone')
let third = document.querySelector('.trd')
let btn_add3 = document.getElementById('btnAddDone')

var tasksToDo = []
var taskOngoing = []
var tasksCompleted = []

button_add.onclick = function(){
    AdicionarAbas(first, input_txt.value,tasksToDo)
} 

btn_add2.onclick = function(){   
    AdicionarAbas(second, input_txt2.value,taskOngoing)
} 

btn_add3.onclick = function(){   
    AdicionarAbas(third, input_txt3.value,tasksCompleted)
} 
function AdicionarAbas(aba, input_aba, list){
    if(input_aba != "" && list.length != 9){
        let aba_todo =  document.createElement("div")
        let button = document.createElement("button")
        let icon = document.createElement('i')
        let edit = document.createElement("button")
        let buttons = document.createElement("div")

        aba_todo.setAttribute('class','tarefa')
        button.setAttribute('class','buttonDelete')
        icon.setAttribute('class','bx')
        icon.setAttribute('class', 'bxs-plus-circle')
        edit.setAttribute('class', 'edit')
        buttons.setAttribute('class','buttons')
        
        aba_todo.style.background = 'var(--branco)'
        aba_todo.style.maxWidth = '100%'
        aba_todo.style.width = '280px'
        aba_todo.style.color = '#000'
        aba_todo.style.borderRadius = '6px'
        aba_todo.style.maxHeight = '100%'
        aba_todo.style.display = 'flex'
        aba_todo.style.flexDirection = 'row'
        aba_todo.style.alignItems = 'center'
        aba_todo.style.justifyContent = 'space-between'
        aba_todo.style.padding = '6px'
        aba_todo.style.textAlign = 'center'
        aba_todo.style.position = 'relative'
        aba_todo.style.margin = '5px'
        aba_todo.style.pointerEvents = 'auto'
        aba_todo.style.transition = 'all 0.5s ease'
        aba_todo.style.textDecoration = 'none'

        buttons.style.maxWidth = '100%'
        buttons.style.padding = '2px'
        buttons.style.position ='relative'
        buttons.style.border = 'none'
        buttons.style.justifyContent = 'space-between'
        buttons.style.flexDirection = 'row'

        edit.style.maxWidth = '100%'
        edit.style.marginRight = '5px'
        edit.style.padding = '5px'
        edit.style.fontSize = '8px'
        edit.style.color = 'var(--branco)'
        edit.style.position = 'relative'
        edit.style.textAlign = 'center'
        edit.style.right = '5px'   
        edit.style.border = 'none'
        edit.style.backgroundColor = 'var(--back)'  
        edit.style.borderRadius = '6px'
        edit.style.transition = 'all 0.5s ease'

        button.style.maxWidth = '100%'
        button.style.padding = '5px'
        button.style.fontSize = '8px'
        button.style.color = 'var(--branco)'
        button.style.position = 'relative'
        button.style.textAlign = 'center'
        button.style.right = '5px'   
        button.style.border = 'none'
        button.style.backgroundColor = 'var(--back)'  
        button.style.borderRadius = '6px'
        button.style.transition = 'all 0.5s ease'

        button.onmouseover = function (){
            button.style.color = 'var(--back)'
            button.style.background = 'var(--branco)'
        }

        button.onmouseout = function(){
            button.style.background = 'var(--back)'
            button.style.color = 'var(--branco)'
        }

        button.onclick = function(){
            aba_todo.remove()
            list.pop(aba_todo)
        }

        edit.onmouseover = function (){
            edit.style.color = 'var(--back)'
            edit.style.background = 'var(--branco)'
        }

        edit.onmouseout = function(){
            edit.style.background = 'var(--back)'
            edit.style.color = 'var(--branco)'
        }

        edit.onclick = function(){
            aba_todo.innerHTML = ''
            let inputTemp = document.createElement('input')
            inputTemp.placeholder = 'Digite aqui'
            aba_todo.appendChild(inputTemp)
            let buttonTemp = document.createElement('button')
            buttonTemp.innerText = 'Ok'
            buttonTemp.style.maxWidth = 'fit-content'
            buttonTemp.style.padding = '5px'
            buttonTemp.style.fontSize = '12px'
            buttonTemp.style.color = 'var(--branco)'
            buttonTemp.style.position = 'relative'
            buttonTemp.style.textAlign = 'center'
            buttonTemp.style.right = '5px'   
            buttonTemp.style.border = 'none'
            buttonTemp.style.backgroundColor = '#165'  
            buttonTemp.style.borderRadius = '6px'
            
            aba_todo.appendChild(buttonTemp)
            
            
            buttonTemp.onclick = function (){
                if(inputTemp.value != '' && inputTemp.value != null){
                    aba_todo.innerHTML = `${inputTemp.value}`
                    buttons.appendChild(edit)
                    buttons.appendChild(button)  
                    aba_todo.appendChild(buttons)
                }else{ 
                    alert('[ERRO]Campo de edição vazio')
                }
                
            }
        }

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
        
        
        list.push(aba_todo)
        aba.appendChild(aba_todo)
        aba_todo.innerHTML = `${input_aba}` 
        button.innerHTML = 'X'
        edit.innerHTML = 'E'
        buttons.appendChild(edit)
        buttons.appendChild(button)
        aba_todo.appendChild(buttons)
    
    }else if(list.length == 9){
        alert('Somente 9 cards são suportados, delete um card para adicionar mais')
        throw new Error("Verifique as informações adicionadas")
    } 
    
}

    