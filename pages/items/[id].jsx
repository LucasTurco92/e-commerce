import Container from "../../src/components/container/container.component";
import SearchBox from "../../src/components/search-box/search-box.component";
import BreadCrumb from "../../src/components/breadcrumb/breadcrumb.component";
import ItemDetails from "../../src/components/item-details/item-details.component";
import axios from "axios";

const Item = ({ result }) => {
  const { categories, details, description } = result;
  const itemDetails = details.item;

  return (
    <Container title={itemDetails.title}>
      <SearchBox />
      <BreadCrumb categories={categories} />
      <ItemDetails item={itemDetails} description={description} />
    </Container>
  );
};

Item.getInitialProps = async (cxt) => {
  const { id } = cxt.query;

  const rsItemDetails = await axios.get(
    `${process.env.API_BASE_URL}/api/items/${id}`
  );

  return {
    result: rsItemDetails.data,
  };
};

export default Item;
