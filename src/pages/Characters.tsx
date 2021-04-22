import React, { useContext } from 'react';
import { useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import { getListOfCharacters } from '../config/actions';
import { Character } from '../types/interfaces';
import '../styles/characters.scss';
import { GlobalContext } from '../context/GlobalContext';

const Characters = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const { characters } = state;
  useEffect(() => {
    getListOfCharacters().then((response) => {
      // console.log(response.data.results);

      dispatch({
        type: 'LIST_OF_CHARACTER',
        payload: { characters: response.data.results },
      });
    });
  }, [dispatch]);

  return (
    <>
      <h1>CHARACTERS</h1>
      <div className="characters">
        {characters?.map((character: Character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
    </>
  );
};

export default Characters;
