import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";
import { LoginStyle } from "./LoginStyle";

export default function Login() {
  return (
    <LoginStyle>
      <Header />
      <div id="container-geral">
        <div id="container-login">
          <div>
            <div id="div-logo" >
              <svg id="logo-svg-1"
                xmlns="http://www.w3.org/2000/svg"
                width="100"
                height="50"
                fill="currentColor"
                className="bi bi-shop"
                viewBox="0 0 16 16">
                <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z" />
              </svg>
              <a id="link-logo" href="/">TMMotos Brazil</a>
            </div>
            <div id="container-buttons">
              <button id="button-google" type="button">
                <svg
                  aria-hidden="true"
                  className="native svg-icon iconGoogle"
                  width="35"
                  height="25"
                  viewBox="0 0 18 18">
                  <path d="M16.51 8H8.98v3h4.3c-.18 1-.74 1.48-1.6 2.04v2.01h2.6a7.8 7.8 0 0 0 2.38-5.88c0-.57-.05-.66-.15-1.18Z"
                    fill="#4285F4">
                  </path>
                  <path d="M8.98 17c2.16 0 3.97-.72 5.3-1.94l-2.6-2a4.8 4.8 0 0 1-7.18-2.54H1.83v2.07A8 8 0 0 0 8.98 17Z"
                    fill="#34A853">
                  </path>
                  <path d="M4.5 10.52a4.8 4.8 0 0 1 0-3.04V5.41H1.83a8 8 0 0 0 0 7.18l2.67-2.07Z"
                    fill="#FBBC05">
                  </path>
                  <path d="M8.98 4.18c1.17 0 2.23.4 3.06 1.2l2.3-2.3A8 8 0 0 0 1.83 5.4L4.5 7.49a4.77 4.77 0 0 1 4.48-3.3Z"
                    fill="#EA4335"></path>
                </svg>
                Faça login com o Google
              </button>
              <button id="button-github" type="button">
                <svg
                  aria-hidden="true"
                  className="svg-icon iconGitHub"
                  width="35"
                  height="25"
                  viewBox="0 0 18 18">
                  <path
                    d="M9 1a8 8 0 0 0-2.53 15.59c.4.07.55-.17.55-.38l-.01-1.49c-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82a7.42 7.42 0 0 1 4 0c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48l-.01 2.2c0 .21.15.46.55.38A8.01 8.01 0 0 0 9 1Z"
                    fill="#ffffff">
                  </path>
                </svg>
                Faça login com o Github
              </button>
              <button id="button-facebook" type="button">
                <svg
                  aria-hidden="true"
                  className="svg-icon iconFacebook"
                  width="35"
                  height="25"
                  viewBox="0 0 18 18">
                  <path
                    d="M3 1a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3Zm6.55 16v-6.2H7.46V8.4h2.09V6.61c0-2.07 1.26-3.2 3.1-3.2.88 0 1.64.07 1.87.1v2.16h-1.29c-1 0-1.19.48-1.19 1.18V8.4h2.39l-.31 2.42h-2.08V17h-2.5Z"
                    fill="#ffffff">
                  </path>
                </svg>
                Faça login com o Facebook
              </button>
            </div>
            <div id="form-container">
              <form action="">
                <div id="email-container">
                  <label htmlFor="">Email</label>
                  <div>
                    <input
                      id="input"
                      placeholder="Seu email aqui..."
                      required
                      type="text"
                    />
                  </div>
                </div>
                <div>
                  <div id="label-senha">
                    <label htmlFor="">Senha</label>
                    <a href="#">Esqueceu a senha?</a>
                  </div>
                  <div>
                    <input
                      id="input"
                      placeholder="Digite sua senha..."
                      required
                      type="text"
                    />
                  </div>
                  <div>
                    <button id="button-login" type="submit">
                      Iniciar sessão
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div id="links-container">
              <span>
                <p>Não tem inscrição?
                  <a
                    href="/user/register">                  
                    Inscrição
                  </a>
                </p>
              </span>
              <span>
                <p>Você é um revendedor?
                  <a
                    href="#">
                    Acesse a área cooporativa
                    <svg
                      aria-hidden="true"
                      className="va-text-bottom sm:d-none svg-icon iconShareSm"
                      width="16"
                      height="14"
                      viewBox="0 0 14 14"
                    >
                      <path
                        d="M5 1H3a2 2 0 0 0-2 2v8c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V9h-2v2H3V3h2V1Zm2 0h6v6h-2V4.5L6.5 9 5 7.5 9.5 3H7V1Z"
                        fill="#1A73E8">
                      </path>
                    </svg>
                  </a>
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </LoginStyle>
  )
}