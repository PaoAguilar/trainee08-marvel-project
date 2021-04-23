import React, { useContext, useState } from 'react';
import { useEffect } from 'react';
import CharacterCard from '../components/CharacterCard';
import { filterCharactersByName, getListOfCharacters } from '../config/actions';
import { Character } from '../types/interfaces';
import '../styles/characters.scss';
import { GlobalContext } from '../context/GlobalContext';
import Pagination from '../components/commons/Pagination';
import useDebounce from '../hooks/useDebounce';

const Characters = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const { characters } = state;

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      filterCharactersByName(debouncedSearchTerm, currentPage).then((response) => {
        console.log(response.data.results);
        setTotal(response.data.total);
        setIsSearching(false);
        dispatch({
          type: 'LIST_OF_CHARACTER',
          payload: { characters: response.data.results },
        });
      });
    }
  }, [currentPage, debouncedSearchTerm, dispatch]);

  useEffect(() => {
    if (debouncedSearchTerm) {return}else{
      getListOfCharacters(currentPage).then((response) => {
        setTotal(response.data.total);
        dispatch({
          type: 'LIST_OF_CHARACTER',
          payload: { characters: response.data.results },
        });
      });
    }
  }, [currentPage, debouncedSearchTerm, dispatch]);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <h1>CHARACTERS</h1>
      <div className="search">
        <input
          className="search__name"
          placeholder="Search"
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>
      {isSearching && <div>Searching ...</div>}
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
