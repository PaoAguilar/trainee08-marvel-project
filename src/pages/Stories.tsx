import React, { useEffect, useState } from 'react';
import StoryInfo from '../components/StoryInfo';
import { getStories } from '../config/actions';
import { Story } from '../types/interfaces';
import '../styles/stories.scss';

const Stories = () => {
  const [stories, setStories] = useState<Story[]>([]);

  useEffect(() => {
    getStories().then((result) => {
      console.log(result);
      setStories(result);
    });
  }, []);

  return (
    <div>
      <h1>STORIES</h1>
      <div className="stories" >
        {stories.map((story: Story) => {
          return <StoryInfo key={story.id} story={story} />;
        })}
      </div>
    </div>
  );
};

export default Stories;
