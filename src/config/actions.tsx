import {
  CHARACTERS_ENDPOINTS,
  COMICS_ENDPOINTS,
  STORIES_ENDPOINTS,
} from './constants';

const fetchingData = async (endpoint: string) => {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getOffSetAndLimit = (page:number) =>{
  const itemPerPage = 8
  const indexOfLastItem = page * itemPerPage;
  const indexOfFirstItem = indexOfLastItem - itemPerPage;
  const offSet = indexOfFirstItem;
  return {itemPerPage, offSet}
}

export const getListOfCharacters = (page:number) => {
  let numberOfItem = getOffSetAndLimit(page)
  return fetchingData(CHARACTERS_ENDPOINTS.GET_LIST_OF_CHARACTERS.replace(':limit',`${numberOfItem.itemPerPage}`).replace(':offset',`${numberOfItem.offSet}`));
};

export const getCharacter = (id: string) => {
  return fetchingData(
    CHARACTERS_ENDPOINTS.GET_CHARACTER.replace(':id', `${id}`)
  );
};

export const filterCharactersByName = (word: string) => {
  return fetchingData(
    CHARACTERS_ENDPOINTS.FILTER_CHARACTERS_BY_NAME.replace(':word', `${word}`)
  );
};

export const getCharactersComics = (id: string) => {
  return fetchingData(
    CHARACTERS_ENDPOINTS.GET_CHARACTERS_COMICS.replace(':id', `${id}`)
  );
};

export const getCharacterStories = (id: string) => {
  return fetchingData(
    CHARACTERS_ENDPOINTS.GET_CHARACTERS_STORIES.replace(':id', `${id}`)
  );
};

export const getListOfComics = (page:number) => {
  let numberOfItem = getOffSetAndLimit(page)
  return fetchingData(COMICS_ENDPOINTS.GET_LIST_OF_COMICS.replace(':limit',`${numberOfItem.itemPerPage}`).replace(':offset',`${numberOfItem.offSet}`));
};

export const getComic = (id: string) => {
  return fetchingData(COMICS_ENDPOINTS.GET_COMIC.replace(':id', `${id}`));
};

export const filterComicsByFormat = (format: string) => {
  return fetchingData(
    COMICS_ENDPOINTS.FILTER_COMICS_BY_FORMAT.replace(':format', `${format}`)
  );
};

export const filterComicsByTitle = (word: string) => {
  return fetchingData(
    COMICS_ENDPOINTS.FILTER_COMICS_BY_TITLE.replace(':word', `${word}`)
  );
};

export const getComicsCharacters = (id: string) => {
  return fetchingData(
    COMICS_ENDPOINTS.GET_COMICS_CHARACTERS.replace(':id', `${id}`)
  );
};

export const getComicsStories = (id: string) => {
  return fetchingData(
    COMICS_ENDPOINTS.GET_COMICS_STORIES.replace(':id', `${id}`)
  );
};

export const getListOfStories = (page:number) => {
  let numberOfItem = getOffSetAndLimit(page)
  return fetchingData(STORIES_ENDPOINTS.GET_LIST_OF_STORIES.replace(':limit',`${numberOfItem.itemPerPage}`).replace(':offset',`${numberOfItem.offSet}`));
};

export const getStory = (id: string) => {
  return fetchingData(
    STORIES_ENDPOINTS.GET_STORY.replace(':id', `${id}`)
  );
};

export const getStoriesComics = (id: string) => {
  return fetchingData(
    STORIES_ENDPOINTS.GET_STORIES_COMICS.replace(':id', `${id}`)
  );
};

export const getStoryCharacters = (id: string) => {
  return fetchingData(
    STORIES_ENDPOINTS.GET_STORY_CHARACTERS.replace(':id', `${id}`)
  );
};

