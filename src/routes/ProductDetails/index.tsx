import "./styles.css";
import { HeaderClient } from "../../components/HeaderClient";
import { ButtonPrimary } from "../../components/ButtonPrimary";
import { ButtonInverse } from "../../components/ButtonInverse";
import { ProductDetailsCard } from "../../components/ProductDetailsCard";
export const ProductDetails = () => {
  return (
    <>
      <HeaderClient />
      <main>
        <section id="product-details-section" className="dsc-container">
          <ProductDetailsCard />
          <div className="dsc-btn-page-container">
            <ButtonPrimary />
            <ButtonInverse />
          </div>
        </section>
      </main>
    </>
  );
};
