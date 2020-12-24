import Styles from "./breadCrumb.module.scss";

const BreadCrumb = ({ categories }) => {
  let count =  1;

  const getSeparator = count =>count ==  categories.length ? '' : '> ';

  return (
    <div className={Styles.breadCrumbsContainer}>
      <div className={Styles.breadCrumbs}>
        {categories.map((category) => (
          <div key={`${category}${count}`} className={Styles.breadCrumb}>
            {category} {getSeparator(count++)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BreadCrumb;
