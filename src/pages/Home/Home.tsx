import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { HomeStyle } from "./HomeStyle";

export default function Home() {
  return (
    <HomeStyle>      
      <Header />
      <section>
        <div>
          <div>
            <div>
              <h1>welcome</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati voluptates nihil, sunt nemo fugit iusto sed. Quisquam quasi dolore, nulla similique, neque amet suscipit, inventore recusandae beatae tempora exercitationem quidem!</p>              
            </div>
          </div>
        </div>
      </section>
      <Card />
      
      <Footer />
    </HomeStyle>
  )
} 