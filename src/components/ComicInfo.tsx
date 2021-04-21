import React from 'react';
import { Comic } from '../types/interfaces';

const ComicInfo = ({ comic }: { comic: Comic }) => {
    return (
        <div>
            <h1>Title: {comic.title}</h1>
            {/* <img alt="movie" src="" /> */}
        </div>
    );
};

export default ComicInfo;