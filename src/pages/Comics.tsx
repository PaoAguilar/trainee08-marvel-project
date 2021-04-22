import React from 'react';
import { useEffect } from 'react';
import ComicCard from '../components/ComicCard';
import { getListOfComics } from '../config/actions';
import { Comic } from '../types/interfaces';

import '../styles/comics.scss';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Comics = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getListOfComics().then((response) => {
      dispatch({
        type: 'LIST_OF_COMICS',
        payload: { comics: response.data.results },
      });
    });
  }, [dispatch]);

  return (
    <div>
      <h1>COMICS</h1>
      <div className="comics">
        {state.comics?.map((comic: Comic) => {
          return <ComicCard key={comic.id} comic={comic} />;
        })}
      </div>
    </div>
  );
};

export default Comics;
