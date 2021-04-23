import React, { useState } from 'react';
import { useEffect } from 'react';
import ComicCard from '../components/ComicCard';
import { getListOfComics } from '../config/actions';
import { Comic } from '../types/interfaces';

import '../styles/comics.scss';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Pagination from '../components/commons/Pagination';

const Comics = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getListOfComics(currentPage).then((response) => {
      setTotal(response.data.total);
      dispatch({
        type: 'LIST_OF_COMICS',
        payload: { comics: response.data.results },
      });
    });
  }, [dispatch, currentPage]);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>COMICS</h1>
      <div className="comics">
        {state.comics?.map((comic: Comic) => {
          return <ComicCard key={comic.id} comic={comic} />;
        })}
      </div>
      <Pagination total={total} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Comics;
