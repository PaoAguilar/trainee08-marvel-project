import React from 'react';
import { useHistory } from 'react-router-dom';
import { Story } from '../types/interfaces';

const StoryCard = ({ story }: { story: Story }) => {
  const history = useHistory()
  return (
    <div className="stories__container" onClick={()=>{history.push(`/stories/${story.id}`)}}>
      <div className="stories__info">
        <h3>Story ID #{story.id}</h3>
        <p>{story.title}</p>
      </div>
    </div>
  );
};

export default StoryCard;
