
let score = 0;
let currentMode = '';
let correctOperator = '';

function setMode(mode) {
    score = 0;
    currentMode = mode;

    document.getElementById('skor').innerText = score;
    document.getElementById('menu').style.display = 'none';
    document.getElementById('game-area').style.display = 'block';
    document.getElementById('feedback').innerText = '';

    if (mode === 'easy') {
        document.getElementById('mode-title').innerText =
            'Επίπεδο εύκολο';
        generateEasy();
    }
    else if (mode === 'medium') {
        document.getElementById('mode-title').innerText =
            'Επίπεδο μέτριο';
        generateMedium();
    }
}

function back() {
    document.getElementById('game-area').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
    document.getElementById('feedback').innerText = '';
}

function generateEasy() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;

    let operators = ['+', '-'];

    correctOperator =
        operators[Math.floor(Math.random() * operators.length)];

    let res;

    if (correctOperator === '+') {
        res = a + b;
    }
    else {
        res = a - b;
    }

    document.getElementById('num1').innerText = a;
    document.getElementById('num2').innerText = b;
    document.getElementById('result').innerText = res;
}

function generateMedium() {
    generateEasy();
}

function checkAnswer(userChoice) {
    let feedback1 = document.getElementById('feedback');

    if (userChoice === correctOperator) {
        score++;
        feedback1.innerText = 'Σωστός';
    }
    else {
        score--;
        feedback1.innerText = 'Λάθος';
    }

    document.getElementById('skor').innerText = score;

    generateEasy();
}
