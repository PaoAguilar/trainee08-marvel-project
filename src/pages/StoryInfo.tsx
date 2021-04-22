import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import ComicCard from '../components/ComicCard';
import { getStoriesComics, getStory, getStoryCharacters } from '../config/actions';
import { GlobalContext } from '../context/GlobalContext';
import { Character, Comic } from '../types/interfaces';

const StoryInfo = () => {
  const { storyId } = useParams<{ storyId: string }>();
  const { state, dispatch } = useContext(GlobalContext);
  const { story, storyComics, storyCharacters } = state;

  useEffect(() => {
    getStory(storyId).then((response) => {
      //   console.log(response.data.results);
      dispatch({
        type: 'SET_STORY',
        payload: { story: response.data.results[0] },
      });
    });
  }, [dispatch, storyId]);

  useEffect(() => {
    getStoriesComics(storyId).then((response) => {
      console.log(response.data.results);
      dispatch({
        type: 'SET_STORY_COMICS',
        payload: { storyComics: response.data.results },
      });
    });
  }, [dispatch, storyId]);

  useEffect(() => {
    getStoryCharacters(storyId).then((response) => {
      console.log(response.data.results);
      dispatch({
        type: 'SET_STORY_CHARACTERS',
        payload: { storyCharacters: response.data.results },
      });
    });
  }, [dispatch, storyId]);

  return (
    <>
      <div className="story">
        <div className="story__info">
          <h1>Story ID: {story?.id}</h1>
          <h1>{story?.title}</h1>
        </div>
      </div>
      {storyCharacters?.length === 0 ? <> </> : <h1>CHARACTERS</h1>}
      <div className="characters">
        {storyCharacters?.map((character: Character) => {
          return <CharacterCard key={character.id} character={character} />;
        })}
      </div>
      {storyComics?.length === 0 ? <> </> : <h1>COMICS</h1>}
      <div className="comics">
        {storyComics?.map((comic: Comic) => {
          return <ComicCard key={comic.id} comic={comic} />;
        })}
      </div>
    </>
  );
};

export default StoryInfo;
