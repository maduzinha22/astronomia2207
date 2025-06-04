const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quantas cosntelações do zodiaaco existem?",
        alternativas: [
            {
                texto: "24",
                afirmacao: "errrado"
            },
            {
                texto: "10",
                afirmacao: "errado"
            },
            {
                 texto: "38",
                afirmacao: "errado"
            },
            {
                 texto: "13",
                afirmacao: "correto"
            }
           
        ]
    },
    {
        enunciado: "quem foi o primeiro homem a pisar na lua?",
        alternativas: [
            {
                texto: "Neil Armstrong",
                afirmacao: "corret"
            },
            {
                texto: "zeca pagodinho",
                afirmacao: "errado "
            },
            {
               texto: "luciano huck ",
                afirmacao: "errado "
            },
            {
                texto: "neymar",
                afirmacao: "errado"  
            }
        ]
    },
    {
        enunciado: "Qual é o planeta que tem um anel? ",
        alternativas: [
            {
                texto: "jupiter",
                afirmacao: "errado "
            },
            {
                texto: "Saturno",
                afirmacao: " certo "
            },
            {
                texto: "marte ",
                afirmacao: "errado "
            },
            {
                texto: "Thais Carla",
                afirmacao: "errado "
            }
        ]
    },
];
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "parabens voce tirou";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
