const quizData = [
  {
    question: 'O que significa a sigla PEPS?',
    options: [
      'Primeiro que Entra, Primeiro que Sai',
      'Produto Especial para Supermercados',
      'Programa de Eficiência em Processos'
    ],
    correct: '0'
  },
  {
    question: 'Qual é o objetivo principal do PEPS?',
    options: [
      'Reduzir o tempo de exposição dos produtos',
      'Garantir que os itens mais antigos sejam vendidos primeiro',
      'Aumentar o preço dos produtos frescos'
    ],
    correct: '1'
  },
  {
    question: 'Qual destas ações ajuda a manter a qualidade dos vegetais?',
    options: [
      'Misturar produtos novos com antigos sem critério',
      'Controlar a temperatura e umidade de armazenamento',
      'Expor tudo ao sol para ter mais cor'
    ],
    correct: '1'
  }
];

function renderQuiz() {
  const container = document.getElementById('quiz');
  if (!container) return;

  quizData.forEach((q, idx) => {
    const block = document.createElement('div');
    block.className = 'mb-6';

    const title = document.createElement('p');
    title.className = 'font-semibold';
    title.textContent = `${idx + 1}. ${q.question}`;
    block.appendChild(title);

    q.options.forEach((opt, i) => {
      const label = document.createElement('label');
      label.className = 'flex items-center gap-2 my-1';
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = `q${idx}`;
      input.value = i.toString();
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      block.appendChild(label);
    });

    container.appendChild(block);
  });
}

function evaluateQuiz(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  let correct = 0;

  quizData.forEach((q, idx) => {
    if (formData.get(`q${idx}`) === q.correct) correct++;
  });

  const result = document.getElementById('quiz-result');
  const score = correct / quizData.length;
  if (score >= 0.7) {
    addXP(20);
    result.textContent = `Parabéns! Você acertou ${correct} de ${quizData.length} perguntas.`;
  } else {
    result.textContent = `Você acertou ${correct} de ${quizData.length}. Tente novamente.`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  renderQuiz();
  const form = document.getElementById('quiz-form');
  if (form) form.addEventListener('submit', evaluateQuiz);
});
