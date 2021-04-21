import React, { useEffect } from 'react';
import { getStories } from '../config/actions';

const Stories = () => {
  useEffect(() => {
    getStories().then((result) => {
      console.log(result);
    });
  });

  return (
    <div>
      <h1>STORIES</h1>
    </div>
  );
};

export default Stories;
