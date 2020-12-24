import Head from "next/head";
import Styles from "./container.module.scss";

const Container = (props) => {
  const { title } = props;
  {
    return (
      <div className={Styles.container}>
        <Head>
          <title>{`meliturco - ${title}`}</title>
          <link rel="icon" href="/favicon.svg" />
        </Head>
        {props.children}
      </div>
    );
  }
};

export default Container;
