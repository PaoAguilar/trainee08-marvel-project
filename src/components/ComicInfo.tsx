import React from 'react';
import { Comic } from '../types/interfaces';

const ComicInfo = ({ comic }: { comic: Comic }) => {
  return (
    <div className="comics__container">
      <img
        alt="comic"
        src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
      />
      <div className="comics__info">{comic.title}</div>
      {/* <div className="comics__info">Info</div> */}
    </div>
  );
};

export default ComicInfo;
