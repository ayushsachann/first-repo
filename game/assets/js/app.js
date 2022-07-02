const body = document.querySelector("body")
const choices_container = document.querySelector("div.choices")

const rock_option = document.querySelector("img#rock")
const paper_option = document.querySelector("img#paper")
const scissor_option = document.querySelector("img#scissor")
const result_container = document.querySelector(".result h1")

let user_score = 0
let computer_score = 0

const random = () => {
    const val = Math.floor(Math.random().toFixed(1) * 3)
    switch(val){
        case 0:
            return "rock"
        case 1:
            return "paper"
        case 2:
            return "scissor"
        default:
            return "paper"
    }
}


const game = (user_choice) => {
    const computer_choice = random()

    console.log(user_choice, computer_choice)

    if (user_choice === computer_choice) return 'tie'

    switch(user_choice){
        case "rock":
            switch(computer_choice){
                case "paper":
                    computer_score++
                    return 'Lost!! Paper beats Rock'
                case "scissor":
                    user_score++
                    return 'Win!! Rock beats Paper'
            }
        case "paper":
            switch(computer_choice){
                case "rock":
                    user_score++
                    return 'Win!! Paper beats Rock'
                case "scissor":
                    computer_score++
                    return 'Lost!! Scissor cuts Paper'
            }
        case "scissor":
            switch(computer_choice){
                case "paper":
                    user_score++
                    return 'Win!! Scissor cuts Paper'
                case "rock":
                    computer_score++
                    return 'Lost!! Rock beats Scissor'
            }
    }
}


const refreshboard = ()=>{
    const user = document.querySelector("#user")
    const comp = document.querySelector("#computer")
    
    user.innerHTML=user_score
    comp.innerHTML=computer_score
}
rock_option.addEventListener('click', (e) => {
    result_container.innerHTML = game('rock')
    refreshboard()
})

paper_option.addEventListener('click', (e) => {
    result_container.innerHTML = game('paper')
    refreshboard
})

scissor_option.addEventListener('click', (e) => {
    result_container.innerHTML = game('scissor')
    refreshboard()
})

