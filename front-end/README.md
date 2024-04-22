# Site VIVER

# Apresentação
Este é o índice da documentação. Informações gerais sobre o projeto e tecnologias usadas serão encontradas aqui. O projeto consiste em 2 partes, o Front-End e o Back-End.

# Projeto/Front-End
O Front-End foi estruturado da seguinte forma. As pastas "node_modules" , "public" e "src" são geradas quando se cria um nova nova aplicação em React.js

# Projeto/Front-End/node_modules
Na pasta "node_modules" estão todas as dependências necessárias para rodar o projeto em React. Ela NÃO deve ser transportada para o servidor de forma direta, pois sempre deve-se ter uma build nova da pasta a cada instalação do aplicativo. Para criar um novo node_modules, roda-se o comando { npm i }. Ele lerá o arquivo "package.json" e instalará todas as dependências necessárias.

# Projeto/Front-End/public
Na pasta "public" está o favicon da Viver (LOGO-VIVER.ico)

# Projeto/Front-End/src
Na pasta "src" estão todos os arquivos criados para o display do site, onde estão organizados em:

- Pasta Assets: Ativos do site como imagens, documentos e vídeos. Recomendo fortemente que se siga a organização proposta por subpastas, cada um com o seu grupo de arquivos (imagens do Carousel em "assets/images/carousel")

- Pasta Components: Componentes do site, que podem ser reutilizados em virtualmente qualquer lugar os importando (explicação no item "1"). Os componentes estão divididos em 2 pastas; "Layouts" e "Pages" para melhor organização e facilidade em manutenção (explicação no item "2")

- Pasta Data: Estrutura de dados feitas para emular um banco de dados, feita de um array de objetos.

- Pasta Utils: Lógicas feitas para carregar os dados no site, usando os arquivos da pasta "Assets" em relação as estruturas da pasta "Data"

- App.css: arquivo que contém as configurações de estilo globais do projeto
- App.jsx: arquivo que contém a lógica global do que será mostrado no site (veja a página para mais info)

# Funcionamento do projeto
1. O Front-End do site é feito em React - 
    React.JS é uma framework baseada na linguagem de programação Javascript cuja a principal vantagem é a componentização e a reusabilidade de suas partes. Uma vez criado um componente, ele pode ser reutilizado 
    em qualquer outra parte do site através do comando: "import { Componente } from 'endereço do componente'"
    
    Cada componente pode utilizar "props" - variáveis/argumentos que podem ser passados externalmente para alimentarem OU mostrarem um resultado. Um exemplo disto está no arquivo Header.jsx (front-end/src/components/layout/Header)

# Disposição dos componentes
2. Para maior organização dos componentes, o site conta com 2 pastas: "layout" e "pages"
    A pasta Layout contém todos os componentes estruturais do site. Cards, Carousels, Footers, Headers e etc. Estes componentes são importados em Páginas para serem mostradas ao cliente

    A pasta Pages comtém todas as páginas montadas, subdivididas em categorias. É recomendado que se siga a lógica de acomodar cada página de acordo com a barra de navegação, criando uma pasta para o item da barra de navegação e tendo a página como sub-item

# Implentando uma nova página ao projeto
1. Para implementar uma nova página, primeiramente vá até o arquivo "main.jsx" e leia os comentários abaixo