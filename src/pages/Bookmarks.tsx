import CharacterCard from '../components/CharacterCard';
import ComicCard from '../components/ComicCard';
import StoryCard from '../components/StoryCard';
import { useGlobalContex } from '../context/GlobalContext';
import { Character, Comic, Story } from '../types/interfaces';

const Bookmarks = () => {
  const { state, dispatch } = useGlobalContex();
  const { characters, comics, stories } = state.bookmark;

  return (
    <div>
      <h1>BOOKMARKS</h1>
      <button
        type="button"
        onClick={() => {
          dispatch({
            type: 'DELETE_ALL_BOOKMARKS',
          });
        }}
      >
        Delete
      </button>
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
