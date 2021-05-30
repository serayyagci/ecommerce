import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';



export default function HomeScreen(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const [qty, setQty] = useState(1);
    const productDetails = useSelector((state) => state.productDetails);
    const { loading, error, product } = productDetails;
    const [selectedImage, setSelectedImage] = useState('');

  
    useEffect(() => {
      dispatch(detailsProduct(productId));
    }, [dispatch, productId]);
    const addToCartHandler = () => {
      props.history.push(`/cart/${productId}?qty=${qty}`);
    };
    const changeImage = (image) => {
      setSelectedImage(image);
    };
    return (
        <div>
            {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <Link to="/"><h2 className="header-text">Back to results</h2></Link>
          <div className="row top product-screen">
            <div className="col-2 image">
            <img
                className="large"
                src={selectedImage || product.image}
                alt={product.name}
              />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  ></Rating>
                </li>
                <li><h1>Price : ${product.price}</h1></li>
                <li>
                 <h1> Description:
                  <p>{product.description}</p></h1>
                </li>
                <li>
                  <h1>Images:</h1>
                  <ul className="images">
                    {[product.image, ...product.images].map((x) => (
                      <li key={x}>
                        <button
                          type="button"
                          className="light"
                          onClick={() => changeImage(x)}
                        >
                          <img src={x} alt="product" className="small" />
                        </button>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row prod-det">
                      <div><h1>Price</h1></div>
                      <div className="price">${product.price}</div>
                    </div>
                  </li>
                  <li>
                    <div className="row prod-det">
                      <div><h1>Status</h1></div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success"><h1>In Stock</h1></span>
                        ) : (
                          <span className="danger"><h1>Unavailable</h1></span>
                        )}
                      </div>
                    </div>
                  </li>
                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <div className="row prod-det">
                          <div><h1>Quantity</h1></div>
                          <div>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      </li>
                      <li>
                        <button
                          onClick={addToCartHandler}
                          className="primary block"
                        >
                          Add to Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
                   </div>
                   
               </div>
      )}
      </div>
    )
}
