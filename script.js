// função para procurar carro
function buscarCarro() {
    // link da API
    fetch("http://10.92.199.53:3000/carros")
        .then((res) => res.json())
        .then((data) => {

            // Div onde os carros vão aparecer
            let divContainer = document.getElementById("carrosContainer")

            data.forEach(carro => {
                
                let card = document.createElement("div")

                // Criando em HTML
                card.innerHTML = `
                <div class="squares">
                <div class="quadrado">
                <img class="quadrado" src="${carro.imagem}"/>
                </div>
                <br>
                <div class="nomePreco">
                    <h3>${carro.nome}</h3>
                    <h3>${carro.preco}</h3>
                </div>
                <br>
                <br>
                <h4 class="comprar">COMPRAR</h4>
            </div>
            `

                divContainer.append(card)
            });
        })
}

buscarCarro()


function buscarMoto() {
    fetch("http://10.92.199.53:3000/motos")
        .then((res) => res.json())
        .then((data) => {

            // Div onde as motos vão aparecer
            let divContainer = document.getElementById("motosContainer")

            data.forEach(moto => {
                // Criando card
                let card = document.createElement("div")

                // Criando em HTML
                card.innerHTML = `
                <div class="squares">
                <div class="quadrado">
                <img class="quadrado" src="${moto.imagem}"/>
                </div>
                <br>
                <div class="nomePreco">
                    <h3>${moto.nome}</h3>
                    <h3>${moto.preco}</h3>
                </div>
                <br>
                <br>
                <h4 class="comprar">COMPRAR</h4>
            </div>
            `

                divContainer.append(card)
            });
        })
}

buscarMoto()

function buscarVendedor() {
    fetch("http://10.92.199.53:3000/vendedores")
        .then((res) => res.json())
        .then((data) => {

            // Div onde os vendedores vão aparecer
            let divContainer = document.getElementById("vendedoresContainer")

            data.forEach(vendedor => {
                // Criando card
                let card = document.createElement("div")

                // Criando em HTML
                card.innerHTML = `
                <div class="squares">
                <div class="quadrado">
                <img class="quadrado" src="${vendedor.imagem}"/>
                </div>
                <br>
                <div class="nomePreco">
                    <h3>${vendedor.nome}</h3>
                </div>
            </div>
            `

                divContainer.append(card)
            });
        })
}

buscarVendedor()