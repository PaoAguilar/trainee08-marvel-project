import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContex } from '../context/GlobalContext';
import { Comic } from '../types/interfaces';
import bookmarkAdd from '../img/bookwhite.png';
import bookmarkRemove from '../img/bookblack.png';

const ComicCard = ({ comic }: { comic: Comic }) => {
  const history = useHistory();
  const { dispatch } = useGlobalContex();

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
        <div className="characters__bookmark">
          <img
            src={bookmarkAdd}
            alt=""
            onClick={() => {
              dispatch({
                type: 'SET_BOOKMARK_COMIC',
                payload: { bookmarkComic: comic },
              });
            }}
          />
          <img
            src={bookmarkRemove}
            alt=""
            onClick={() => {
              dispatch({
                type: 'REMOVE_BOOKMARK',
                payload: {
                  removeBookmark: {
                    type: 'COMIC',
                    id: comic.id,
                  },
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
