import "../Post.css";
const Error = () => {
  return (
    <>
      <div className="error-main">
        <h1>Erro 404</h1>
        <p className="post-text">
          Se você estiver tentando ver algum arquivo, provavelmente ele está
          fora do ar. Neste caso, o melhor a se fazer é contactar o suporte e
          fechar esta janela.
        </p>
        <p className="post-text">
          Se você estiver tentando ver uma página, algo nela está de errado e
          com isso ela não aparecerá. Mas não se desespere! Neste úlitmo caso em
          questão, você pode clicar no botão abaixo para voltar para a página
          principal!
        </p>
        <div className="return-message">
          <a className="return-link" href="/">
            Para voltar á página principal, clique aqui
          </a>
        </div>
      </div>
    </>
  );
};

export default Error;
