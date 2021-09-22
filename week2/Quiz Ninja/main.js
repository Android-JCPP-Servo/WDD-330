// Chapter 1 Exercise
alert('Welcome to Quiz Ninja!');

/*
// Chapter 2 Exercise
const question = "What is Superman's real name?"
const answer = prompt(question);
alert(`You answered ${answer}`);
*/

// Chapter 3 Exercise
const quiz = [
    ["What is Superman's real name?","Clark Kent"],
    ["What is Wonder Woman's real name?","Diana Prince"],
    ["What is Batman's real name?","Bruce Wayne"]
];

for (const [question,answer] of quiz) {
    const response = prompt(question);
    // response === answer ? (alert('Correct!'), score++) : alert(`Wrong! The correct answer was ${answer}`);
    if (response === answer) {
        alert('Correct!');
        score++;
    } else {
        alert(`Wrong! The correct answer was ${answer}`);
    }
}

// At the end of the game, report the player's score
alert(`Game Over, you scored ${score} point${score !== 1 ? 's' : ''}`);