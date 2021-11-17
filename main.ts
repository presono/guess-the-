info.setScore(20)
let number = randint(1, 100)
let guess = game.askForNumber("")
while (number != guess) {
    if (guess < number) {
        info.changeScoreBy(-1)
        game.splash("Higher")
        guess = game.askForNumber("")
    } else if (guess > number) {
        info.changeScoreBy(-1)
        game.splash("Lower")
        guess = game.askForNumber("")
    }
}
if (guess == number) {
    game.over(true, effects.confetti)
}
