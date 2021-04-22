import React, { useState } from 'react';
import { useEffect } from 'react';
import ComicInfo from '../components/ComicInfo';
import { getComics } from '../config/actions';
import { Comic } from '../types/interfaces';

import '../styles/comics.scss';

const Comics = () => {
  const [comics, setComics] = useState<Comic[]>([]);

  useEffect(() => {
    getComics().then((result) => {
      console.log(result);
      setComics(result);
    });
  }, []);

  return (
    <div>    
      <h1>COMICS</h1>  
      <div className="comics" >
        {comics.map((comic: Comic) => {
          return <ComicInfo key={comic.id} comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default Comics;
