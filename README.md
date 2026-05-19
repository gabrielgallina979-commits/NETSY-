// Banco de dados dos seus filmes e séries
const catalogoFilmes = [
    {
        id: 1,
        titulo: "Filme Lançamento 1",
        sinopse: "Sinopse do filme de ação mais assistido do momento.",
        capa: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=300"
    },
    {
        id: 2,
        titulo: "Série Exclusiva NETSY",
        sinopse: "Uma série de suspense que vai te prender do início ao fim.",
        capa: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?q=80&w=300"
    },
    {
        id: 3,
        titulo: "Filme de Ficção Científica",
        sinopse: "Uma viagem no tempo que mudará o destino da humanidade.",
        capa: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=300"
    }
];

const grid = document.getElementById('moviesGrid');
const paywallModal = document.getElementById('paywallModal');
const closePaywall = document.getElementById('closePaywall');

// Função para exibir os filmes na tela
function renderizarFilmes(lista) {
    if (!grid) return;
    grid.innerHTML = "";
    lista.forEach(filme => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.style.cursor = "pointer";
        card.innerHTML = `
            <img src="${filme.capa}" alt="${filme.titulo}" style="width: 100%; border-radius: 4px;">
            <h3 style="font-size: 1rem; margin-top: 5px; color: #fff;">${filme.titulo}</h3>
        `;
        // Quando clicar em qualquer filme, abre a tela de cobrança de R$ 19
        card.addEventListener('click', () => abrirPaywall());
        grid.appendChild(card);
    });
}

// Função que bloqueia o filme e pede o pagamento
function abrirPaywall() {
    if (paywallModal) {
        paywallModal.style.display = "flex";
        paywallModal.style.position = "fixed";
        paywallModal.style.top = "0";
        paywallModal.style.left = "0";
        paywallModal.style.width = "100%";
        paywallModal.style.height = "100%";
        paywallModal.style.background = "rgba(0,0,0,0.85)";
        paywallModal.style.justifyContent = "center";
        paywallModal.style.alignItems = "center";
        paywallModal.style.zindex = "9999";
    }
}

// Fechar a tela de bloqueio se o usuário desistir
if (closePaywall) {
    closePaywall.addEventListener('click', () => {
        paywallModal.style.display = "none";
    });
}

// Configurar o Banner Principal com o primeiro filme
if(document.getElementById('heroTitle')) {
    document.getElementById('heroTitle').innerText = catalogoFilmes[0].titulo;
    document.getElementById('heroDesc').innerText = catalogoFilmes[0].sinopse;
    document.getElementById('heroBanner').style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.5), #141414), url('${catalogoFilmes[0].capa}')`;
    document.getElementById('heroPlayBtn').addEventListener('click', () => abrirPaywall());
}

// Sistema de Busca em tempo real
const searchBar = document.getElementById('searchBar');
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        const filtrados = catalogoFilmes.filter(f => f.titulo.toLowerCase().includes(termo));
        renderizarFilmes(filtrados);
    });
}

// Inicia o app mostrando os filmes
renderizarFilmes(catalogoFilmes);
