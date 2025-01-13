import "./styles.css";

type props = {
  name: string;
};

export const ButtonPrimary = ({ name }: props) => {
  return <div className="dsc-btn dsc-btn-blue">{name}</div>;
};
