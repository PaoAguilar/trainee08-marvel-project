import React from 'react';
import { useEffect } from 'react';
import ComicInfo from '../components/ComicInfo';
import { getComics } from '../config/actions';
import { Comic } from '../types/interfaces';

import '../styles/comics.scss';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Comics = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getComics().then((response) => {
      dispatch({
        type: 'SET_COMIC',
        payload: { comics: response.data.results },
      });
    });
  }, [dispatch]);

  return (
    <div>
      <h1>COMICS</h1>
      <div className="comics">
        {state.comics?.map((comic: Comic) => {
          return <ComicInfo key={comic.id} comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default Comics;
