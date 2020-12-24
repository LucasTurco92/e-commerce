import { useState,useEffect,useRef } from 'react';
import { useRouter } from 'next/router';
import Styles from './search-box.module.scss';
import Link from 'next/link';

const SearchBox = ({ value }) => {
  const [inputItem, setInputItem] = useState(value || '');
  const href = '/items';
  const router = useRouter();
  const inputElement = useRef(null);

  useEffect(() => {
    if (inputElement.current) {
      inputElement.current.focus();
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: href,
      query: { search: inputItem },
    });
  };

  return (
    <form className={Styles.searchBoxContainer} onSubmit={handleSubmit}>
      <Link href='/'>
      <a>
        <img 
        className={Styles.logo}
        src='/Logo_ML.png'
        alt='meliturco' />
      </a>
    </Link>
      <input
        className={Styles.searchBox}
        type='text'
        placeholder='Nunca dejes de buscar'
        tabIndex='1'
        value={inputItem}
        onChange={(e) => setInputItem(e.target.value)}
        ref={inputElement}
      />
      <button className={Styles.customButton} type='submit' tabIndex='2'>
        <img src='/ic_Search.png' alt='search' />
      </button>
    </form>
  );
};

export default SearchBox;
