import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContex } from '../context/GlobalContext';
import useLocalStorage from '../hooks/useLocalStorage';
import { Comic } from '../types/interfaces';

const ComicCard = ({ comic }: { comic: Comic }) => {
  const history = useHistory();
  const { state,dispatch } = useGlobalContex();
  const [bookmark, setBookmark]: any = useLocalStorage('BOOKMARK', []);

  return (
    <div className="comics__container">
      <div className="comics__image">
        <img
          alt="comic"
          onClick={() => {
            history.push(`/comics/${comic.id}`);
          }}
          src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
        />
      </div>

      <div className="comics__info">
        <span>{comic.title}</span>
        <p
          onClick={() => {
            dispatch({
              type: 'SET_BOOKMARK_COMIC',
              payload: { bookmarkComic: comic},
            })
            console.log(state.bookmark.comics);
          }}
        >
          Bookmark {comic.id}
        </p>
      </div>
    </div>
  );
};

export default ComicCard;
