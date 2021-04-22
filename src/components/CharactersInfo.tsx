import React from 'react';
import { Character } from '../types/interfaces';

const CharactersInfo = ({character}: {character: Character}) => {
    return (
    <div className="characters__container">
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

export default CharactersInfo;