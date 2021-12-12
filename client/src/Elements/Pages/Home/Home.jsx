import React from 'react';
import Featured from '../../Components/Featured';
import Navbar from '../../Components/Navbar';
import List from '../../Components/List';

import "./Home.scss";

const Home = () => {
    return (
        <div className="home">
            <Navbar />
            <Featured />
            <List />
            <List />
            <List />
            <List />
            <List />
        </div>
    )
}

export default Home;