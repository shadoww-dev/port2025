        /* ==========================================================================
           BANCO DE DADOS DE PROJETOS ORGANIZADO E FLUIDO
           ========================================================================== */
        const bancoProjetos = [
            {
                id: 0,
                destaque: true, // Aparecerá na Home de Destaques (Máximo de 4 itens controlados no Script)
                titulo: "Alpha Gaming",
                autor: "Sh4dw",
                intro: "...",
                avatar: "./discord.jpg",
                capa: "./AG/alpha-3.0.jpg",
                banner: "./AG/alpha-3.0.jpg", 
                softwares: [
                    {nome: "Adobe Photoshop", img: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png"},
                ],
                // EXCELENTE EXEMPLO: Mistura resoluções grandes e pequenas para ativar o lado a lado!
                imagens: [
                    "./AG/alpha-3.0.jpg",   // LARGURA 800px (<1200): Fica LADO A LADO com a de baixo!
                    "./AG/new_spoiler.png",   // LARGURA 800px (<1200): Encaixa na mesma linha!
                    "./AG/pass_game.jpg",   // LARGURA 1400px (>=1200): Assume a linha INTEIRA isolada (.grande)
                    "./AG/register.png",   // Outra menor (<1200) para testar o encaixe dinâmico
                    "./AG/alpha_lancamento.jpg",    // Par da de cima
                    "./AG/ag (30).webp",
                    "./AG/ag (26).webp",
                    "./AG/ag (24).webp",
                    "./AG/ag (19).webp",
                    "./AG/ag (14).webp",
                    "./AG/ag (2).png",
                    "./AG/ag (2).webp",
                    "./AG/ag (4).webp",
                    "./AG/ag (5).webp",
                    "./AG/ag (6).webp",
                    "./AG/ag (7).webp",
                    "./AG/ag (8).webp",
                    "./AG/ag (9).webp",
                    "./AG/ag (10).webp",
                    "./AG/ag (11).webp",
                    "./AG/ag (17).webp",
                    "./AG/ag (18).webp",
                    "./AG/ag (20).webp",
                    "./AG/ag (1).png",
                    "./AG/convite_e_ganhe.jpg",
                    "./AG/char.jpg",
                    "./AG/banner_xarpi.jpg",
                    "./AG/halloween.jpg",
                    "./AG/la_swat_edit.png",
                    "./AG/myster_box_v1.jpg",
                    "./AG/trade.jpg"

                ]
            },
            {
                id: 1,
                destaque: true,
                titulo: "Genesis",
                autor: "Sh4dw",
                intro: "...",
                avatar: "./discord.jpg",
                capa: "./GNS/manipulation_banner.webp",
                banner: "./GNS/manipulation_banner.webp",
                softwares: [
                    {nome: "Adobe Photoshop", img: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png"},
                ],
                imagens: [
                    "./GNS/manipulation_banner.webp",  // Grande: Linha inteira
                    "./GNS/coming_soon_eu.webp", // Proteção nativa de Erro
                    "./GNS/pré_venda_valor_beast.webp",    // Pequena: Lado a lado
                    "./GNS/nikita_banner_game.png",     // Pequena: Lado a lado
                    "./GNS/genesis_folia.webp",
                    "./GNS/genesis_cup_xis_um.webp",
                    "./GNS/event_christmas.webp",
                    "./GNS/banner_team.png"
                ]
            },
            {
                id: 2,
                destaque: true,
                titulo: "CrossFire Elite",
                autor: "Sh4dw",
                intro: ". . .",
                avatar: "./discord.jpg",
                capa: "./ELT/newyear_2021.jpg",
                banner: "./ELT/fox_christmas.webp",
                softwares: [
                    {nome: "Adobe Photoshop", img: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png"},
                ],
                imagens: [
                    "./ELT/banner_fb.jpg",   // Lado a lado
                    "./ELT/newyear_2021.jpg",   // Lado a lado
                    "./ELT/halloween_sorteio.webp",    // Grande: Sozinha
                    "./ELT/fox_christmas.webp",
                    "./ELT/DX.png"
                ]
            },
            {
                id: 3,
                destaque: true,
                titulo: "Deluxe Roleplay",
                autor: "Sh4dw",
                intro: ". . .",
                avatar: "./discord.jpg",
                capa: "./DRP/banner_discord_deluxe.png",
                banner: "./DRP/banner_discord_deluxe.png",
                softwares: [
                    {nome: "Adobe Photoshop", img: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png"},
                ], 
                imagens: [
                    "./DRP/banner_discord_deluxe.png",   // Lado a lado
                    "./DRP/banner_discord.png",    // Lado a lado
                    "./DRP/deluxe_roleplay_logo.png",
                    "./DRP/banner.png"
                ]
            },
            {
                id: 4,
                destaque: false, // Ficará estritamente oculto na Home e visível apenas na aba expandida
                titulo: "Outros",
                autor: "Sh4dw",
                intro: ". . .",
                avatar: "./discord.jpg",
                capa: "./ETC/legacy_banner_discord.jpg",
                banner: "./ETC/legacy_banner_discord.png",
                softwares: [
                    {nome: "Adobe Photoshop", img: "https://cdn-icons-png.flaticon.com/512/5968/5968520.png"},
                ],
                imagens: [
                    "./ETC/legacy_banner_discord.jpg",
                    "./ETC/maintenance_done.png"
                ]
            }
        ];

        /* ==========================================================================
           CONTROLLER DE EXECUÇÃO E RENDERIZAÇÃO LÓGICA
           ========================================================================== */
        let projetoAtivoId = null;
        let imagemAtivaIndice = 0;

        const modalProjeto = document.getElementById('visualizadorBehance');
        const conteudoBox = document.getElementById('projetoConteudoBox');
        const modalZoom = document.getElementById('zoomLightbox');
        
        const vitrineHome = document.getElementById('vitrineHome');
        const vitrineTodos = document.getElementById('vitrineTodos');

        // Renderização dos cards com título e autor fora da imagem
        function criarCardProjeto(projeto) {
            const containerBlock = document.createElement('div');
            containerBlock.className = 'projeto-container-block';
            
            containerBlock.innerHTML = `
                <div class="capa-projeto-card">
                    <img src="${projeto.capa}" alt="Capa">
                </div>
                <div class="meta-container-externo">
                    <div class="card-titulo-projeto">${projeto.titulo}</div>
                    <div class="autor-nome-card">${projeto.autor}</div>
                </div>
            `;
            return containerBlock;
        }

        // CONTROLADOR DE FLUXO DA VITRINE: Garante até 4 itens de forma estrita na 2x2
        function construirHome() {
            vitrineHome.innerHTML = '';
            vitrineTodos.innerHTML = '';
            
            let contadorDestaques = 0;

            bancoProjetos.forEach((p) => {
                // Renderiza na seção inicial apenas se for destaque e limitando ao teto de 4 itens (Grid 2x2 perfeita)
                if (p.destaque && contadorDestaques < 4) {
                    const cardDestaque = criarCardProjeto(p);
                    cardDestaque.addEventListener('click', () => abrirVisualizador(p.id));
                    vitrineHome.appendChild(cardDestaque);
                    contadorDestaques++;
                }
                
                // Aloca na vitrine de arquivo completo sem qualquer limitação
                const cardGeral = criarCardProjeto(p);
                cardGeral.addEventListener('click', () => abrirVisualizador(p.id));
                vitrineTodos.appendChild(cardGeral);
            });
        }

        // SISTEMA DE NAVEGAÇÃO ENTRE VISUALIZAÇÕES (FADE SLIDE)
        const secaoDestaques = document.getElementById('secaoDestaques');
        const secaoTodosTrabalhos = document.getElementById('secaoTodosTrabalhos');

        document.getElementById('btnVerTodos').addEventListener('click', function() {
            secaoDestaques.classList.remove('active-view');
            setTimeout(() => {
                secaoDestaques.classList.add('hidden');
                secaoTodosTrabalhos.classList.remove('hidden');
                setTimeout(() => secaoTodosTrabalhos.classList.add('active-view'), 50);
            }, 300);
        });

        document.getElementById('btnVoltarDestaques').addEventListener('click', function() {
            secaoTodosTrabalhos.classList.remove('active-view');
            setTimeout(() => {
                secaoTodosTrabalhos.classList.add('hidden');
                secaoDestaques.classList.remove('hidden');
                setTimeout(() => secaoDestaques.classList.add('active-view'), 50);
            }, 300);
        });

        function fecharJanelaProjeto() {
            modalProjeto.classList.add('hidden');
            conteudoBox.classList.remove('loaded'); 
            document.body.style.overflow = 'auto';
            projetoAtivoId = null;
        }

        // SUA REGRA NATIVA DE ASPECT-RATIO QUE AGORA OPERA EM IMAGENS REAIS GRANDES/PEQUENAS
        function abrirVisualizador(id) {
            projetoAtivoId = id;
            const projeto = bancoProjetos.find(p => p.id === id);
            conteudoBox.classList.remove('loaded');

            document.getElementById('navAvatar').src = projeto.avatar;
            document.getElementById('navTitulo').innerHTML = `${projeto.titulo} <span>|</span> Overview`;

            const containerTools = document.getElementById('navTools');
            containerTools.innerHTML = '';
            projeto.softwares.forEach(soft => {
                const divItem = document.createElement('div');
                divItem.className = 'tool-item';
                divItem.innerHTML = `<img src="${soft.img}" alt="Icon"><div class="tool-tooltip">${soft.nome}</div>`;
                containerTools.appendChild(divItem);
            });

            document.getElementById('textoIntroducao').innerHTML = projeto.intro;
            document.getElementById('footerTitulo').innerText = projeto.titulo;
            document.getElementById('txtDataPostagem').innerText = `Última Atualização: 2026/07/04`;

            const galeria = document.getElementById('galeriaImagens');
            galeria.innerHTML = '';

            // PROCESSAMENTO ORIGINAL RECURSIVO DO SEU INDEX4 DO ASPECT-RATIO
            const promessasImagens = projeto.imagens.map((imgUrl, index) => {
                return new Promise((resolve) => {
                    const div = document.createElement('div');
                    div.className = `art-item`;

                    const imgTemp = new Image();
                    imgTemp.src = imgUrl;
                    imgTemp.onload = function() {
                        // Se a imagem passar de 1200px de largura, ela ganha a classe 'grande' ocupando 100% da largura
                        if (this.naturalWidth >= 1200) {
                            div.className = 'art-item grande';
                        }
                        div.style.aspectRatio = `${this.naturalWidth} / ${this.naturalHeight}`;
                        resolve();
                    };
                    // Fallback seguro caso o link quebre
                    imgTemp.onerror = () => resolve();

                    div.innerHTML = `<img src="${imgUrl}" alt="Foto">`;
                    div.addEventListener('click', (e) => { e.stopPropagation(); abrirZoomIsolado(index); });
                    galeria.appendChild(div);
                });
            });

            document.getElementById('sugestaoAvatar').src = projeto.avatar;
            document.getElementById('sugestaoAutorNome').innerText = projeto.autor;

            // Carrega sugestões inferiores omitindo o álbum ativo
            const containerSugestoes = document.getElementById('containerSugestoes');
            containerSugestoes.innerHTML = '';
            bancoProjetos.filter(p => p.id !== id).forEach(outro => {
                const cardSugestao = criarCardProjeto(outro);
                cardSugestao.addEventListener('click', () => abrirVisualizador(outro.id));
                containerSugestoes.appendChild(cardSugestao);
            });

            modalProjeto.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            modalProjeto.scrollTop = 0;

            Promise.all(promessasImagens).then(() => {
                setTimeout(() => { conteudoBox.classList.add('loaded'); }, 50);
            });
        }

        /* --- CONTROLES DE LIGHTBOX DE ZOOM --- */
        function abrirZoomIsolado(index) {
            imagemAtivaIndice = index;
            atualizarEspelhoZoom();
            modalZoom.classList.remove('hidden');
        }

        function atualizarEspelhoZoom() {
            const projeto = bancoProjetos.find(p => p.id === projetoAtivoId);
            document.getElementById('zoomImagemAlvo').src = projeto.imagens[imagemAtivaIndice];
            document.getElementById('zoomBannerAlvo').src = projeto.banner;
            document.getElementById('zoomStatusTitulo').innerText = projeto.titulo;
            document.getElementById('zoomStatusMeta').innerText = `Imagem ${imagemAtivaIndice + 1} de ${projeto.imagens.length}`;
        }

        function avancarImagem() {
            const projeto = bancoProjetos.find(p => p.id === projetoAtivoId);
            if (imagemAtivaIndice < projeto.imagens.length - 1) { imagemAtivaIndice++; atualizarEspelhoZoom(); }
        }

        function voltarImagem() {
            if (imagemAtivaIndice > 0) { imagemAtivaIndice--; atualizarEspelhoZoom(); }
        }

        document.getElementById('nextZoom').addEventListener('click', (e) => { e.stopPropagation(); avancarImagem(); });
        document.getElementById('prevZoom').addEventListener('click', (e) => { e.stopPropagation(); voltarImagem(); });
        document.getElementById('closeZoom').addEventListener('click', () => modalZoom.classList.add('hidden'));
        
        modalZoom.addEventListener('click', (e) => {
            if (e.target === modalZoom || e.target.classList.contains('zoom-container-art')) modalZoom.classList.add('hidden');
        });

        window.addEventListener('keydown', (e) => {
            if (e.key === "Escape") {
                if (!modalZoom.classList.contains('hidden')) modalZoom.classList.add('hidden');
                else if (!modalProjeto.classList.contains('hidden')) fecharJanelaProjeto();
            }
            if (!modalZoom.classList.contains('hidden')) {
                if (e.key === "ArrowRight") avancarImagem();
                if (e.key === "ArrowLeft") voltarImagem();
            }
        });

        document.getElementById('fecharProjeto').addEventListener('click', fecharJanelaProjeto);

        // Disparo Inicial da Aplicação
        construirHome();
        setTimeout(() => secaoDestaques.classList.add('active-view'), 50);

        document.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menuFuturista");
    const btnControle = document.getElementById("btnControleMenu");

    btnControle.addEventListener("click", () => {
        // Alterna a classe 'fechado' na barra de navegação
        menu.classList.toggle("fechado");

        // Altera o símbolo do botão dependendo do estado atual
        if (menu.classList.contains("fechado")) {
            btnControle.innerHTML = "&#8226;&#8226;&#8226;"; // Código HTML para os três pontinhos (...)
            btnControle.style.fontSize = "14px"; // Ajuste leve para os pontinhos ficarem centrados
        } else {
            btnControle.innerHTML = "&times;"; // Código HTML para o "X" de fechar
            btnControle.style.fontSize = "20px";
        }
    });
});

function toggleDropup(botao) {
            // Captura o container atual do botão clicado
            const containerAtual = botao.parentElement;
            
            // Fecha qualquer outro menu que possa estar aberto no footer
            document.querySelectorAll('.footer-dropup-container').forEach(container => {
                if (container !== containerAtual) {
                    container.classList.remove('ativo');
                }
            });

            // Alterna o estado do menu atual (Abre/Fecha)
            containerAtual.classList.toggle('ativo');
        }

        // Fecha os menus se o utilizador clicar em qualquer outra parte vazia da tela
        window.addEventListener('click', function(e) {
            if (!e.target.matches('.footer-titulo-botao')) {
                document.querySelectorAll('.footer-dropup-container').forEach(container => {
                    container.classList.remove('ativo');
                });
            }
        });

/* ==========================================================================
           2. MENU DROPUP CONTROLE
           ========================================================================== */
        function toggleDropup(botao) {
            const containerAtual = botao.parentElement;
            document.querySelectorAll('.footer-dropup-container').forEach(container => {
                if (container !== containerAtual) container.classList.remove('ativo');
            });
            containerAtual.classList.toggle('ativo');
        }

        window.addEventListener('click', function(e) {
            if (!e.target.matches('.footer-titulo-botao')) {
                document.querySelectorAll('.footer-dropup-container').forEach(container => container.classList.remove('ativo'));
            }
        });

        /* ==========================================================================
           3. INTERSECTION OBSERVER PARA APARIÇÃO DO FOOTER
           ========================================================================== */
        document.addEventListener("DOMContentLoaded", function() {
            const alvoNomeGigante = document.getElementById('nomeGiganteFooter');
            
            // Preparar as letras individualmente mantendo a string original para o efeito criptografado
            const textoOriginal = alvoNomeGigante.textContent.trim();
            alvoNomeGigante.innerHTML = '';
            textoOriginal.split('').forEach(letra => {
                const span = document.createElement('span');
                span.textContent = letra;
                span.className = 'glitch-letra';
                span.setAttribute('data-char', letra);
                alvoNomeGigante.appendChild(span);
            });

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        alvoNomeGigante.classList.add('revelado');
                    } else {
                        alvoNomeGigante.classList.remove('revelado');
                    }
                });
            }, { root: null, threshold: 0.1 });

            observer.observe(alvoNomeGigante);

            /* 4. EFEITO DE GLITCH / CÓDIGO CRIPTOGRAFADO AO PASSAR O MOUSE */
            const caracteresCripto = "XØ10▰▱▲▼█▓▒░⧈➔⚙⚡#@$*";
            
            alvoNomeGigante.querySelectorAll('.glitch-letra').forEach(span => {
                let intervalo = null;
                
                span.addEventListener('mouseenter', function() {
                    let iteracao = 0;
                    const caractereAlvo = this.getAttribute('data-char');
                    clearInterval(intervalo);
                    
                    intervalo = setInterval(() => {
                        // Embaralha temporariamente exibindo símbolos aleatórios da matriz
                        this.textContent = caracteresCripto[Math.floor(Math.random() * caracteresCripto.length)];
                        this.style.color = 'rgba(0, 0, 0, 0.4)'; // Feedback visual rápido de ativação
                        
                        if(iteracao >= 6) {
                            clearInterval(intervalo);
                            this.textContent = caractereAlvo;
                            this.style.color = ''; // Retorna à cor padrão estruturada do CSS
                        }
                        iteracao++;
                    }, 60);
                });
            });
        });

        /* ==========================================================================
           EFEITO CRIPTOGRÁFICO DE DESMONTE MENOR NAS LETRAS DO "ABOUT ME"
           ========================================================================== */
        document.addEventListener("DOMContentLoaded", function() {
            const palavrasMarquee = document.querySelectorAll('.marquee-palavra-glitch');
            const caracteresCriptoMenor = "XØ10▲▼█▓#@$*"; // Caracteres para o desmonte rápido

            palavrasMarquee.forEach(palavra => {
                const textoOriginal = palavra.textContent;
                palavra.innerHTML = ''; // Limpa para reconstruir com spans individuais

                // Divide o texto caractere por caractere (incluindo espaços)
                textoOriginal.split('').forEach(letra => {
                    const span = document.createElement('span');
                    span.className = 'marquee-letra-glitch';
                    
                    if (letra === ' ') {
                        span.innerHTML = '&nbsp;'; // Preserva o espaçamento correto entre as palavras
                    } else {
                        span.textContent = letra;
                        span.setAttribute('data-char', letra);
                        
                        let intervalo = null;
                        
                        // Ativa o micro-glitch apenas na letra que o mouse encostar
                        span.addEventListener('mouseenter', function() {
                            let iteracao = 0;
                            const caractereAlvo = this.getAttribute('data-char');
                            clearInterval(intervalo);
                            
                            intervalo = setInterval(() => {
                                // Desmonta exibindo temporariamente caracteres menores aleatórios
                                this.textContent = caracteresCriptoMenor[Math.floor(Math.random() * caracteresCriptoMenor.length)];
                                this.style.color = 'rgba(0, 0, 0, 0.3)'; // Realce sutil rápido durante o desmonte
                                
                                if (iteracao >= 4) { // Menos iterações para um efeito mais rápido e menor
                                    clearInterval(intervalo);
                                    this.textContent = caractereAlvo; // Devolve a letra original
                                    this.style.color = ''; // Retorna à opacidade padrão de 0.05
                                }
                                iteracao++;
                            }, 50); // Velocidade sutil ligeiramente maior
                        });
                    }
                    palavra.appendChild(span);
                });
            });
        });