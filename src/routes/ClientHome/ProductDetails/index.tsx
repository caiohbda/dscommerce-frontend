import "./styles.css";
import { ButtonPrimary } from "../../../components/ButtonPrimary";
import { ButtonInverse } from "../../../components/ButtonInverse";
import { ProductDetailsCard } from "../../../components/ProductDetailsCard";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ProductDTO } from "../../../models/product";
import * as productService from "../../../services/product-service";

export const ProductDetails = () => {
  const params = useParams();

  const [product, setProduct] = useState<ProductDTO>();

  useEffect(() => {
    productService
      .findById(Number(params.productId))
      .then((response) => {
        console.log(response.data);
        setProduct(response.data);
      })
      .catch((error) => console.error("Erro ao buscar produto:", error));
  }, []);

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
