import React from 'react';

import { ArrowBackOutlined } from "@material-ui/icons";
import "./Watch.scss";

const Watch = () => {
    return (
        <div className="watch">
            <div className="back">
                <ArrowBackOutlined />
                Home
            </div>
            <video className="video"
                autoPlay={true}
                progress
                controls
                src="http://techslides.com/demos/sample-videos/small.mp4"
            />
        </div>
    )
}

export default Watch;