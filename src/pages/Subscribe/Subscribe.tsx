import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { SubscribeStyle } from "./SubscribeStyle";


export default function Subscribe() {
  // const navigate = useNavigate();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  return (
    <SubscribeStyle>
      <Header />
      <div id="_one">
        <div id="_two">
          <h1>
            Seja bem-indo(a)! Feito exclusivo para você que deseja comprar sua moto online!
          </h1>
          <p>
            Aqui você vai encontrar o que busca.
            Temos vários modelos de diversas marcas, para sua escolha,
            de forma prática e sem burocracia para você que é apaixonado por velocidade.
          </p>
        </div>

        <div>
          <div>
          </div>
          <div>
            <a
              href="https://social-media-shortcuts-thmoreiracosta.vercel.app/"
              target="_new"
            >
              <img
                src="https://www.github.com/thmoreiracosta.png"
                alt="Foto perfil professor Thiago Costa" />
            </a>
          </div>
          <div>
            <p>
              Revendedor Online Credenciado:
            </p>
            <h5>
              Thiago Costa
            </h5>
            <span>
              @thmoreiracosta - Front-end Developer
            </span>
          </div>
        </div>
        <div>
          <strong>
            Cadastre-se gratuitamente para acessar a área de membros e escolher sua moto.
          </strong>
          <form action="">
            <input
              type="text"
              placeholder="Seu nome completo..."
              required={true}
              onChange={event => setName(event.target.value)}
            />
          </form>
        </div>
      </div>

    </SubscribeStyle>
  )
}

