import React from 'react';
import {Link} from "react-router-dom"
const Home = () => {
    return (
        <div>
            <ul>
                <li><Link to="/signup" >sign</Link></li>
                <li><Link to="/login"  >log</Link></li>
            </ul>
            
        </div>
    );
};

export default Home;