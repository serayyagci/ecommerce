import React, { useEffect } from 'react';
import { addToCart, removeFromCart } from '../actions/cartActions';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import MessageBox from '../components/MessageBox';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const dispatch = useDispatch();
    useEffect(() => {
      if (productId) {
        dispatch(addToCart(productId, qty));
        
      }
    }, [dispatch, productId, qty]);
    const removeFromCartHandler = (id) => {
        // delete action
        dispatch(removeFromCart(id));

      };
    
      const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
      };
  return (
    <div className="row top">
      <div className="col-2">
        <h1>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <MessageBox>
          <h1> Cart is empty. <Link to="/">Go Shopping</Link></h1> 
          </MessageBox>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.product}>
                <div className="row cart">
                  <div>
                  <Link to={`/product/${item.product}`}>
                    <img
                      src={item.image}
                      alt={item.name}
                      className="small"
                    ></img></Link>
                  </div>
                  <div className="min-30">
                   <h2> <Link to={`/product/${item.product}`}>{item.name}</Link></h2>
                  </div>
                  <div>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        dispatch(
                          addToCart(item.product, Number(e.target.value))
                        )
                      }
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div><h2>${item.price}</h2></div>
                  <div>
                    <button
                      type="button " className="primary delete"
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                    <h2>Delete</h2>  
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="col-1">
        <div className="card card-body">
          <ul>
            <li>
              <h2 className="subtotal">
                Subtotal ({cartItems.reduce((a, c) => a + c.qty, 0)} items) : $
                {cartItems.reduce((a, c) => a + c.price * c.qty, 0)}
              </h2>
            </li>
            <li>
              <button
                type="button"
                onClick={checkoutHandler}
                className="primary block"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}