import React, { useEffect } from 'react';
import StoryCard from '../components/StoryCard';
import { getStories } from '../config/actions';
import { Story } from '../types/interfaces';
import '../styles/stories.scss';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Stories = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getStories().then((response) => {
      dispatch({
        type: 'SET_STORY',
        payload: { stories: response.data.results },
      });
    });
  }, [dispatch]);

  return (
    <div>
      <h1>STORIES</h1>
      <div className="stories">
        {state.stories?.map((story: Story) => {
          return <StoryCard key={story.id} story={story} />;
        })}
      </div>
    </div>
  );
};

export default Stories;
