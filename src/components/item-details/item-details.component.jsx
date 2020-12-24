import Button from "../button/button.component";
import Styles from "./item-details.module.scss";

const ItemDetails = ({ item, description }) => {
  const {
    id,
    title,
    picture,
    price,
    condition,
    sold_quantity,
  } = item;

  return (
    <div className={Styles.itemDetailsContainer}>
      <div className={Styles.itemDetails}>
        <div className={Styles.leftDetails}>
          <img src={picture} alt={id} />
        </div>
        <div className={Styles.rightDetails}>
          <span className={Styles.conditionAndSolds}>
            {condition == "new" ? "nuevo" : "usado"} - {sold_quantity} vendidos
          </span>
          <span className={Styles.title}>{title}</span>
          <span className={Styles.price}>{`$ ${price.amount}`}</span>
          <Button text="comprar" />
        </div>
        <div className={Styles.bottomDetails}>
          <span className={Styles.descriptionTitle}>{"Descripción del producto"}</span>
          <div className={Styles.description}>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
