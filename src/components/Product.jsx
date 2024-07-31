import React from 'react';

const Product = ({ product, onAddToCart, inCart }) => {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4">

      {/* Card elements start*/}
      <div className="card card-eff h-100">

        <div class="h-75">
          <img src={product.img} className="card-img-top object-fit-cover img-fluid" alt={product.name} />
        </div>

        <div className="card-body text-center">

          <h5 className="card-title">{product.name}</h5>

          <p className="card-text">{product.description}</p>

          <div className="card-text">
            {product.oldPrice && <span className="text-muted text-decoration-line-through">{product.oldPrice}</span>}
            <span className="fw-bold"> ₹{(product.price).toLocaleString('en-IN')}</span>
          </div>

          {product.rating && <div className="card-text">{"★".repeat(product.rating)}</div>}

          <a href="#"><button className="btn btn-warning w-75 rounded-pill mt-2" onClick={() => onAddToCart(product)}>
            {inCart ? 'Remove from Cart' : 'Add to Cart'}
          </button></a>

        </div>

      </div>
      {/* Card elements end*/}


    </div>
  );
};

export default Product;
