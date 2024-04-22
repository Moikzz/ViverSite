const CardsData = [
  {
    id: 1,
    title: "DOAÇÕES FINANCEIRAS. É FÁCIL, RÁPIDO E NOSSAS CRIANÇAS AGRADECEM",
    text: "Precisamos de sua ajuda. Somos uma organização sem fins lucrativos, que atua como um centro de convivência e fortalecimento de vínculos sociais",
    image: "card1.jpg",
  },
  {
    id: 2,
    title: "ASSOCIAÇÃO VIVER RECEBE O SELO SOCIAL",
    text: "Certificada com o Selo Social pelo Instituto Abraçaí, em parceria com a Rede Salesiana Brasil de Ação Social e o UniCeub. Conquista que foi o fruto de dedicação de nossos colaboradores e voluntários. Graças a DEUS!",
    image: "card2.jpg",
  },
  {
    id: 3,
    title: "ARRECADAÇÃO DE MATERIAL PEDAGÓGICO",
    text: "Ajude-nos com sua doação. Visite nossas Oficinas",
    image: "card3.jpg",
  },
  {
    id: 4,
    title: "ASSOCIAÇÃO VIVER RECEBE O CERTIFICADO CEBAS 2021/2024",
    text: "Símbolo de reconnhecimento do nosso trabalho e do nosso compromisso social. Dedicamos este certificado aos nossos funcionários, assistidos, voluntários, parceiros e colaboradores. Esta é uma conquista que representa o trabalho e a solidariedade de todos nós! Obrigado!",
    image: "card4.jpg",
  },
];

const GetCardsData = () => {
  return CardsData;
};

export { GetCardsData };


/* 

EXEMPLO DE UMA "DATA"

Enquanto não se é integrado um banco de dados através de uma API, cada componente terá uma "Data" para mostrar seus conteúdos.

A Data é um array de objetos constitudos por:

ID: ID do Objeto. Obrigatoriamente numérico
Title: Título do Objeto. tem que ser uma String
Text: Texto para ser mostrado junto com o Objeto
Image: NOME da imagem relacionada ao Objeto. No caso deste arquivo, as imagens estão guardadas na pasta "cards", dentro da pasta src/assets/cards



ADICIONANDO UM NOVO CARD:
1. Faça um novo Objeto neste array
2. Coloque o ID como número subsequente ao último objeto
3. Coloque o nome do títle,text e o nome completo do arquivo na chave Image
4. Salve o arquivo


Automaticamente o site carregará o novo Card com os dados inseridos nas páginas onde a "Data" e sua "util" estão sendo importados
Para ver o exemplo de uma "util", veja o arquivo Image-Util.js, localizado na pasta src/utils/Image-Util.js
*/
