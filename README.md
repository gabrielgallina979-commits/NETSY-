<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>NETSY - Filmes e Séries</title>
    <link rel="stylesheet" href="style.css">
    <link rel="manifest" href="manifest.json">
    <meta name="theme-color" content="#e50914">
</head>
<body>
    <header>
        <div class="logo">NETSY</div>
        <nav>
            <input type="text" id="searchBar" placeholder="Buscar filme ou série...">
        </nav>
    </header>

    <main>
        <section class="hero" id="heroBanner">
            <div class="hero-content">
                <h1 id="heroTitle">Carregando Destaque...</h1>
                <p id="heroDesc">Sinopse do filme em destaque...</p>
                <button class="play-btn" id="heroPlayBtn">▶ Assistir</button>
            </div>
        </section>

        <section class="movies-section">
            <h2>Populares na NETSY</h2>
            <div class="movies-grid" id="moviesGrid"></div>
        </section>
    </main>

    <div class="video-modal" id="paywallModal">
        <div class="modal-content" style="text-align: center; padding: 40px 20px; background-color: #141414; border-radius: 8px; max-width: 500px; margin: auto; position: relative;">
            <span class="close-modal" id="closePaywall" style="position: absolute; top: 10px; right: 20px; color: #fff; font-size: 30px; cursor: pointer;">&times;</span>
            <div style="font-size: 3rem; color: #e50914; margin-bottom: 20px;">🔒</div>
            <h2 style="font-size: 1.8rem; margin-bottom: 10px; color: #fff;">Conteúdo Exclusivo</h2>
            <p style="color: #aaa; margin-bottom: 25px;">Assine a NETSY para liberar todo o catálogo de filmes e séries.</p>
            
            <div style="background: #222; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
                <span style="font-size: 1.1rem; display: block; color: #ccc;">Plano Mensal Completo</span>
                <span style="font-size: 2.5rem; font-weight: bold; color: #fff;">R$ 19,00</span>
                <span style="font-size: 0.9rem; color: #888; display: block;">/por mês</span>
            </div>

            <!-- LEMBRETE: Troque as letras maiúsculas abaixo pelo seu link do Mercado Pago -->
            <a href="COLE_AQUI_O_SEU_LINK_DO_MERCADO_PAGO" target="_blank" style="display: inline-block; text-decoration: none; background-color: #e50914; color: white; width: 100%; max-width: 300px; padding: 15px; font-weight: bold; border-radius: 4px; font-size: 1.1rem;">
                🚀 Ativar Minha Assinatura
            </a>
            <p style="font-size: 0.8rem; color: #555; margin-top: 15px;">Liberação imediata via Pix. Cancele quando quiser.</p>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>
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
        paywallModal.style.zIndex = "9999";
    }
}

if (closePaywall) {
    closePaywall.addEventListener('click', () => {
        paywallModal.style.display = "none";
    });
}

if(document.getElementById('heroTitle')) {
    document.getElementById('heroTitle').innerText = catalogoFilmes[0].titulo;
    document.getElementById('heroDesc').innerText = catalogoFilmes[0].sinopse;
    document.getElementById('heroBanner').style.backgroundImage = `linear-gradient(to bottom, rgba(0,0,0,0.5), #141414), url('${catalogoFilmes[0].capa}')`;
    document.getElementById('heroPlayBtn').addEventListener('click', () => abrirPaywall());
}

const searchBar = document.getElementById('searchBar');
if (searchBar) {
    searchBar.addEventListener('input', (e) => {
        const termo = e.target.value.toLowerCase();
        const filtrados = catalogoFilmes.filter(f => f.titulo.toLowerCase().includes(termo));
        renderizarFilmes(filtrados);
    });
}

renderizarFilmes(catalogoFilmes);
