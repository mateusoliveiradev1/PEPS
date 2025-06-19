document.addEventListener('DOMContentLoaded', () => {
  const header = `
    <header class="fixed top-0 left-0 w-full z-50 bg-white/70 backdrop-blur-md shadow-sm flex items-center">
      <div class="max-w-7xl mx-auto flex items-center justify-between w-full p-4">
        <a href="index.html">
          <img src="https://iquegami.com.br/wp-content/uploads/2021/02/logo-topo.png" alt="Logo" class="h-10" />
        </a>
        <button id="theme-toggle" class="text-yellow-400 dark:text-gray-200 text-2xl animate-bounce mr-4">☀️</button>
        <button id="menu-toggle" class="lg:hidden flex flex-col justify-between w-8 h-6">
          <span class="block h-0.5 bg-gray-800 transition-all"></span>
          <span class="block h-0.5 bg-gray-800 transition-all"></span>
          <span class="block h-0.5 bg-gray-800 transition-all"></span>
        </button>
        <nav id="menu" class="hidden lg:flex gap-6 text-gray-700 font-medium">
          <a href="index.html#1" class="hover:text-green-600 transition">Técnica PEPS</a>
          <a href="index.html#2" class="hover:text-green-600 transition">Conhecer Os Produtos</a>
          <a href="index.html#3" class="hover:text-green-600 transition">Conceito 3P 1L</a>
          <a href="index.html#4" class="hover:text-green-600 transition">Noções de Venda</a>
          <a href="index.html#5" class="hover:text-green-600 transition">Atendimento</a>
          <a href="treinamento.html" class="hover:text-green-600 transition">Treinamento</a>
        </nav>
      </div>
      <div id="mobile-menu" class="hidden flex-col items-center bg-white/90 backdrop-blur-md shadow-md absolute top-full left-0 w-full">
        <a href="index.html#1" class="py-3 w-full text-center text-gray-700 hover:text-green-600 transition">PEPS</a>
        <a href="index.html#2" class="py-3 w-full text-center text-gray-700 hover:text-green-600 transition">Produtos</a>
        <a href="index.html#3" class="py-3 w-full text-center text-gray-700 hover:text-green-600 transition">Conceito 3P 1L</a>
        <a href="index.html#4" class="py-3 w-full text-center text-gray-700 hover:text-green-600 transition">Noções de Venda</a>
        <a href="index.html#5" class="py-3 w-full text-center text-gray-700 hover:text-green-600 transition">Atendimento</a>
        <a href="treinamento.html" class="py-3 w-full text-center text-gray-700 hover:text-green-600 transition">Treinamento</a>
      </div>
    </header>
    <div class="h-24"></div>
  `;

  const footer = `
    <footer class="bg-green-600 mt-12 p-4">
      <div class="text-center text-white text-sm">
        © 2025 Todos os direitos reservados | Desenvolvido por
        <a href="https://github.com/mateusoliveiradev1" target="_blank" rel="noopener noreferrer" class="underline">Mateus</a>
      </div>
    </footer>
  `;

  document.body.insertAdjacentHTML('afterbegin', header);
  document.body.insertAdjacentHTML('beforeend', footer);
});
