import Header from "../../components/Header/Header";
import { IndexStyle } from "./IndexStyle";
import motoHome from '../../assets/Kawasaki-Ninja-H2R.jpg'

export default function Index() {

  return (
    <IndexStyle>
      <Header />
      <div>
        <div id="_one">
          <div id="_two">
            <h1>
              Confira as melhores ofertas aqui na <b id="destack">TMMotos Brazil</b>, as melhores do mercado nacional e internacional!
            </h1>
            <p>
              Temos diversos modelos de diferentes marcas, para você escolher, de forma prática e sem burocracia para você que é apaixonado por velocidade em duas rodas.
            </p>
            <div id="accredited">
              <h4>
                Revendedor Credenciado:
              </h4>
              <div id="accredited-onli">
                <a
                  href="https://social-media-shortcuts-thmoreiracosta.vercel.app/"
                  target="_new"
                >
                  <img
                    id="image-accredited"
                    src="https://www.github.com/thmoreiracosta.png"
                    alt="Foto perfil professor Thiago Costa" />
                </a>

                <div id="name-accredited">
                  <h5>
                    Thiago Costa
                  </h5>
                  <span>
                    @thmoreiracosta - Front-end Developer
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div id="container-subscribe">
            <strong>
              Cadastre-se ou faça login para acessar a área da loja e conferir todos os nossos modelos.
            </strong>
            <img
              id="img-moto"
              src={motoHome}
              alt="moto-kawasaki-verde"
            />
            <div id="button-container">
              <ul>
                <li>
                  <a className="button" href="/user/login">Iniciar sessão</a>
                </li>
              </ul>
              <ul>
                <li>
                  <a className="button" href="/user/register">Inscreva-se</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </IndexStyle >
  )
}

