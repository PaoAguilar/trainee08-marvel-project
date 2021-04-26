import React from 'react';
import { useHistory } from 'react-router-dom';
import { useGlobalContex } from '../context/GlobalContext';
import { Story } from '../types/interfaces';
import bookmarkAdd from '../img/bookwhite.png';
import bookmarkRemove from '../img/bookblack.png';

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
        <div className="characters__bookmark">
          <img
            src={bookmarkAdd}
            alt=""
            onClick={() => {
              dispatch({
                type: 'SET_BOOKMARK_STORY',
                payload: { bookmarkStory: story },
              });
            }}
          />
          <img
            src={bookmarkRemove}
            alt=""
            onClick={() => {
              dispatch({
                type: 'REMOVE_BOOKMARK',
                payload: {
                  removeBookmark: {
                    type: 'STORY',
                    id: story.id,
                  },
                },
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default StoryCard;
