import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import SigninScreen from './screens/SigninScreen';
import { signout } from './actions/userActions';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import ProfileScreen from './screens/ProfileScreen';
import AdminRoute from './components/AdminRoute';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';














function App() {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const dispatch = useDispatch();
  const signoutHandler = () => {
    dispatch(signout());
  };
  return (
    <BrowserRouter>
    <div className="grid-container">
      <header className="row row-header">
        <div>
        <Link className="brand" to="/">   etobe.</Link>
        </div>
        <div className="header-links">
        <Link to="/cart">
        <div className="dropdown">
        <h2 className="header-text">Cart
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              ) }</h2> </div>
            </Link>
            {userInfo ? (
              <div className="dropdown">
                <Link to="#"><a><h2 className="header-text">
                  {userInfo.name} <i className="fa fa-caret-down"></i>{' '}</h2>
                  </a>  </Link>
                <ul className="dropdown-content">
                <li> <div class="dropdown-text">
                    <Link to="/profile"><h2 className="header-text">User Profile</h2></Link>
                    </div>  </li>
                <li> <div class="dropdown-text">
                    <Link to="/orderhistory"><h2 className="header-text">Order History</h2></Link>
                    </div>  </li>
                  <li> <div class="dropdown-text">
                    <Link to="#signout" onClick={signoutHandler}>
                    <h2 className="header-text"> Sign Out</h2>
                    </Link>
                    </div> </li>
                </ul>
              </div>
            ) : (
              <Link to="/signin"><h2 className="header-text">Sign In</h2></Link>
            )}
                {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <Link to="#admin"><a><h2 className="header-text">
                  Admin <i className="fa fa-caret-down"></i></h2>
                  </a> </Link>
                <ul className="dropdown-content">
                 
                  <li>
                    <Link to="/productlist"><h2 className="header-text">Products</h2></Link>
                  </li>
                  <li>
                    <Link to="/orderlist"><h2 className="header-text">Orders</h2></Link>
                  </li>
                  <li>
                    <Link to="/userlist"><h2 className="header-text">Users</h2></Link>
                  </li>
                </ul>
              </div>
            )}
        </div>
      </header>
      <main>
      <Route path="/product/:id" component={ProductScreen} exact></Route>
        <Route path='/' component={HomeScreen} exact></Route>
        <Route path="/cart/:id?" component={CartScreen}></Route>
        <Route path="/signin" component={SigninScreen}></Route>
        <Route path="/register" component={RegisterScreen}></Route>
        <Route path="/shipping" component={ShippingAddressScreen}></Route>
        <Route path="/payment" component={PaymentMethodScreen}></Route>
        <Route path="/placeorder" component={PlaceOrderScreen}></Route>
        <Route path="/order/:id" component={OrderScreen}></Route>
        <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
        <Route path="/profile" component={ProfileScreen}></Route>
        <Route
            path="/product/:id/edit"
            component={ProductEditScreen}
            exact
          ></Route>

          <AdminRoute
            path="/productlist"
            component={ProductListScreen}
          ></AdminRoute>
          <AdminRoute
            path="/orderlist"
            component={OrderListScreen}
          ></AdminRoute>
          <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>




        
      </main>
      <footer className="row center"><h2>Seray Yagci - E-commerce website template</h2></footer>
    </div>
    </BrowserRouter>  );
}

export default App;
