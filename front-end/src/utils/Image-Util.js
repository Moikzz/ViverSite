export function bannerImageURL(image) {
    return new URL(`../assets/images/general/${image}`, import.meta.url).href;
  }

export function cardImageURL(image) {
    return new URL(`../assets/images/cards/${image}`, import.meta.url).href;
  }
  
export function carouselImageURL(image) {
    return new URL(`../assets/images/carousel/${image}`, import.meta.url).href;
  }

export function getCertificateURL(image) {
    return new URL(`../assets/images/certificados/${image}`, import.meta.url).href;
  }


/*
Image-Util

Uma Util é um arquivo que contém várias funções pré-montadas, com o objetivo de ser uma maneira mais rápida de implementar algo.

As funções acima estão relacionadas especificamente á exportação de imagens de subpastas específicas
(a função "getCertificateURL" carrega fotos da pasta "certificados" como exemplo)

para criar uma nova Util:
1. Copie qualquer uma das funções acima
2. Altere o endereço de chamada dos arquivos
3. Salve o arquivo
4. Importe a função no componente desejado 
(exemplo: import { cardImageURL } from "../../../utils/Image-Util.js")

A Doc-Util funciona de forma semelhante, mas para fins de organização, para cada função de carregamento de documentos, favor implementar na Doc-Util.js
Para um exemplo de carregamento de Documentos, olhe a página "Certificados" localizada em src/components/pages/INTEGRIDADE/Certificados.jsx

*/