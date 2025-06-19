import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Pages/Home/Home';
import Helpcenter from "./components/Pages/help-center/Helpcenter";
import OrderTracking from "./components/Pages/OderTracking/OderTracking";
import Footer from './components/Footer/Footer';
import FooterEnd from './components/Footer/FooterEnd';
import Register from './components/Pages/Register/Register';
import Login from './components/Pages/Loginpage/Login';
import ProductDetails from './Allproducts/ProductDetails/ProductDetails';
import ProductListing from './Allproducts/Productlisting/ProductListing';
import React, { createContext, useState } from 'react';
import CartPage from './components/Pages/Cart/CartPage';
import Verify from './components/Pages/Verify/Verify';
import toast, { Toaster } from 'react-hot-toast';
import ForgetPage from './components/Pages/ForgetPage/ForgetPage';
import CheckOut from './components/Pages/Checkout/CheckOut';
import MyAccount from './components/Pages/Myaccount/MyAccount';
import MyList from './components/Pages/Mylist/MyList';
import MyOrders from './components/Pages/Orders/MyOrders';



export const MyContext = createContext();

function App() {
  const [openCartPanel, setOpenCartPanel] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const toggleCartPanel = (newOpen) => () => {
    setOpenCartPanel(newOpen);
  };
  const openalart=(status,msg)=>{
if(status === "success"){
    toast.success(msg);
  }
  if(status === "error"){
    toast.error(msg);
  }
  
  }
  const values = {
    openCartPanel,
    setOpenCartPanel,
    toggleCartPanel,
    openalart,
    isLogin,
    setIsLogin
  };

  return (
    <>
      <BrowserRouter>
        <MyContext.Provider value={values}>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/helpcenter" element={<Helpcenter />} />
              <Route path="/oder-tracking" element={<OrderTracking />} />
              <Route path="/Productlisting" element={<ProductListing />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/Verify" element={<Verify />} />
              <Route path="/forgetpage" element={<ForgetPage />} />
              <Route path="/checkout" element={<CheckOut />} />
              <Route path="/my-account" element={<MyAccount />} />
              <Route path="/my-list" element={<MyList />} />   
              <Route path="/my-orders" element={< MyOrders/>} />


            </Routes>
          </main>
          <Footer />
          <FooterEnd />
        </MyContext.Provider>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
