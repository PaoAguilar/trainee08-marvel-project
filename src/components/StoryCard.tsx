import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContex } from '../context/GlobalContext';
import { Story } from '../types/interfaces';

const StoryCard = ({ story }: { story: Story }) => {
  const history = useHistory();
  const { dispatch } = useGlobalContex();
  
  return (
    <div className="stories__container">
      <div
        className="stories__info"
        onClick={() => {
          history.push(`/stories/${story.id}`);
        }}
      >
        <h3>Story ID #{story.id}</h3>
        <p>{story.title}</p>
      </div>
      <div className="stories__bookmark">
        <p
        onClick={() => {
          dispatch({
            type: 'SET_BOOKMARK_STORY',
            payload: {bookmarkStory: story}
          })
        }}>Bookmark {story.id}</p>
      </div>
    </div>
  );
};

export default StoryCard;
