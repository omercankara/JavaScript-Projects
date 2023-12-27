const todos = [
        { title: "Baslik", Description: "Aciklama" }
]

let todoEl = document.getElementById('todo')

function todoList() {
        setTimeout(() => {
                let todoİtems = ""
                todos.forEach(element => {
                        todoİtems +=
                                `
                                <li><b>${element.title}</b></li>
                                <li><p>${element.Description}</p></li>
                        
                        `
                        todoEl.innerHTML = todoİtems
                })
        }, 1500)
}


function newTodo(todo) {
        return new Promise((resolve, reject) => {
                setTimeout(() => {
                        todos.push(todo)
                        const e = false
                        if (!e) {
                                resolve(todo)
                        } else {
                                reject("Hata var")
                        }
                }, 2000)
        })

}


newTodo({
        title: "Can",
        Description: "Aciklama"
}).then(response => {  //işlem başarılı ise then ile yeni datayı yakala
        console.log(response)
        todoList()
}).catch(e => {
        console.log(e)
})

todoList()

