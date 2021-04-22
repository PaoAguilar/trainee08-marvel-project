import React from 'react';
import { useHistory } from 'react-router-dom';
import { Character } from '../types/interfaces';

const CharacterCard = ({ character }: { character: Character }) => {
  const history = useHistory();
  return (
    <div
      className="characters__container"
      onClick={() => {
        history.push(`/characters/${character.id}`);
      }}
    >
      <div className="characters__image">
        <img
          alt="character"
          src={`${character.thumbnail.path}.${character.thumbnail.extension}`}
        />
      </div>

      <div className="characters__info">
        <span>{character.name}</span>
      </div>
    </div>
  );
};

export default CharacterCard;
