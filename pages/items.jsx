import Container from "../src/components/container/container.component";
import axios from "axios";
import BreadCrumb from "../src/components/breadcrumb/breadcrumb.component";
import SearchBox from "../src/components/search-box/search-box.component";
import ItemsResults from "../src/components/items-results/items-results.component";
import ErrorMessage from "../src/components/error-message/error-message.component";

const Items = ({ result }) => {
  const { title, categories, search, items } = result;
  return (
    <Container title={title}>
      <SearchBox value={search} />
      <BreadCrumb categories={categories} />
      {items.length > 0 ? <ItemsResults items={items} /> : <ErrorMessage message={title} />}
    </Container>
  );
};

Items.getInitialProps = async (ctx) => {
  const search = ctx.query.search;

  const res = await axios.get(
    `${process.env.API_BASE_URL}/api/items?search=${search}`
  );
 
  return { result: res.data };
};

export default Items;
