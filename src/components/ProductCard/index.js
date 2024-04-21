import './index.css';

const ProductCard = ({ image, title, price }) => {
    return (
      <div className="product-card">
        <div className="product-img" >
            <img src={image} alt={`Picture of ${title}`} />
        </div>
        <div>
            <h3 className='product-title'>{title}</h3>
            <p className='product-price'>${price}</p>
        </div>
      </div>
    );
  };
  export default ProductCard