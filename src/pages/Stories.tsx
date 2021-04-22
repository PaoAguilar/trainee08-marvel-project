import React, { useEffect } from 'react';
import StoryCard from '../components/StoryCard';
import { getListOfStories } from '../config/actions';
import { Story } from '../types/interfaces';
import '../styles/stories.scss';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';

const Stories = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    getListOfStories().then((response) => {
      dispatch({
        type: 'LIST_OF_STORIES',
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
