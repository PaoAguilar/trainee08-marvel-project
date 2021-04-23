import React, { useContext } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ComicCard from '../components/ComicCard';
import StoryCard from '../components/StoryCard';
import { getCharacter, getCharactersComics, getCharacterStories } from '../config/actions';
import { GlobalContext } from '../context/GlobalContext';
import { Comic, Story } from '../types/interfaces';

const CharacterInfo = () => {
//   console.log(useParams());
  const { characterId } = useParams<{ characterId: string }>();
  const { state, dispatch } = useContext(GlobalContext);
  const { character, charactersComics, characterStories } = state;
  useEffect(() => {
    getCharacter(characterId).then((response) => {
    //   console.log(response.data.results);
      dispatch({
        type: 'SET_CHARACTER',
        payload: { character: response.data.results[0] },
      });
    });
  }, [characterId, dispatch]);

  useEffect(() => {
    getCharactersComics(characterId).then((response) => {
      console.log(response.data.results);
      dispatch({
        type: 'SET_CHARACTERS_COMICS',
        payload: { charactersComics: response.data.results },
      });
    });
  }, [characterId, dispatch]);

  useEffect(() => {
    getCharacterStories(characterId).then((response) => {
      console.log(response.data.results);
      dispatch({
        type: 'SET_CHARACTER_STORIES',
        payload: { characterStories: response.data.results },
      });
    });
  }, [characterId, dispatch]);

  return (
    <>
      <div className="character">
        <div className="character__image">
          <img
            src={`${character?.thumbnail.path}.${character?.thumbnail.extension}`}
            alt="character-img"
          />
        </div>
        <div className="character__info">
          <div><p>{character?.id}</p></div>
          <div><h2>{character?.name}</h2></div>
        </div>
      </div>
      <div className="character__description">
        <div className="character__text">
          <h2>{character?.description}</h2>
        </div>
      </div>
      {charactersComics?.length === 0 ? <> </> : <h1>COMICS</h1>}
      <div className="characters">
        {charactersComics?.map((comic: Comic) => {
          return <ComicCard key={comic.id} comic={comic} />;
        })}
      </div>
      {characterStories?.length === 0 ? <> </> : <h1>STORIES</h1>}
      <div className="stories">
        {characterStories?.map((story: Story) => {
          return <StoryCard key={story.id} story={story} />;
        })}
      </div>
    </>
  );
};

export default CharacterInfo;
