import React from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';
import { Comic } from '../types/interfaces';

const ComicCard = ({ comic }: { comic: Comic }) => {
  const history = useHistory();
  // const [bookmark, setBookmark]: any = useLocalStorage('BOOKMARK', []);
  const { dispatch } = useContext(GlobalContext);
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
          }}
        >
          Bookmark {comic.id}
        </p>
      </div>
    </div>
  );
};

export default ComicCard;
