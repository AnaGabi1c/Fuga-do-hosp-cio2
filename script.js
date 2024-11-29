// script.js
const storyElement = document.getElementById("story");
const choice1Button = document.getElementById("choice1");
const choice2Button = document.getElementById("choice2");

// Etapas da história
const storySteps = [
    {
        text: "Você acorda em um quarto escuro de hospital. A porta está destrancada e há uma janela aberta. O que você faz?",
        choices: ["Sair pela porta", "Sair pela janela"],
        next: [1, 2]
    },
    {
        text: "Você sai pela porta e encontra um corredor silencioso. Ao final, vê uma escada que desce e um elevador. Para onde vai?",
        choices: ["Descer pela escada", "Usar o elevador"],
        next: [3, 4]
    },
    {
        text: "Você pula pela janela e cai em um jardim cercado. Há uma cerca alta e um portão. O que fazer?",
        choices: ["Subir a cerca", "Procurar a chave do portão"],
        next: [5, 6]
    },
    {
        text: "Você desce pela escada e encontra a saída do hospital. Parabéns, você conseguiu fugir!",
        choices: ["Recomeçar", "Sair"],
        next: [0, null]
    },
    {
        text: "O elevador fica preso entre os andares. Você está encurralado. Fim de jogo!",
        choices: ["Recomeçar", "Sair"],
        next: [0, null]
    },
    {
        text: "Você escala a cerca, mas é avistado por seguranças e capturado. Fim de jogo!",
        choices: ["Recomeçar", "Sair"],
        next: [0, null]
    },
    {
        text: "Você encontra a chave do portão, abre-o e corre para a liberdade. Parabéns, você conseguiu fugir!",
        choices: ["Recomeçar", "Sair"],
        next: [0, null]
    }
];

// Variável para controlar o estado atual da história
let currentStep = 0;

// Função para atualizar a história
function updateStory(step) {
    currentStep = step;
    const story = storySteps[step];
    storyElement.textContent = story.text;

    choice1Button.textContent = story.choices[0];
    choice2Button.textContent = story.choices[1];

    // Esconder os botões se for o fim
    choice1Button.style.display = story.next[0] !== null ? "inline-block" : "none";
    choice2Button.style.display = story.next[1] !== null ? "inline-block" : "none";
}

// Event listeners para os botões
choice1Button.addEventListener("click", () => {
    updateStory(storySteps[currentStep].next[0]);
});

choice2Button.addEventListener("click", () => {
    updateStory(storySteps[currentStep].next[1]);
});

// Inicializar a história
updateStory(currentStep);