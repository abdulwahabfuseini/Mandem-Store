import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import SignIn from "./pages/account/SignIn";
import Register from "./pages/account/Register";
import Profile from "./pages/account/Profile";
import ForgotPassword from "./pages/account/ForgotPassword";
import PageNotFound from "./pages/PageNotFound";
import SingleProduct from "./pages/SingleProduct";
import { AuthProvider } from "./contexts/AuthContext";
import Checkout from "./components/checkout/Checkout";
import Confirmation from "./components/checkout/Confirmation";
import Cart from "./components/shoppingCart/Cart";

import Aos from "aos";
import "aos/dist/aos.css";


Aos.init();

const LazyAbout = React.lazy(() => import("./pages/About"));

const ScrollTotop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <ScrollTotop />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="product/:productId" element={<SingleProduct />} />
          <Route
            path="about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="blog" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cart" element={<Cart />} />
          <Route path="signin" element={<SignIn />} />
          <Route path="create-an-account" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="rest-password" element={<ForgotPassword />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;
