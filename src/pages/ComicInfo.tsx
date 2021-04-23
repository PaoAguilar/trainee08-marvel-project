import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import StoryCard from '../components/StoryCard';
import {
  getComic,
  getComicsCharacters,
  getComicsStories,
} from '../config/actions';
import { GlobalContext } from '../context/GlobalContext';
import { Character, Story } from '../types/interfaces';

const ComicInfo = () => {
  const { comicId } = useParams<{ comicId: string }>();
  const { state, dispatch } = useContext(GlobalContext);
  const { comic, comicCharacters, comicStories } = state;

  useEffect(() => {
    getComic(comicId).then((response) => {
      dispatch({
        type: 'SET_COMIC',
        payload: { comic: response.data.results[0] },
      });
    });
  }, [comicId, dispatch]);

  useEffect(() => {
    getComicsCharacters(comicId).then((response) => {
      dispatch({
        type: 'SET_COMIC_CHARACTERS',
        payload: { comicCharacters: response.data.results },
      });
    });
  }, [comicId, dispatch]);

  useEffect(() => {
    getComicsStories(comicId).then((response) => {
      dispatch({
        type: 'SET_COMIC_STORIES',
        payload: { comicStories: response.data.results },
      });
    });
  }, [comicId, dispatch]);

  return (
    <>
      <div className="comic">
        <div className="comic__image">
          <img
            src={`${comic?.thumbnail.path}.${comic?.thumbnail.extension}`}
            alt="comic-img"
          />
        </div>
        <div className="comic__info">
          <div>
            <p>{comic?.id}</p>
          </div>
          <div>
            <h2>{comic?.title}</h2>
          </div>
        </div>
      </div>
      <div className="comic__description">
        <div className="comic__text">
          <h2>{comic?.description}</h2>
        </div>
      </div>
      {comicCharacters?.length === 0 ? <> </> : <h1>CHARACTERS</h1>}
      <div className="characters">
        {comicCharacters?.map((character: Character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
      {comicStories?.length === 0 ? <> </> : <h1>STORIES</h1>}
      <div className="stories">
        {comicStories?.map((story: Story) => {
          return <StoryCard key={story.id} story={story} />;
        })}
      </div>
    </>
  );
};

export default ComicInfo;
