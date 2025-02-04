import "./styles.css";
import { SearchBar } from "../../../components/SearchBar";
import { CatalogCard } from "../../../components/CatalogCard";
import { ButtonNextPage } from "../../../components/ButtonNextPage";
import { ProductDTO } from "../../../models/product";
import { useEffect, useState } from "react";
import * as productService from "../../../services/product-service";

export const Catalog = () => {
  const [products, setProducts] = useState<ProductDTO[]>([]);

  useEffect(() => {
    productService
      .findAll()
      .then((response) => {
        setProducts(response.data.content);
      })
      .catch((error) => {
        console.error("Erro ao buscar produtos:", error);
      });
  }, []);

  return (
    <main>
      <section id="catalog-section" className="dsc-container">
        <SearchBar />
        <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
          {products.map((product) => (
            <CatalogCard key={product.id} product={product} />
          ))}
        </div>
        <ButtonNextPage />
      </section>
    </main>
  );
};
