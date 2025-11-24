# Lian-Concessionaria #

##Descrição##
A LIAN é o seu portal de confiança, para comprar carros e motos com leveza, inteligência,
agiliadde e negociação. Aqui você encontra veíoculos revisados, excelentes, ofertas e um atendimento 
dedicado para você a fazer a melhor escolha.

## Estrutura do Projeto ##
index.html → Estrutura principal da página (navbar, slogan, seções de carros, motos e vendedores, footer).
style.css → Estilos visuais (layout, cores, animações de hover, responsividade).
script.js → Funções em JavaScript para buscar dados da API e renderizar os cards dinamicamente.

## Tecnologias Utilizadas ##
HTML → Estrutura semântica da página.
CSS3 → Estilização, responsividade e efeitos de hover.
JavaScript (ES6) → Consumo da API via fetch e manipulação do DOM.
API REST → Endpoints locais para carros, motos e vendedores.

## Endpoints da API ##
O projeto consome dados de uma API local hospedada em http://10.92.199.53:3000.
Carros → /carros
Motos → /motos
Vendedores → /vendedores
Cada endpoint retorna um JSON com os dados necessários para montar os cards.

## Funcionalidades ##
Navbar interativa com links principais (Contato, Serviço, Sobre, Login).
Slogan e descrição da LIAN em destaque.
Cards de carros e motos com imagem, nome, preço e botão de compra.
Cards de vendedores com foto e nome.
Efeito hover nos cards: animação de salto e sombra para destacar ao passar o mouse.
Footer informativo com imagem personalizada da LIAN.

            
