import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { HomeStyle } from "./HomeStyle";

export default function Home() {
  return (
    <HomeStyle>      
      <Header />
      <Card />
      <h1>home vendas</h1>
      <h3>Testando</h3>
      <Footer />
    </HomeStyle>
  )
} 