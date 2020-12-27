import FreeShipping from "../free-shipping/free-shipping.component";
import LinkedElement from "../linked-element/linked-element.component";
import Styles from "./item.module.scss";

const Item = ({ item }) => {
  const { title, price, picture, free_shipping, address, id } = item;
  const route = `items`;
  
  return (
    <div className={Styles.itemContainer}>
      <LinkedElement route={route} id={id}>
        <div className={Styles.pictureBox}>
          <img src={picture} alt={title} />
        </div>
      </LinkedElement>
      <div className={Styles.detailsContainer}>
        <div className={Styles.detailsContainerLeft}>
          <div className={Styles.priceContainer}>
            <span className={Styles.price}>$ {price.amount}</span>
            {free_shipping && <FreeShipping />}
          </div>
          <LinkedElement route={route} id={id}>
            <span>{title}</span>
          </LinkedElement>
        </div>
        <div className={Styles.detailsContainerRight}>
          <div className={Styles.address}>{address}</div>
        </div>
      </div>
    </div>
  );
};

export default Item;
