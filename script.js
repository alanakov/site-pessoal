// ==========================================
// CONTROLE DO TEMA (CLARO / ESCURO)
// ==========================================

// Seleciona o botão de alternar tema e o corpo da página
const botaoTema = document.querySelector('#botao-tema');
const corpoDocumento = document.body;

// Atualiza o ícone do botão com base no modo atual
function atualizarIconeTema(estaNoModoEscuro) {
  const icone = botaoTema.querySelector('i');
  if (estaNoModoEscuro) {
    icone.classList.remove('fa-moon');
    icone.classList.add('fa-sun');
  } else {
    icone.classList.remove('fa-sun');
    icone.classList.add('fa-moon');
  }
}

// Salva a preferência de tema no navegador
function salvarPreferenciaTema(tema) {
  localStorage.setItem('tema-preferido', tema);
}

// Alterna entre o modo claro e o modo escuro
function alternarTema() {
  corpoDocumento.classList.toggle('modo-escuro');
  const estaNoModoEscuro = corpoDocumento.classList.contains('modo-escuro');
  
  atualizarIconeTema(estaNoModoEscuro);

  const temaEscolhido = estaNoModoEscuro ? 'escuro' : 'claro';
  salvarPreferenciaTema(temaEscolhido);
}

// Carrega o tema previamente salvo pelo usuário
function carregarTemaSalvo() {
  const temaSalvo = localStorage.getItem('tema-preferido');
  if (temaSalvo === 'escuro') {
    corpoDocumento.classList.add('modo-escuro');
    atualizarIconeTema(true);
  }
}

// Registra os eventos de clique ao iniciar
function configurarEventos() {
  if (botaoTema) {
    botaoTema.addEventListener('click', alternarTema);
  }
}

// Inicialização das funções
carregarTemaSalvo();
configurarEventos();
