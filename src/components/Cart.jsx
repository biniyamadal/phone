import React from 'react';
import './Cart.css';
import { Link } from 'react-router-dom';

function Cart({ cartItem, setCartItem }) {

  // Increment quantity
  function inc(Services) {
    const exist = cartItem.find((x) => x.id === Services.id);
    setCartItem(cartItem.map((item) => item.id === Services.id ? { ...exist, quantity: exist.quantity + 1 } : item));
  }

  // Decrement quantity
  function dec(Services) {
    const exist = cartItem.find((x) => x.id === Services.id);
    setCartItem(cartItem.map((item) => item.id === Services.id ? { ...exist, quantity: exist.quantity - 1 } : item));
  }

  // Remove product
  function removeCart(Services) {
    const exist = cartItem.find((x) => x.id === Services.id);
    if (exist.quantity > 0) {
      setCartItem(cartItem.filter((x) => x.id !== Services.id));
    }
  }

  // Calculate total price
  const totalPrice = cartItem.reduce((price, item) => price + item.quantity * item.price, 0);


  return (
    <>
      <br /><br /><br />
      {cartItem.length === 0 ? (
        <>
          <h2 className='empty_cart'>Cart Is Empty. Please Select a Product</h2>
          <Link to="/Services">
            <button className='cart_shop'>Shop Now</button>
          </Link>
        </>
      ) : (
        <div className='cart_container'>
          <div className="cart_product">
            {cartItem.map((item) => (
              <div className="cart_box" key={item.id}>
                <div className="cart_product_container">
                  <div className="cart_img-box">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="carrt_item_detail">
                    <h2>{item.name}</h2>
                    <h3>price: {item.price} ETB</h3>
                    <button className='quantity_dec' onClick={() => dec(item)}>-</button>
                    <input type="text" value={item.quantity} readOnly />
                    <button className='quantity_inc' onClick={() => inc(item)}>+</button>
                    <h3>Sub Total: {item.price * item.quantity} ETB</h3>
                  </div>
                  <button className='remove_cart' onClick={() => removeCart(item)}>X</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {cartItem.length > 0 && (
        <>
          <p className='cart_total'>Total:{totalPrice}ETB</p><br/>
          <Link to='/payment' className='checkout'>CheckOut</Link>
        </>
      )}
    </>
  );
}

export default Cart;
