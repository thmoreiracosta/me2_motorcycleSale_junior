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

      <div className="container">
        <div className="row">
          {page.content.map(moto => (
            <div key={moto.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4">
              <Card moto={moto} />
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </HomeStyle>
  )
} 