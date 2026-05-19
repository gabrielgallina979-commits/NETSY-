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
