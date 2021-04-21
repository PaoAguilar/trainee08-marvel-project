import React from 'react';
import { useHistory } from 'react-router-dom';

import '../styles/home.scss';

const Home = () => {

    const history = useHistory();
    return (
        <div>
            <h1>HOME</h1>
            <button type="button" onClick={() => {history.push("/characters")}}>Characters</button>
            <button type="button" onClick={() => {history.push("/comics")}}>Comics</button>
            <button type="button" onClick={() => {history.push("/stories")}}>Stories</button>
        </div>
    );
};

export default Home;