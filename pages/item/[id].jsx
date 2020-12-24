import Container from "../../src/components/container/container.component";
import SearchBox from "../../src/components/search-box/search-box.component";
import BreadCrumb from "../../src/components/breadcrumb/breadcrumb.component";
import ItemDetails from "../../src/components/item-details/item-details.component";
import { getItemDetails,getItemDescription ,getItemCategories } from "../../src/utils/item";
import axios from "axios";

const Item = ({ item, categories, description }) => {
  const { title } = item;

  return (
    <Container title={title}>
      <SearchBox />
      <BreadCrumb categories={categories} />
      <ItemDetails item={item} description={description}/>
    </Container>
  );
};

Item.getInitialProps = async (cxt) => {
  const endPointMeli = process.env.MELI_SEARCH_URL;
  
  const { id } = cxt.query;

  const rsItem = await axios.get(`${endPointMeli}/items/${id}`);

  const itemDetails = getItemDetails(rsItem);

  const thereIsAResultItem = itemDetails.item != "";

  const description =
  thereIsAResultItem
      ? getItemDescription(
          await axios.get(`${endPointMeli}/items/${id}/description`)
        )
      : "";

  const categories =
  thereIsAResultItem
      ? getItemCategories(
          await axios.get(
            `${endPointMeli}/categories/${itemDetails.item.category}`
          )
        )
      : [];

  return {
    id: id,
    item: itemDetails.item,
    categories: categories,
    description: description,
  };
};

export default Item;
