import Styles from "./error-message.module.scss";

const ErrorMessage = ({ message }) => {
  return <h2 className ={Styles.errorMessage}>{message}</h2>;
};

export default ErrorMessage;
