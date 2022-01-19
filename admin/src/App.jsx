import React from 'react';
import Sidebar from './Elements/Components/Sidebar';
import Topbar from './Elements/Components/Topbar';
import "./App.css";
import Home from './Elements/Pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";  
import UserList from './Elements/Pages/UserList/UserList';
import User from './Elements/Pages/User/User';
import NewUser from './Elements/Pages/NewUser/NewUser';
import ProductList from './Elements/Pages/ProductList/ProductList';
import Product from './Elements/Pages/Product/Product';

const App = () => {
  return (
    <Router>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/users" element={<UserList/>} />
          <Route path="/users/:userId" element={<User/>} />
          <Route path="/newUser" element={<NewUser/>} />
          <Route path="/products" element={<ProductList/>} />
          <Route path="/products/:productId" element={<Product/>} />
          <Route path="/newProduct" element={<NewUser/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;
