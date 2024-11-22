import { CardStyle } from "./CardStyle";
import card1 from '../../assets/Kawasaki-H2-SX-2018-1.jpg'
import card2 from '../../assets/ducati-red.jpg'
import card3 from '../../assets/kawasaki_ninja_h2r_2015_02.jpg'
import { Link } from "react-router-dom";
import { Moto } from "../../types/moto";

type Props = {
  moto: Moto;
}

export default function Card({ moto }: Props) {
  return (
    <CardStyle>
      <div>
        <img
          className="dsmovie-movie-card-image"
          src={moto.image}
          alt={moto.title}
        />
        <div className="dsmovie-card-bottom-container">
          <h3>{moto.title}</h3>        

          <Link to={`/home/${moto.id}`}>
            <div className="btn btn-primary dsmovie-btn">Avaliar</div>
          </Link>
        </div>
      </div>
    </CardStyle>
  )
}