import "../Post.css";

const Apresentacao = () => {
  return (
    <div className="post-main">
      <div className="post-stamp">
      </div>
      <h1 className="post-title">Conheça um pouco da nossa história</h1>
      <p className="post-text">
        Associação Viver surgiu na década de 1990. É fruto de uma semente
        plantada por missionários da Igreja Presbiteriana do Cruzeiro, que
        sensibilizados e movidos pelo amor cristão, mobilizaram-se para suprir
        necessidades básicas de crianças e seus familiares que tiravam o seu
        sustento do lixo e moravam em barracos em meio ao aterro sanitário de
        Brasília, Distrito Federal.
      </p>
      <p className="post-text">
        Desde então, a Associação Viver vem prestando atendimento à comunidade
        da Cidade Estrutural – DF, conquistando o respeito e admiração das
        famílias e o apoio de muitos parceiros que abraçam a causa.
      </p>
      <p className="post-text">
        São quase 27 anos de existência, contribuindo, assim, para uma formação
        cidadã, o desenvolvimento e o protagonismo social da comunidade.
      </p>
      <p className="post-text">
        Hoje, a Associação Viver é uma organização não governamental, sem fins
        lucrativos, que tem por finalidade o serviço de assistência social com a
        promoção da educação, esporte, cultura e lazer.
      </p>
      <p className="post-text">
        O trabalho desenvolvido na Associação Viver ocorre no contraturno
        escolar e visa o fortalecimento de vínculos familiares e comunitários,
        formação para a participação e cidadania, desenvolvimento do
        protagonismo e da autonomia de crianças, adolescentes e suas famílias.
      </p>
      <p className="post-text">
        As crianças e adolescentes recebem duas refeições por dia, desde 2006 a
        Associação Viver manteve um Convênio com o Governo do Distrito Federal,
        infelizmente essa parceria foi encerrada em 30/06/2023.
      </p>
      <p className="post-text">
        A Igreja Presbiteriana do Cruzeiro é a entidade mantenedora, oferecendo
        o suporte necessário para o seu funcionamento e direcionando o
        planejamento estratégico. Outras pessoas físicas e jurídicas também
        participam fazendo, eventualmente, doações financeiras, doação de
        alimentos, brinquedos, voluntariado e doações de materiais necessários
        para o desenvolvimento das atividades socioeducativas.
      </p>
      <p className="post-text">
        Todos os usuários tem oportunidade de adquirir conhecimentos e
        habilidades para transformarem a realidade social em que estão
        inseridos. O serviço prestado pela Associação Viver é totalmente
        gratuito e, é uma referência para a Região Administrativa da Cidade
        Estrutural.
      </p>

      <p className="post-text-link">
        Para se tornar um doador da Associação Viver, 
        <span>
          <a href="./" className="post-link">
            clique aqui
          </a>
        </span>
      </p>
      <div className="post-stamp">
      </div>
    </div>
  );
};

export default Apresentacao;
