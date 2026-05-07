let gatos = [];
let paginaAtual = 0;
const container = document.getElementById("container");

function carregarGatos() {
    if (paginaAtual === 0) {
        container.innerHTML = "<p style='font-size: 1.2rem; grid-column: 1 / -1; text-align: center;'>Buscando raças de gatos...</p>";
    }
    
    fetch("api.php?page=" + paginaAtual)
      .then(res => res.json())
      .then(data => {
          if (data.erro) {
              container.innerHTML = `<p style="color: red; grid-column: 1 / -1; text-align: center;">Erro: ${data.erro}</p>`;
              return;
          }

          if (paginaAtual === 0) container.innerHTML = "";

          // Pega apenas o codigo valido
          const novosGatos = data.filter(gato => gato.reference_image_id != null);
          
          gatos = gatos.concat(novosGatos);
          mostrar(gatos);
      });
}

carregarGatos();

function buscar() {
    const termo = document.getElementById("busca").value.toLowerCase();
    
    const filtrados = gatos.filter(gato => {
        return gato.name.toLowerCase().includes(termo);
    });

    mostrar(filtrados);
}

function mostrar(lista) {
    container.innerHTML = "";

    if (lista.length === 0) {
        container.innerHTML = "<p style='font-size: 1.2rem; grid-column: 1 / -1; text-align: center;'>Nenhum gato encontrado com esse nome.</p>";
        return;
    }

    lista.forEach(gato => {
        const nome = gato.name;
        const origem = gato.origin || "Desconhecida";
        const temperamento = gato.temperament || "Desconhecido";
        
        // LINK IMG USANDO ID!
        const imagem = `https://cdn2.thecatapi.com/images/${gato.reference_image_id}.jpg`;

        container.innerHTML += `
            <div class="card">
                <img src="${imagem}" alt="${nome}">
                <div class="card-info">
                    <h2>${nome}</h2>
                    <p><strong>🌍 Origem:</strong> ${origem}</p>
                    <p class="perfil"><strong>✨ Perfil:</strong> ${temperamento}</p>
                </div>
            </div>
        `;
    });
}

function carregarMais() {
    paginaAtual++;
    carregarGatos();
}