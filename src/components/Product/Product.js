import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.sizes[0].additionalPrice + props.basePrice);

  const getPrice = useMemo(() => {
    return currentPrice;
  }, [currentPrice]);

  return (
    <article className={styles.product}>
      <ProductImage title={props.title} name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <ProductOptions
          {...props}
          setCurrentColor={setCurrentColor}
          setCurrentSize={setCurrentSize}
          setCurrentPrice={setCurrentPrice}
          currentSize={currentSize}
          currentPrice={currentPrice}
          currentColor={currentColor}
          getPrice={getPrice}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  sizes: PropTypes.array.isRequired,
};
export default Product;
