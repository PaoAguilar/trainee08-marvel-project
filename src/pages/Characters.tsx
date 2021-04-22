import React, { useContext } from 'react';
import { useEffect } from 'react';
import CharactersInfo from '../components/CharactersInfo';
import { getCharacters } from '../config/actions';
import { Character } from '../types/interfaces';
import '../styles/characters.scss';
import { GlobalContext } from '../context/GlobalContext';

const Characters = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getCharacters().then((response) => {
      dispatch({
        type: 'SET_CHARACTER',
        payload: { characters: response.data.results },
      });
    });
  }, [dispatch]);

  return (
    <>
      <h1>CHARACTERS</h1>
      <div className="characters">
        {state.characters?.map((character: Character) => {
          return <CharactersInfo key={character.id} character={character} />;
        })}
      </div>
    </>
  );
};

export default Characters;
