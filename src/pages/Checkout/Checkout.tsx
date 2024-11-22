import Card from "../../components/Card/Card";
import Header from "../../components/Header/Header";
import { CheckoutStyle } from "./CheckoutStyle";

export default function Chekout() {
  return (
    <CheckoutStyle>
      <Header />
      <Card
        id={id}
        image={image}
        title={title}
        marca={marca}
        cilindrada={cilindrada} />

    </CheckoutStyle>
  )
}