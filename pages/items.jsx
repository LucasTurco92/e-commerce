import Container from "../src/components/container/container.component";
import axios from "axios";
import BreadCrumb from "../src/components/breadcrumb/breadcrumb.component";
import SearchBox from "../src/components/search-box/search-box.component";
import ItemsResults from "../src/components/items-results/items-results.component";

const Items = ({ result }) => {
  const { title, categories, search, searchResult } = result;
  return (
    <Container title={title}>
      <SearchBox value={search} />
      <BreadCrumb categories={categories} />
      <ItemsResults items={searchResult.items} />
    </Container>
  );
};

Items.getInitialProps = async (ctx) => {
  const search = "perros";

  const res = await axios.get(
    `${process.env.API_BASE_URL}/api/items?search=${search}`
  );
 
  return { result: res.data };
};

export default Items;
