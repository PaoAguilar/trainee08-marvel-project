import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getCharacter } from '../config/actions';
import  useLocalStorage  from '../hooks/useLocalStorage';
import { Character } from '../types/interfaces';

const CharacterCard = ({ character }: { character: Character }) => {
  const history = useHistory();
  
  
  useEffect(()=>{
    const item:any = window.localStorage.getItem('BOOKMARK');
    const bookmarks = JSON.parse(item)
    console.log(bookmarks);
  },[])
  
  const [bookMark,setBookmark]:any = useLocalStorage('BOOKMARK', []);
  return (
    <div
      className="characters__container"
    >
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
        <p onClick={()=>{
          console.log('hi');
            getCharacter(`${character.id}`).then((response) => {
              setBookmark([...bookMark, response.data.results]);
              // setBookmark(response.data.results);
              console.log(response.data.results);
            })
        }}>Bookmark {character.id}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
