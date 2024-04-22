export function GetPDF(pdf) {
    return new URL(`../assets/documents/${pdf}`, import.meta.url).href;
  }

  export function GetPainelDeTransparencia(pdf) {
    return new URL(`../assets/documents/Transparencia/Painel-de-Transparencia/${pdf}`, import.meta.url).href;
  }

  export function getCertificados(pdf) {
    return new URL(`../assets/documents/Certificados/${pdf}`, import.meta.url).href;
  }

  export function getRelatorioDeAtividadeAnual(pdf) {
    return new URL(`../assets/documents/Publicacoes/Relatorio-de-Atividade-Anual/${pdf}`, import.meta.url).href;
  }

  export function getInfoFinanceira(pdf) {
    return new URL(`../assets/documents/Certificados/${pdf}`, import.meta.url).href;
  }

  export function getParceria(pdf) {
    return new URL(`../assets/documents/Transparencia/Parcerias/${pdf}`, import.meta.url).href;
  }