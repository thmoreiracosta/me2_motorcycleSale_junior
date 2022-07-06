import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import { SubscribeStyle } from "./SubscribeStyle";
import motoHome from '../../assets/Kawasaki-Ninja-H2R.jpg'


export default function Subscribe() {
  // const navigate = useNavigate();

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');

  return (
    <SubscribeStyle>
      <Header />

      <div>
        <div id="_one">
          <div id="_two">
            <h1>
              Check out the best motorcycle deals on the national and international market!
            </h1>
            <p>
              We have several models from different brands, for you to choose from, in a practical and unbureaucratic way for you who are passionate about speed.
            </p>
            <div id="accredited">
              <h4>
                Accredited Online Reseller:
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
              Register or login to access the store area.
            </strong>
            <img
              id="img-moto"
              src={motoHome}
              alt="moto-kawasaki-verde" />
          </div>
        </div>
      </div>

    </SubscribeStyle >
  )
}

