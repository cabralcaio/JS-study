/*
*Métodos de recuperação de elementos HTML
*/
// recupera elementos HTML a partir do nome da TAG
//const todoForm = document.getElementsByTagName('form')[0]
const todoForm = document.getElementById('todo-form')
const todos = []

/*
* addEventListener serve para ouvir eventos de elementos
* HTML sempre que forem emitidos
*/

todoForm.addEventListener('submit', function (evento) {
    /*
    * cancela o comportamento padrão de um formulario
    * que seira o recarregamento da página tentando fazer seu envio
    */
    evento.preventDefault()
    /*
    * cancela a propagação do evento que foi emitido para os elementos pai,
    * evitando que outros eventos sejam emitidos
    */
    evento.stopPropagation()
    /* 
    * a querySelector recupera o primeiro elemento que atenda
    * a um seletor css informado
    */
    const todoInput = document.querySelector('#todo')
    /*
    *a propriedade value é uma propriedade que represnta o atributo value
    * dos elementos de formulários do HTML, para acessarmos o valor que está dentro
    * deles
    */
    todos.push(todoInput.value)
    todoInput.value = ''
    renderizarTodos()

})

function renderizarTodos () {
    const todosListSection = document.querySelector('#todos-list')
    todosListSection.innerHTML = ""

    for (let tarefa of todos) {
        /*
        * creatElement é o método responsável por gera novos elementoa
        * HTML dentro do Javascript a partir do nome das TAGs
        */
        const divCard = document.createElement('div')
        divCard.classList.add('card')

        const divCardBody = document.createElement('div')
        divCardBody.classList.add('card-body', 'd-flex',  'align-items-center')

        const pTodoText = document.createElement('p')
        pTodoText.classList.add('todo-text', 'flex-grow-1', 'text-truncate')
        /*
        * innerText é a propriedade que informa qual o conteudo de texto que está dentro de um
        * elemento HTML
        */
        pTodoText.innerText = tarefa

        const btnDelete = document.createElement ('button')
        btnDelete.classList.add('btn', 'delete-todo')
        //Arrow functions sempre são anônimas
        btnDelete.addEventListener("click", () => {
            const index = todos.indexOf(tarefa)
            todos.splice(index, 1)
            renderizarTodos()
        })

        const spanIcon = document.createElement('span')
        spanIcon.classList.add('material-symbols-outlined')
        spanIcon.innerText = 'delete'

        /*
        * appendChild serve para colocar novos elementos HTML dentro de outros
        */
        btnDelete.appendChild(spanIcon)
        /*
        *append serve para colocar um ou mais elementos HTML dentro do texto
        */
        divCardBody.append(pTodoText, btnDelete)
        divCard.appendChild(divCardBody)
        todosListSection.appendChild(divCard)
    }
}