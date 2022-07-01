const button = document.querySelector('button')
const body = document.querySelector('body')

button.addEventListener('click', (e) => {
    
    //First approach
    // body.classList.add('dark')
    // if (body.classList.contains('dark'))
    // {
    //     body.classList.remove('dark')
    // }
    // else
    // {
    //     body.classList.add('dark')
    // }

    // toggle method
    body.classList.toggle('dark')
})