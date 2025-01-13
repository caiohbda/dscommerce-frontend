import "./styles.css";

type props = {
  name: string;
};

export const ButtonInverse = ({ name }: props) => {
  return <div className="dsc-btn dsc-btn-white">{name}</div>;
};
