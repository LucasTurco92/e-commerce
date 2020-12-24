import Item from "../item/item.component";
import Styles from "./items-results.module.scss";
const ItemsResults = ({items}) => {

  return (
    <div className={Styles.itemsResultsContainer}>
      <div className={Styles.itemsResults}>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
      </div>
    </div>
  );
};

export default ItemsResults;
