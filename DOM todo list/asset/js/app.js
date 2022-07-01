const button = document.querySelector('button')
const input = document.querySelector('input#todo_input')
const list = document.querySelector('ol')

input.addEventListener('keydown', (e) => {
    const key = e.key
    if (key === 'Enter'){
        handleadd()
    }
})

const handleadd = (e) => {
    const textToAdd = input.value

    if (textToAdd.length > 0)
    {
        const ele = document.createElement('li')
        const textnode = document.createTextNode(textToAdd)

        ele.appendChild(textnode)
        list.appendChild(ele)

        // creating a dynamic button to delete task
        const button = document.createElement('button')
        button.innerHTML = 'Delete'
        ele.appendChild(button)

        button.addEventListener('click', (e) => {
            ele.remove()
        })
        
    }
    else 
    {
        window.alert('Enter Task then click add')
    }
    


}

button.addEventListener('click', handleadd)