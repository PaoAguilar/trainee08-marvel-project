import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import { getListOfCharacters } from '../config/actions';
import { Character } from '../types/interfaces';
import '../styles/characters.scss';
import { GlobalContext } from '../context/GlobalContext';
import Pagination from '../components/commons/Pagination';

const Characters = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  console.log(total);

  const { characters } = state;
  useEffect(() => {
    getListOfCharacters(currentPage).then((response) => {
      console.log(response);
      setTotal(response.data.total);
      dispatch({
        type: 'LIST_OF_CHARACTER',
        payload: { characters: response.data.results },
      });
    });
  }, [currentPage, dispatch]);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1>CHARACTERS</h1>

      <div className="characters">
        {characters?.map((character: Character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
      <Pagination total={total} currentPage={currentPage} paginate={paginate} />
    </>
  );
};

export default Characters;
