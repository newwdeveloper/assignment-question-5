import "./App.css";

function Product() {
  return (
    <div className="App">
      <div className="img-container">
        <img
          className="image"
          src="https://images.pexels.com/photos/205926/pexels-photo-205926.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="product "
        />
      </div>

      <h2 className="product-name">Headphones|High Base Clear Sound</h2>
      <p id="first">
        The flagship-level battery life for all new onePlus Nord buds 2r
        delivery upto 38 hrs of nonstop Music in a single charge
      </p>
      <p id="second">5000/- Rs</p>
      <button id="btn">Buy Now</button>
    </div>
  );
}

export default Product;
