import React from "react";
import Navbar from "./componenets/Navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Products from "./pages/Products";
import CategoriesD from './pages/Categories'
import { BrowserRouter as Router,Routes as Switch, Route } from "react-router-dom";
import { categoriesHeadphoneData ,categoriesSpeakerData,categoriesEarphoneData} from "./data/CategoriesData";
import Tes from "./pages/Tes";
import Cart from "./componenets/Cart/Cart";
import { Provider } from "react-redux";
import store from './store/store'
import CartsDetails from "./componenets/Cart/CartsDetails";
const App = () => {
  return (
    <Provider store={store}>
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path="/" element={<Home/>} />
        {/* <Route path="/products/:productName" element={<Products/>} /> */}
        <Route />
        <Route  path="/headphones/" element={<CategoriesD data={categoriesHeadphoneData}/>}/>
          <Route path="/products/:prodtitle" element={<Products/>}/>
        <Route path="/speakers" element={<CategoriesD data={categoriesSpeakerData}/>} />
        <Route path="/earphones" element={<CategoriesD data={categoriesEarphoneData}/>} />
        <Route path="/cart" element = {<Cart/>}/>
        <Route path='/cart/:id' element={<CartsDetails />} />
      </Switch>

      {/* <Home /> */}
      {/* <Products /> */}
    </Router>
    </Provider>
  );
};

export default App;
