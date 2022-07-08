import { CardStyle } from "./CardStyle";
import card1 from '../../assets/Kawasaki-H2-SX-2018-1.jpg'
import card2 from '../../assets/ducati-red.jpg'
import card3 from '../../assets/kawasaki_ninja_h2r_2015_02.jpg'

interface CardProps {
  image: string;
  name: string;
  marca: string;
  cilindrada: string;  
}

export default function Card(props: CardProps) {
  return (
    <CardStyle>
      <section>
        <div>
          <div>
            <div>
              <h1>
                adlakdlaskdalskdlaskdlaksd
              </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis officiis inventore eius. Officia voluptatibus quae architecto amet ab consequuntur labore perspiciatis harum? Soluta eum architecto impedit, minus nesciunt laudantium eos.
              </p>
            </div>
          </div>
          <div>
            <div>
              <div>
                <img src={card1} alt="" />
                <div>
                  <h3>asdadafdasfdasfdasdfasdf</h3>
                  <p>asdfasdfasfasdfasdfasdfasdfasdfasdfasdfasfdasdfadfasdf</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={card2} alt="" />
                <div>
                  <h3>asdadafdasfdasfdasdfasdf</h3>
                  <p>asdfasdfasfasdfasdfasdfasdfasdfasdfasdfasfdasdfadfasdf</p>
                </div>
              </div>
            </div>
            <div>
              <div>
                <img src={card3} alt="" />
                <div>
                  <h3>asdadafdasfdasfdasdfasdf</h3>
                  <p>asdfasdfasfasdfasdfasdfasdfasdfasdfasdfasfdasdfadfasdf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </CardStyle>
  )
}