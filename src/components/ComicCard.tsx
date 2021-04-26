import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import bookmarkAdd from '../img/bookwhite.png';
import bookmarkRemove from '../img/bookblack.png';
import { useGlobalContex } from '../context/GlobalContext';
import { Comic } from '../types/interfaces';

const ComicCard = ({ comic }: { comic: Comic }) => {
  const history = useHistory();
  const { dispatch } = useGlobalContex();
  const [click, setClick] = useState(false);

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
          {click === false ? (
            <img
              src={bookmarkAdd}
              alt=""
              onClick={() => {
                dispatch({
                  type: 'SET_BOOKMARK_COMIC',
                  payload: { bookmarkComic: comic },
                });
                setClick(true);
              }}
            />
          ) : (
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
                setClick(false);
              }}
            />
          )}
          <button
            type="button"
            className="comics__hide"
            onClick={() => {
              dispatch({
                type: 'HIDE_RESOURCE',
                payload: {
                  hideResource: {
                    type: 'COMIC',
                    id: comic.id,
                  },
                },
              });
            }}
          >
            hide
          </button>
        </div>
      </div>
    </div>
  );
};

export default ComicCard;
