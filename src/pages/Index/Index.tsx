import Header from "../../components/Header/Header";
import { IndexStyle } from "./IndexStyle";
import motoHome from '../../assets/Kawasaki-Ninja-H2R.jpg'
import Footer from "../../components/Footer/Footer";


export default function Index() {

  return (
    <IndexStyle>
      <Header />
      <div>
        <div id="_one">
          <div id="_two">
            <h1>
              Check out the best <b id="destack">motorcycle</b> deals on the national and international market!
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
              Register or login to access the store area and check out all our models.
            </strong>
            <img
              id="img-moto"
              src={motoHome}
              alt="moto-kawasaki-verde"
            />
            <div id="button-container">
              <ul>
                <li>
                  <a id="button" href="/user/login">Log-in</a>
                </li>               
              </ul>
              <ul>
                <li>
                  <a id="button" href="/user/register">Register</a>
                </li>                
              </ul>
            </div>
          </div>
        </div>
      </div>     
    </IndexStyle >
  )
}

