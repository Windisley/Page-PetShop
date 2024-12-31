# **Patas e Mimos**

**Patas e Mimos** é um site interativo que oferece serviços e informações sobre cuidados com animais de estimação, como cães e gatos. O projeto utiliza uma interface de navegação simples e intuitiva, com um carrossel de imagens para destacar os serviços ou produtos relacionados ao bem-estar dos pets.

 **Prototipo**
![prototipoof](https://github.com/user-attachments/assets/0cb74d20-0d7e-4d7f-a952-a8d62a1231ec)
----

**Projeto Construido**
![Pagina](https://github.com/user-attachments/assets/ce6f09cf-9a71-4a33-a349-709ac7739d08)


## **Funcionalidades**

- **Carrossel de Imagens**: Um carrossel interativo que permite visualizar imagens de animais de estimação (cães e gatos) com a possibilidade de navegação para a esquerda e para a direita.
- **Navegação Simples**: Um cabeçalho com links para as seções "Início", "Sobre nós" e "Contato".
- **Design Responsivo**: A página é projetada para ser responsiva, adaptando-se bem a diferentes tamanhos de tela (com destaque para dispositivos móveis).

## **Estrutura do Projeto**

### **1. HTML (index.html)**

- **Cabeçalho**: Contém a logo e um menu de navegação com links para diferentes seções da página.
- **Carrossel de Imagens**: Exibe um carrossel com imagens de pets, que pode ser navegada com as setas para a esquerda e para a direita.
- **Conteúdo Promocional**: Uma seção destacada com um título chamativo e um botão "Saber mais", com o objetivo de engajar o usuário.
- **Imagem de Fundo**: Uma imagem de pets felizes aparece à direita, sendo ocultada em dispositivos com telas menores.

### **2. CSS (style.css)**

- **Variáveis de Cores**: Cores definidas como variáveis para facilitar a personalização (ex: `--primary`, `--black`, `--green`).
- **Estilo de Navegação**: O cabeçalho tem links que ganham um efeito visual ao passar o mouse, com uma linha abaixo de cada link.
- **Design Responsivo**: Media queries são usadas para adaptar o layout da página, ajustando a disposição dos elementos com base no tamanho da tela.
- **Carrossel de Imagens**: Um carrossel com imagens de animais, com transições suaves e efeito de aumento nas imagens ao passar o mouse.

### **3. JavaScript (script.js)**

- **Navegação no Carrossel**: O código JavaScript permite a navegação no carrossel de imagens usando as setas (esquerda e direita). O número de imagens no carrossel é limitado, e a navegação é controlada com base no valor de `count`.
    - A seta esquerda reduz o índice `count` até o valor 1, e a seta direita aumenta o índice `count` até o valor 3, movendo as imagens horizontalmente.
    - A navegação é feita alterando a propriedade CSS `transform` para ajustar a posição do carrossel com base no índice.

## **Tecnologias Utilizadas**

- **HTML**: Estrutura básica da página.
- **CSS**: Estilos para a página, incluindo design responsivo e animações suaves.
- **JavaScript**: Lógica para controlar a navegação do carrossel e interação com o usuário.
