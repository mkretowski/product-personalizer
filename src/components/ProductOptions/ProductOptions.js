import styles from './ProductOptions.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import PropTypes from 'prop-types';
const ProductOptions = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentPrice = props.getPrice();
    console.log(
      'SUMMARY:',
      '\n',
      'name:',
      props.title,
      '\n',
      'price:',
      currentPrice,
      '\n',
      'color:',
      props.currentColor,
      '\n',
      'size:',
      props.currentSize
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <OptionSize {...props} />
      <OptionColor {...props} />
      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductOptions.propTypes = {
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
  currentSize: PropTypes.string.isRequired,
  getPrice: PropTypes.func.isRequired,
};

export default ProductOptions;
