# 🐾 Catálogo de Gatos - Consumo de API

Este é o projeto desenvolvido para a Atividade Prática de Consumo de APIs com PHP, para a disciplina de Programação para Internet I (ADS).

## 📌 Descrição do Projeto
O projeto consiste em uma aplicação web responsiva que exibe um catálogo interativo de raças de gatos. O sistema permite visualizar fotos, a origem de cada raça e um resumo do seu perfil (temperamento). Além disso, a aplicação conta com um sistema de busca (filtro) e um botão para paginação ("Carregar mais").

Toda a estilização foi feita utilizando CSS puro, implementando um design moderno e com animações suaves (efeito Glassmorphism).

## 🔌 API Escolhida
A API escolhida para este projeto foi a **The Cat API**.
- **URL Base utilizada:** `https://api.thecatapi.com/v1/breeds`
- Foi utilizado o cURL no backend (PHP) para contornar problemas de certificado SSL no ambiente local, e o JavaScript (Fetch API) para renderizar os dados na tela do usuário.

## 🛠️ Tecnologias Utilizadas
- **HTML5:** Estruturação semântica.
- **CSS3:** Estilização com Flexbox, CSS Grid e animações.
- **JavaScript:** Consumo dinâmico (assíncrono) do back-end, filtro de pesquisa e injeção no DOM.
- **PHP:** Responsável por fazer a requisição direta na API externa (backend).

## 🚀 Como executar o projeto
1. Inicie um servidor local que suporte PHP (XAMPP, WAMP, etc).
2. Coloque a pasta do projeto no diretório raiz do servidor (ex: `htdocs` no XAMPP).
3. Acesse `http://localhost/nome-da-pasta` no seu navegador.