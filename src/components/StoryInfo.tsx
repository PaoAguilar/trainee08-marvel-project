import React from 'react';
import { Story } from '../types/interfaces';

const StoryInfo = ({ story }: { story: Story }) => {
  return (
    <div className="stories__container">
      <div className="stories__info">
        <h3>Story ID #{story.id}</h3>
        <p>{story.title}</p>
      </div>
    </div>
  );
};

export default StoryInfo;
