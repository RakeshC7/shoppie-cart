import React from 'react';
import { CartState } from './../context/Context';

const Home = () => {
    const { state } = CartState();

    console.log("state:", state);

    return (
        <div>
            Home
        </div>
    );
}

export default Home;
