import React from 'react';
import Chart from '../../Components/Chart';
import FeaturedInfo from '../../Components/FeaturedInfo';
import {userData} from "../../../dummyData";

import "./Home.css";
import WidgetSm from '../../Components/WidgetSm';
import WidgetLg from '../../Components/WidgetLg';

const Home = () => {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={userData} title="User Analytics" grid dataKey="Active User" />
            <div className="homeWidgets">
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home;
