// Medidor do Amor
const range = document.getElementById("amorRange");
const resultado = document.getElementById("resultadoAmor");
const mensagemAmor = document.getElementById("mensagemAmor");

if (range && resultado && mensagemAmor) {
  range.addEventListener("input", () => {
    resultado.textContent = `${range.value}% de amor`;
    if (range.value == "100") {
      mensagemAmor.textContent = "EU TE AMO MUUUUITO! 💘💘💘";
    } else {
      mensagemAmor.textContent = "";
    }
  });
}

// Quiz "Quem é mais?"
const perguntasQuem = [
  "Quem dorme mais?",
  "Quem sente mais ciúmes?",
  "Quem é mais engraçado?",
  "Quem tem mais fome?",
  "Quem é mais preguiçoso?",
  "Quem manda mais mensagem?",
  "Quem é mais carinhoso?",
  "Quem se atrasa mais?",
  "Quem faz mais drama? 😅"
];

let perguntaIndex = 0;

function mostrarPerguntaQuem() {
  const pergunta = perguntasQuem[perguntaIndex];
  const perguntaEl = document.getElementById("perguntaQuem");
  if (perguntaEl) {
    perguntaEl.textContent = pergunta;
  }
}

function responderQuem(resposta) {
  const perguntaAtual = perguntasQuem[perguntaIndex];
  const perguntaEl = document.getElementById("perguntaQuem");
  const mensagemQuemAmaMais = document.getElementById("mensagemQuemAmaMais");

  // Limpa mensagem antiga
  if (mensagemQuemAmaMais) {
    mensagemQuemAmaMais.textContent = "";
  }

  if (perguntaAtual.includes("Quem ama mais") && resposta === "Jota") {
    // Exibe mensagem especial na div exclusiva (fora do quiz)
    if (mensagemQuemAmaMais) {
      mensagemQuemAmaMais.textContent = "Eu sei, eu sei, eu te amo bem mais 💘";
    }
  }

  perguntaIndex = (perguntaIndex + 1) % perguntasQuem.length;

  // Atualiza a pergunta após 1.5 segundos e limpa mensagem
  setTimeout(() => {
    mostrarPerguntaQuem();
    if (mensagemQuemAmaMais) {
      mensagemQuemAmaMais.textContent = "";
    }
  },);
}


// Botão Layla correndo
const btnLayla = document.getElementById("btn-layla");
if (btnLayla) {
  btnLayla.addEventListener("mouseover", () => {
    const maxX = 300;
    const maxY = 100;
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    btnLayla.style.left = `${x}px`;
    btnLayla.style.top = `${y}px`;
  });
}


// Roleta do Amor
function girarRoleta() {
  const opcoes = [
    "Me manda um beijo agoraa",
    "Eu te amo muito minha gatinha",
    "Como vc consegue ser tão incrivel assim?",
    "Eu tenho um orgulho enorme de vc",
    "Obrigado por ser essa pessoa tão incrivel",
    "Eu te amo muito muito muito",
    "Como é ser a mulher mais linda desse mundo?",
    "Me pego pensando em vc toda hora",
  ];
  const sorteio = opcoes[Math.floor(Math.random() * opcoes.length)];
  document.getElementById("resultadoRoleta").textContent = sorteio;
}

// Resposta específica para "Quem ama mais?"
const btnJota = document.getElementById("btn-jota");
const mensagemQuemAmaMais = document.getElementById("mensagemQuemAmaMais");

if (btnJota && mensagemQuemAmaMais) {
  btnJota.addEventListener("click", () => {
    mensagemQuemAmaMais.textContent = "Eu sei, eu sei, eu te amo bem mais 💘";
    
    // Some a mensagem depois de 2 segundos, se quiser
    setTimeout(() => {
      mensagemQuemAmaMais.textContent = "";
    },);
  });
}

function girarRoletaRomantica() {
  const opcoes = [
    // Filmes românticos
    "Para Todos os Garotos que Já Amei 💌 (Netflix)",
    "Simplesmente Acontece 💕",
    "Como Eu Era Antes de Você 😢",
    "Diário de uma Paixão 💖",
    "Um Amor para Recordar 🌙",
    "A Barraca do Beijo 😘",
    "Me Chame Pelo Seu Nome 🌞",
    "A Cinco Passos de Você 🥺",
    "Questão de Tempo ⏳❤️",

    // Animes românticos
    "Your Name (Kimi no Na wa) ✨",
    "A Voz do Silêncio (Koe no Katachi) 💬",
    "Clannad: After Story 😭",
    "Toradora! 🐯",
    "Horimiya 💑",
    "Fruits Basket 🍎",
    "Kimi ni Todoke 💌",
    "Tonikaku Kawaii (Fly Me to the Moon) 🚀💗",
    "I Want to Eat Your Pancreas 😭",
    "My Dress-Up Darling 👗💞"
  ];

  const sorteio = opcoes[Math.floor(Math.random() * opcoes.length)];
  document.getElementById("resultadoRoletaRomantica").textContent = sorteio;
}

function enviarTextinho() {
  const campoTexto = document.getElementById("textoMensagem");
  const mural = document.getElementById("muralTextinhos");

  if (campoTexto.value.trim() !== "") {
    const novaMensagem = document.createElement("p");
    novaMensagem.textContent = "💖 " + campoTexto.value;
    novaMensagem.style.background = "#ffe0f0";
    novaMensagem.style.padding = "10px";
    novaMensagem.style.borderRadius = "10px";
    novaMensagem.style.marginBottom = "8px";
    novaMensagem.style.boxShadow = "0 0 5px #ff99cc";
    
    mural.prepend(novaMensagem); // coloca no topo
    campoTexto.value = "";
  }
}

const botaoMusica = document.getElementById("botaoMusica");
const musicaFundo = document.getElementById("musicaFundo");
const volumeMusica = document.getElementById("volumeMusica");

musicaFundo.volume = volumeMusica.value;

botaoMusica.addEventListener("click", () => {
  if (musicaFundo.muted) {
    musicaFundo.muted = false;
    musicaFundo.play();
    botaoMusica.textContent = "🔇 Pausar música";
  } else {
    musicaFundo.muted = true;
    musicaFundo.pause();
    botaoMusica.textContent = "🔈 Ouvir música de fundo";
  }
});

volumeMusica.addEventListener("input", () => {
  musicaFundo.volume = volumeMusica.value;
});





