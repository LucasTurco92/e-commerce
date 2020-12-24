import Styles from "./button.module.scss";

const Button = ({ text }) => {
  return <div className={Styles.buttonContainer}><span className={Styles.buttonText}>{text}</span></div>;
};

export default Button;
