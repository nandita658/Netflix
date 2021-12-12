import React from 'react';
import Sidebar from './Elements/Components/Sidebar';
import Topbar from './Elements/Components/Topbar';
import "./App.css";
import Home from './Elements/Pages/Home/Home';

const App = () => {
  return (
    <div>
      <Topbar/>
      <div className='container'>
        <Sidebar/>
        <Home/>
      </div>
    </div>
  )
}

export default App;
