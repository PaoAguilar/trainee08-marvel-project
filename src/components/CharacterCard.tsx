import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContex } from '../context/GlobalContext';
import { Character } from '../types/interfaces';

const CharacterCard = ({ character }: { character: Character }) => {
  const history = useHistory();
  const { dispatch } = useGlobalContex();
  // const [bookmark, setBookmark]: any = useLocalStorage('BOOKMARK', []);
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
      </div>

      <div className="characters__info">
        <span>{character.name}</span>
        <p
          onClick={() => {
            dispatch({
              type: 'SET_BOOKMARK_CHARACTER',
              payload: { bookmarkCharacter: character },
            });
          }}
        >
          Bookmark {character.id}
        </p>
        <button
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
          }}
        >
          remove
        </button>
      </div>
    </div>
  );
};

export default CharacterCard;
