import React from 'react';
import { useEffect } from 'react';
import { getCharacters } from '../config/actions';

const Characters = () => {

    useEffect(() => {
        getCharacters().then((result) => {
          console.log(result);
          console.log(result[0].id);
    
        //   setComics(result);
        });
      }, []);
      
    return (
        <div>
            <h1>CHARACTERS</h1>
        </div>
    );
};

export default Characters;