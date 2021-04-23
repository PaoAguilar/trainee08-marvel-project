import React, { useEffect, useState } from 'react';
import StoryCard from '../components/StoryCard';
import { getListOfStories } from '../config/actions';
import { Story } from '../types/interfaces';
import '../styles/stories.scss';
import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import Pagination from '../components/commons/Pagination';

const Stories = () => {
  const { state, dispatch } = useContext(GlobalContext);
  const [total, setTotal] = useState(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    getListOfStories(currentPage).then((response) => {
      setTotal(response.data.total);
      dispatch({
        type: 'LIST_OF_STORIES',
        payload: { stories: response.data.results },
      });
    });
  }, [dispatch, currentPage]);

  const paginate = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <h1>STORIES</h1>
      <div className="stories">
        {state.stories?.map((story: Story) => {
          return <StoryCard key={story.id} story={story} />;
        })}
      </div>
      <Pagination total={total} currentPage={currentPage} paginate={paginate} />
    </div>
  );
};

export default Stories;
