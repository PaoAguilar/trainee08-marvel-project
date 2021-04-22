import React from 'react';
import { Comic } from '../types/interfaces';

const ComicInfo = ({ comic }: { comic: Comic }) => {
  return (
    <div className="comics__container">
      <div className="comics__image">
      <img
        alt="comic"
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      />
      </div>
      
      <div className="comics__info">
        <span>{comic.title}</span>
        </div>
    </div>
  );
};

export default ComicInfo;
