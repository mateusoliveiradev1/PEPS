// Carrega modulos de treinamento a partir do arquivo JSON
async function carregarTreinamentos() {
  try {
    const resposta = await fetch('data/treinamentos.json');
    const modulos = await resposta.json();
    const container = document.getElementById('treinamento-list');
    if (!container) return;

    modulos.forEach((mod) => {
      const bloco = document.createElement('div');
      bloco.className =
        'p-6 rounded-xl shadow-md border border-gray-300 dark:border-green-600 bg-white/70 dark:bg-green-900/80 backdrop-blur-sm text-gray-800 dark:text-gray-100 transition-all';
      bloco.innerHTML = `
        <h2 class="text-2xl font-bold text-green-700 border-b border-green-400 pb-2 mb-4">${mod.titulo}</h2>
        <p class="mb-4">${mod.descricao}</p>
        <a href="${mod.link}" target="_blank" class="text-green-700 underline">Acessar material</a>
        <div class="mt-4">
          <button onclick="completeLesson('${mod.titulo}', 50)" class="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-full shadow-md transition-all">
            Concluir Módulo
          </button>
        </div>
      `;
      container.appendChild(bloco);
    });
  } catch (e) {
    console.error('Erro ao carregar treinamentos', e);
  }
}

document.addEventListener('DOMContentLoaded', carregarTreinamentos);
