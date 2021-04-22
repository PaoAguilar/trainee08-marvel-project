import React, { useState } from 'react';
import { useEffect } from 'react';
import CharactersInfo from '../components/CharactersInfo';
import { getCharacters } from '../config/actions';
import { Character } from '../types/interfaces';
import '../styles/characters.scss';

const Characters = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    getCharacters().then((result) => {
      console.log(result);
      console.log(result[1].id);
      setCharacters(result);
    });
  }, []);

  return (
    <>
    <h1>CHARACTERS</h1>
    <div className="characters">
     {characters.map((character: Character) => {
          return <CharactersInfo key={character.id} character={character} />;
        })}
    </div>
    </>
  );
};

export default Characters;
