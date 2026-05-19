const movies = [
    { 
        title: 'Cyber Future', 
        image: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
        title: 'Dark City', 
        image: 'https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?q=80&w=1200&auto=format&fit=crop' 
    },
    { 
        title: 'Netsy Originals', 
        image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=1200&auto=format&fit=crop' 
    }
];

const grid = document.getElementById('moviesGrid');
const paywallModal = document.getElementById('paywallModal');
const closePaywall = document.getElementById('closePaywall');

// Renderiza os cards de filmes na tela
if (grid) {
    grid.innerHTML = "";
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.className = "bg-zinc-900 rounded-3xl overflow-hidden hover:scale-105 transition duration-300 shadow-2xl cursor-pointer";
        card.innerHTML = `
            <img src="${movie.image}" class="w-full h-72 object-cover" />
            <div class="p-6">
                <h4 class="text-2xl font-bold text-white">${movie.title}</h4>
                <button class="mt-5 w-full bg-red-600 py-3 rounded-xl font-bold text-white hover:bg-red-700 transition">
                    Assistir
                </button>
            </div>
        `;
        // Abre o bloqueio ao clicar no card do filme
        card.addEventListener('click', abrirBloqueio);
        grid.appendChild(card);
    });
}

// Função para abrir a tela de pagamento
function abrirBloqueio(e) {
    if (e) e.preventDefault();
    if (paywallModal) {
        paywallModal.style.setProperty('display', 'flex', 'important');
    }
}

// Fecha a janela de pagamento no 'X'
if (closePaywall) {
    closePaywall.addEventListener('click', () => {
        if (paywallModal) paywallModal.style.display = "none";
    });
}

// Aplica a função de bloqueio em todos os botões soltos da página
document.querySelectorAll('.button-bloqueio').forEach(botao => {
    botao.addEventListener('click', abrirBloqueio);
});
