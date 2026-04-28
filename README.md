# Reprodução Suprematista com p5.js

Este projeto consiste na reprodução digital da obra **"Composição Suprematista"** do artista **Kazimir Malevich**, desenvolvida como parte da disciplina de artes/programação. O objetivo foi utilizar a biblioteca **p5.js** para aplicar conceitos de geometria, coordenadas, cores e interatividade.

## Referência da Pintura
- Nome da Pintura: "Amor"
- Pintor: Lygia Pape
- Ano: 1959
- Imagem de referência: [Ver imagem original](https://dasartes-media.storage.googleapis.com/dasartes.com.br/wp-content/uploads/2022/05/31094951/Amor_LygiaPape_Pintura-Copy.jpg)

## 📁 Estrutura de Arquivos
- `index.html`: Estrutura base que carrega a biblioteca p5.js e o script do projeto.
- `LiviaTavares.js`: Arquivo contendo a lógica de desenho das formas e a interação.
- `amor.jpg`: Imagem original utilizada para o exercício.

## 🖱️ Descrição da Animação / Interação
A reprodução inclui uma interação dinâmica baseada na posição do mouse. 
Ao movimentar o cursor horizontalmente pela tela, os três grupos principais de formas geométricas sofrem uma leve oscilação em seu ângulo de rotação (usando a função `map()` integrada ao `rotate()`). 

O objetivo desta interação é simular um efeito de "flutuação" espacial, característico da filosofia suprematista, onde os elementos parecem estar suspensos no vácuo em vez de fixos em um plano estático.

## 🛠️ Tecnologias Utilizadas
- HTML5
- CSS3 (Estilização básica do canvas)
- [p5.js](https://p5js.org/) - Biblioteca JavaScript para criação criativa.

## 🚀 Como Executar
1. Clone este repositório ou baixe os arquivos.
2. Certifique-se de que o arquivo `LiviaTavares.js` e `index.html` estão na mesma pasta.
3. Abra o arquivo `index.html` em qualquer navegador moderno.
