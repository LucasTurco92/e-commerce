import Router from "next/router";
import Styles from "./linked-element.module.scss";

const LinkedElement = (props) => {
  const { route, id } = props;
  const handleOnClick = () => {
    Router.push(`/${route}/[id]`, `/${route}/${id}`);
  };

  return (
    <div className={Styles.linkedElementContainer} onClick={handleOnClick}>
      {props.children}
    </div>
  );
};
export default LinkedElement;
