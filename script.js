// Quiz questions array
const questions = [
    {
        question: "What is a major cause of air pollution?",
        options: ["Factories", "Wind turbines", "Recycling plants", "Forests"],
        answer: "Factories"
    },
    {
        question: "Which of the following is a renewable source of energy?",
        options: ["Coal", "Solar energy", "Natural gas", "Nuclear energy"],
        answer: "Solar energy"
    },
    {
        question: "Which is the largest contributor to deforestation?",
        options: ["Logging", "Mining", "Agricultural expansion", "Tourism"],
        answer: "Agricultural expansion"
    },
    {
        question: "What is the greenhouse effect?",
        options: ["Absorption of heat by the atmosphere", "Loss of heat in space", "Pollution of the oceans", "Increase in solar radiation"],
        answer: "Absorption of heat by the atmosphere"
    },
    {
        question: "Which of the following gases is a major contributor to global warming?",
        options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        answer: "Carbon dioxide"
    }
];

let currentQuestionIndex = 0;

// Function to start the quiz
function startQuiz() {
    document.getElementById("quiz-section").style.display = "block";
    loadQuestion(currentQuestionIndex);
}

// Function to load a question
function loadQuestion(index) {
    const questionContainer = document.getElementById("question-container");
    const buttonsContainer = document.getElementById("quiz-buttons");
    const question = questions[index];

    questionContainer.innerHTML = `<p>${question.question}</p>`;
    buttonsContainer.innerHTML = question.options.map(option => 
        `<button onclick="answerQuiz('${option}')">${option}</button>`
    ).join("");
}

// Function to handle user's answer
function answerQuiz(answer) {
    const resultText = (answer === questions[currentQuestionIndex].answer)
        ? "Correct! " + questions[currentQuestionIndex].answer + " is a major contributor."
        : "Incorrect. The correct answer is: " + questions[currentQuestionIndex].answer;
    
    document.getElementById("quiz-result").innerText = resultText;
    
    // Move to next question after a short delay
    setTimeout(function() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadQuestion(currentQuestionIndex);
            document.getElementById("quiz-result").innerText = '';
        } else {
            document.getElementById("quiz-result").innerText += " You've completed the quiz!";
            document.getElementById("quiz-buttons").innerHTML = '';  // Hide buttons after the quiz is complete
        }
    }, 1000);  // 1 second delay before loading the next question
}
