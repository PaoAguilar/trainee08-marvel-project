import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContex } from '../context/GlobalContext';
import { Character } from '../types/interfaces';
import bookmarkAdd from '../img/bookwhite.png';
import bookmarkRemove from '../img/bookblack.png';

const CharacterCard = ({ character }: { character: Character }) => {
  const history = useHistory();
  const { dispatch } = useGlobalContex();
  const [click, setClick] = useState(false);

  return (
    <div className="characters__container">
      <div className="characters__image">
        <img
          alt="character"
          onClick={() => {
            history.push(`/characters/${character.id}`);
          }}
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
        <div className="characters__id">{character.id}</div>
      </div>

      <div className="characters__info">
        <span>{character.name}</span>
        <div className="characters__bookmark">
          {click === false ? (
            <img
              src={bookmarkAdd}
              alt=""
              onClick={() => {
                dispatch({
                  type: 'SET_BOOKMARK_CHARACTER',
                  payload: { bookmarkCharacter: character },
                });
                // dispatch({
                //   type: 'SET_CLICK',
                //   payload: { click: true },
                // });
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
                      type: 'CHARACTER',
                      id: character.id,
                    },
                  },
                });
                setClick(false);
              }}
            />
          )}
          <button
            type="button"
            className="characters__hide"
            onClick={() => {
              dispatch({
                type: 'HIDE_RESOURCE',
                payload: {
                  hideResource: {
                    type: 'CHARACTER',
                    id: character.id,
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

export default CharacterCard;
