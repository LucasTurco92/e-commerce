import Container from "../../src/components/container/container.component";
import SearchBox from "../../src/components/search-box/search-box.component";
import BreadCrumb from "../../src/components/breadcrumb/breadcrumb.component";
import ItemDetails from "../../src/components/item-details/item-details.component";
import axios from "axios";
import ErrorMessage from "../../src/components/error-message/error-message.component";

const Item = ({ result }) => {
  const { categories, item } = result;

  return (
    <Container title={item.title}>
      <SearchBox />
      <BreadCrumb categories={categories} />
      {item.id ? (
        <ItemDetails item={item}/>
      ) : (
        <ErrorMessage message={item.title} />
      )}
    </Container>
  );
};

Item.getInitialProps = async (cxt) => {
  const { id } = cxt.query;

  const rsItem = await axios.get(`${process.env.API_BASE_URL}/api/items/${id}`);

  return {
    result: rsItem.data,
  };
};

export default Item;
