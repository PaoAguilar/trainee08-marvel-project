import {
  CHARACTERS_ENDPOINTS,
  COMICS_ENDPOINTS,
  STORIES_ENDPOINTS,
} from './constants';

const fetchingData = async (endpoint: string) => {
  try {
    const res = await fetch(endpoint);
    const data = await res.json();
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
};

export const getCharacters = () => {
  return fetchingData(CHARACTERS_ENDPOINTS.GET_CHARACTERS);
};

export const filterCharactersByName = (word: string) => {
  return fetchingData(
    CHARACTERS_ENDPOINTS.FILTER_CHARACTERS_BY_NAME.replace(':word', `${word}`)
  );
};

export const getCharactersComics = (id: number) => {
  return fetchingData(
    CHARACTERS_ENDPOINTS.GET_CHARACTERS_COMICS.replace(':id', `${id}`)
  );
};

export const getCharacterStories = (id: number) => {
  return fetchingData(
    CHARACTERS_ENDPOINTS.GET_CHARACTERS_STORIES.replace(':id', `${id}`)
  );
};

export const getComics = () => {
  return fetchingData(COMICS_ENDPOINTS.GET_COMICS);
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

export const getComicsCharacters = (id: number) => {
  return fetchingData(
    COMICS_ENDPOINTS.GET_COMICS_CHARACTERS.replace(':id', `${id}`)
  );
};

export const getComicsStories = (id: number) => {
  return fetchingData(
    COMICS_ENDPOINTS.GET_COMICS_STORIES.replace(':id', `${id}`)
  );
};

export const getStories = () => {
  return fetchingData(STORIES_ENDPOINTS.GET_STORIES);
};

export const getStoriesComics = (id: number) => {
  return fetchingData(
    STORIES_ENDPOINTS.GET_STORIES_COMICS.replace(':id', `${id}`)
  );
};
