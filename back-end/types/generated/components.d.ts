import type { Schema, Attribute } from '@strapi/strapi';

export interface DocumentoTipo extends Schema.Component {
  collectionName: 'components_documento_tipos';
  info: {
    displayName: 'tipo';
  };
  attributes: {
    tipo: Attribute.Enumeration<
      ['InformacaoFinanceira', 'EstatutoSocial', 'Outro']
    > &
      Attribute.Required;
  };
}

export interface LinkBlocoLink extends Schema.Component {
  collectionName: 'components_link_bloco_links';
  info: {
    displayName: 'Link';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    NomeLink: Attribute.String & Attribute.Required;
    EnderecoLink: Attribute.RichText &
      Attribute.Required &
      Attribute.DefaultTo<'Link Aqui'>;
    IconeLink: Attribute.Media;
  };
}

export interface MediaDocumento extends Schema.Component {
  collectionName: 'components_common_documentos';
  info: {
    displayName: 'Documento';
    icon: 'file';
    description: '';
  };
  attributes: {
    Arquivo: Attribute.Media & Attribute.Required;
    Nome: Attribute.String & Attribute.Required & Attribute.Unique;
    Data: Attribute.Date & Attribute.Required;
  };
}

export interface MediaImagem extends Schema.Component {
  collectionName: 'components_common_imagems';
  info: {
    displayName: 'Imagem';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    descricao: Attribute.String;
    data: Attribute.Date;
    arquivo: Attribute.Media & Attribute.Required;
    nome: Attribute.String & Attribute.Required;
  };
}

export interface PackSecaoDeLink extends Schema.Component {
  collectionName: 'components_block_secao_de_links';
  info: {
    displayName: 'ConjuntoLink';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Links: Attribute.Component<'link.bloco-link', true>;
    NomeDoConjunto: Attribute.String & Attribute.Required;
  };
}

export interface PackSection extends Schema.Component {
  collectionName: 'components_pack_sections';
  info: {
    displayName: 'Section';
  };
  attributes: {
    Institucional: Attribute.Enumeration<
      ['NossaHistoria', 'Apresentacao', 'Missao', 'Valores']
    >;
    Transparencia: Attribute.Enumeration<
      [
        'PainelDeTransparencia',
        'PlanoDeTrabalho',
        'EstatutoSocial',
        'Parcerias'
      ]
    >;
    Publicacoes: Attribute.Enumeration<
      ['RelatorioDeAtividadeAnual', 'Campanhas', 'Projetos', 'Noticias']
    >;
    Integridade: Attribute.Enumeration<
      ['InformacoesFinanceiras', 'CriticaSugestao', 'Certificados', 'Denuncia']
    >;
  };
}

export interface PostCategoria extends Schema.Component {
  collectionName: 'components_post_categorias';
  info: {
    displayName: 'categoria';
    description: '';
  };
  attributes: {
    categoria: Attribute.Enumeration<
      ['campanha', 'noticia', 'projeto', 'comunicado']
    > &
      Attribute.Required;
  };
}

export interface PostTexto extends Schema.Component {
  collectionName: 'components_post_textos';
  info: {
    displayName: 'Par\u00E1grafo';
    description: '';
  };
  attributes: {
    Texto: Attribute.Text & Attribute.DefaultTo<'...'>;
    TituloTexto: Attribute.String & Attribute.Required;
    DocumentodaPostagem: Attribute.Component<'media.documento', true>;
    ImagemDaPostagem: Attribute.Component<'media.imagem', true>;
  };
}

export interface PostTitulo extends Schema.Component {
  collectionName: 'components_post_titulos';
  info: {
    displayName: 'Titulo';
    icon: 'italic';
    description: '';
  };
  attributes: {
    texto: Attribute.String &
      Attribute.Required &
      Attribute.DefaultTo<'Escreva aqui o T\u00EDtulo da Postagem'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'documento.tipo': DocumentoTipo;
      'link.bloco-link': LinkBlocoLink;
      'media.documento': MediaDocumento;
      'media.imagem': MediaImagem;
      'pack.secao-de-link': PackSecaoDeLink;
      'pack.section': PackSection;
      'post.categoria': PostCategoria;
      'post.texto': PostTexto;
      'post.titulo': PostTitulo;
    }
  }
}
