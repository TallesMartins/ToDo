const coluna = document.querySelectorAll('.abaContent')
//1° aba
const input_txt = document.querySelector('#inputCardToDo')
const first = document.querySelector('#fst')
const button_add = document.querySelector('#btnAddToDo')
//2° aba
const input_txt2 = document.querySelector('#inputCardOngoing')
const second = document.querySelector('#snd')
const btn_add2 = document.getElementById('btnAddOngoing')
//3° aba
const input_txt3 = document.querySelector('#inputCardDone')
const third = document.querySelector('#trd')
const btn_add3 = document.getElementById('btnAddDone')

const titleOne = document.getElementById('titleOne')
const titleTwo = document.getElementById('titleTwo')
const titleThree = document.getElementById('titleThree')

var listas = {
    tasksToDo: [],
    taskOngoing: [],
    tasksCompleted: []
}

function contador(lista,title, texto){
    title.innerText = `${texto}:${lista.length}`
}
/*--------Adicionar Tarefas---------*/
button_add.onclick = function(){
    AdicionarAbas(first, input_txt.value,listas.tasksToDo)
    contador(listas.tasksToDo,titleOne, "Não iniciado")
    input_txt.value = ""
} 

btn_add2.onclick = function(){   
    AdicionarAbas(second, input_txt2.value,listas.taskOngoing)
    contador(listas.taskOngoing, titleTwo, "Em Progresso")
    input_txt2.value = ""
} 

btn_add3.onclick = function(){   
    AdicionarAbas(third, input_txt3.value,listas.tasksCompleted)
    contador(listas.tasksCompleted, titleThree, "Concluído")
    input_txt3.value = ""
} 

function AdicionarAbas(aba, input_aba, list){
    if(input_aba != "" && list.length != 9){
        criarTarefa()
    }else if(list.length == 9){
        alert('Somente 9 cards são suportados, delete um card para adicionar mais')
    } 
    function criarTarefa(){
        let aba_todo =  document.createElement("div")
        let button = document.createElement("button")
        let edit = document.createElement("button")
        let buttonsContainer = document.createElement("div")


        aba_todo.setAttribute('class','tarefa')
        aba_todo.setAttribute('draggable','true')

        button.setAttribute('class','edit')
        edit.setAttribute('class', 'edit')
        buttonsContainer.setAttribute('class','buttonsContainer')

        button.onclick = function(){
            aba_todo.remove()
            list.pop(aba_todo)
        }

        edit.onclick = function(){
            aba_todo.innerHTML = ''
            let inputTemp = document.createElement('input')
            inputTemp.setAttribute('class', 'inputTemp')
            inputTemp.placeholder = 'Digite aqui'
            aba_todo.appendChild(inputTemp)

            let buttonTemp = document.createElement('button')
            buttonTemp.setAttribute('class', 'buttonTemp')
            buttonTemp.innerText = 'Ok'

            aba_todo.appendChild(buttonTemp)
            
            
            buttonTemp.onclick = function (){
                if(inputTemp.value != '' && inputTemp.value != null){
                    aba_todo.innerHTML = `${inputTemp.value}`
                    buttonsContainer.appendChild(edit)
                    buttonsContainer.appendChild(button)  
                    aba_todo.appendChild(buttonsContainer)
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
        

        
        
        list.push(aba_todo)
        aba.appendChild(aba_todo)
        aba_todo.innerHTML = `${input_aba}` 
        button.innerHTML = 'X'
        edit.innerHTML = 'E'
        buttonsContainer.appendChild(edit)
        buttonsContainer.appendChild(button)
        aba_todo.appendChild(buttonsContainer)
    
    }
}

/*Drag and Drop*/ 

document.addEventListener('dragstart', (e)=>{
    e.target.classList.add('dragging');
})
document.addEventListener('dragend', (e)=>{
    e.target.classList.remove('dragging');
})
coluna.forEach((item)=>{
    item.addEventListener('dragover',(e)=>{
        const dragging = document.querySelector('.dragging');
        const applyAfter = getNewPosition(item, e.clientY)
    
        if(applyAfter){
            applyAfter.insertAdjacentElement("afterend", dragging)
        } else {
            item.prepend(dragging)
        }
    });
});

function getNewPosition(coluna, posY){
    const cards = coluna.querySelectorAll(".item:not(.dragging)")
    let result;

    for (let refer_card of cards){
        const box = refer_card.getBoundingClientRect();
        const boxCenterY = box.y + box.height / 2;
        if(posY >= boxCenterY) result = refer_card 
    }
    return result;
}
