import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';


export default function product(props) {
    const { product } = props;
    return (
       <div key = {product._id} className="card">
                <Link to={`/product/${product._id}`}>
               
               <div className="card-img">  <img className="medium" src={product.image} alt={product.name} /></div> 
                </Link>
                <div className="card-body">
                <Link to={`/product/${product._id}`}>
                   <div className="productName"> 
                  </div>
                  </Link>
                <div className="rating">  <Rating rating={product.rating} numReviews={product.numReviews}></Rating></div>
                  <div className="price"><h2>${product.price}</h2></div>
                </div>
              </div>
    )
}
