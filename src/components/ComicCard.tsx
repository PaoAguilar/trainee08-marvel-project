import React from 'react';
import { useHistory } from 'react-router-dom';
import { Comic } from '../types/interfaces';

const ComicCard = ({ comic }: { comic: Comic }) => {
  const history = useHistory();
  return (
    <div className="comics__container" onClick={()=>{history.push(`/comics/${comic.id}`)}}>
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

export default ComicCard;
