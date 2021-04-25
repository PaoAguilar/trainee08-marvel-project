import { useContext } from 'react';
import CharacterCard from '../components/CharacterCard';
import ComicCard from '../components/ComicCard';
import StoryCard from '../components/StoryCard';
import { GlobalContext } from '../context/GlobalContext';
import { Character, Comic, Story } from '../types/interfaces';

const Bookmarks = () => {
  const { state } = useContext(GlobalContext);
  const { characters, comics, stories } = state.bookmark;

  // const item: any = window.localStorage.getItem('BOOKMARK');
  // const response = JSON.parse(item);
  // console.log(response);


    // const bookmarksArray = []
    // for (let i = 0; i < response.length; i++) {
    //   const bookmarks = response[i].dataResults[0]
    //   bookmarksArray.push(bookmarks);
    // }

  // console.log(bookmarksArray);

  return (
    <div>
      <h1>BOOKMARKS</h1>
          <h2>Characters</h2>
          <div className="characters">
            {characters?.map((character: Character) => {
              return <CharacterCard key={character.id} character={character} />;
            })}
          </div>
          <h2>Comics</h2>
          <div className="comics">
            {comics?.map((comic: Comic) => {
              return <ComicCard key={comic.id} comic={comic} />;
            })}
          </div>
          <h2>Stories</h2>
          <div className="stories">
            {stories?.map((story: Story) => {
              return <StoryCard key={story.id} story={story} />;
            })}
          </div>
    </div>
  );
};

export default Bookmarks;
