import "./styles.css";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { ButtonInverse } from "../../../components/ButtonInverse";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard";
import * as productService from "../../../services/product-service";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

export const ProductDetails = () => {
  const params = useParams();

  const product = productService.findById(Number(params.productId));
  return (
    <main>
      <section id="product-details-section" className="dsc-container">
        {product && <ProductDetailsCard product={product} />}
        <div className="dsc-btn-page-container">
          <ButtonPrimary name="Comprar" />
          <Link to="/">
            <ButtonInverse name="Inicio" />
          </Link>
        </div>
      </section>
    </main>
  );
};
