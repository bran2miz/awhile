let url ="https://www.theflouredkitchen.com/wp-content/uploads/2020/09/F85104F8-0729-436A-8C16-7EFACD5F4BEA.jpg"

function userFortuneTeller() {
    let correctAnswer = 17;
    console.log(correctAnswer)
    let userAttempts = 6;
    for (let i = 0; i < userAttempts; i++) {
        let userGuess = prompt('Fortune Teller: I Am Thinking of a Number Between 1-100. Please Enter Your Guess Should You Dare...');
        while (userGuess < 1 || userGuess > 100) {
            userGuess = prompt(' Fortune Teller: I am seeing that your number is not in the range. Please enter a number between 1-100');
        }

        if (userGuess == correctAnswer) {
            alert('Fortune Teller: Wait..ARE YOU A MIND READER?!! You got it right!');
            break;
        } else if (userGuess < correctAnswer) {
            alert('Fortune Teller: Hmm..no..too low..Would you like to try again?')
        } else if (userGuess > correctAnswer) {
            alert('Fortune Teller: Hmm..your number is too great.. Would you like to try again?')
        } else {
            alert('Fortune Teller: My senses are telling me that you did not enter a number between 1-100. Please try again.')
        }
    
        console.log(i);
        if (i == userAttempts - 1) {
            alert('Fortune Teller: I am sorry my dear but you did not answer correctly. The correct answer is ' + correctAnswer);
        }
    }
}

function pastaTravel(){
    let numberOfpastaTravel = prompt('How many times do you want to see a plate of spaghetti?!!')
    for(let i = 0; i < numberOfpastaTravel; i ++){
        document.write('<img src="' + url + '" >')
    }
}