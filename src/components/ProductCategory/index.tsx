import "./styles.css";

type props = {
  name: string;
};

export const ProductCategory = ({ name }: props) => {
  return <div className="dsc-category">{name}</div>;
};
