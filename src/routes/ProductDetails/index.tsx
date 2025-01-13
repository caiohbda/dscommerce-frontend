import "./styles.css";
import { HeaderClient } from "../../components/HeaderClient";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonInverse } from "../../components/ButtonInverse";
import { ProductDetailsCard } from "../../components/ProductDetailsCard";
import { ProductDTO } from "../../models/product";

const product: ProductDTO = {
  id: 2,
  name: "Smart Tv",
  description: "Esta TV é bonita",
  imgUrl:
    "https://github.com/devsuperior/dscatalog-resources/blob/master/backend/img/2-big.jpg?raw=true",
  price: 2500.99,
  categories: [
    {
      id: 2,
      name: "Eletrônicos",
    },
    {
      id: 3,
      name: "Computadores",
    },
    {
      id: 4,
      name: "Importados",
    },
  ],
};

export const ProductDetails = () => {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard product={product} />
          <div className="dsc-btn-page-container">
            <ButtonPrimary name="Comprar" />
            <ButtonInverse name="Inicio" />
          </div>
        </section>
      </main>
    </>
  );
};
