const body = document.querySelector("body")
const choices_container = document.querySelector("div.choices")

const rock_option = document.querySelector("img#rock")
const paper_option = document.querySelector("img#paper")
const scissor_option = document.querySelector("img#scissor")

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
                    return 'lose'
                case "scissor":
                    return 'win'
            }
        case "paper":
            switch(computer_choice){
                case "rock":
                    return 'win'
                case "scissor":
                    return 'lose'
            }
        case "scissor":
            switch(computer_choice){
                case "paper":
                    return 'win'
                case "rock":
                    return 'lose'
            }
    }
}

rock_option.addEventListener('click', () => {
    console.log(game('rock'))
    
})

paper_option.addEventListener('click', () => {
    console.log(game('paper'))
})

scissor_option.addEventListener('click', () => {
    console.log(game('scissor'))
})

