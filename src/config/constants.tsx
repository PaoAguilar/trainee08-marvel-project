const BASE_URL = `${process.env.REACT_APP_BASE_URL}`;
const API_KEY = `${process.env.REACT_APP_API_KEY}`;
const HASH = `${process.env.REACT_APP_HASH}`;
const TS = `${process.env.REACT_APP_TS}`;
const KEY = `ts=${TS}&apikey=${API_KEY}&hash=${HASH}`;
const GET_LIST = `${BASE_URL}:endpoint?${KEY}`;

export const CHARACTERS_ENDPOINTS = {
  GET_LIST_OF_CHARACTERS: GET_LIST.replace(':endpoint', 'characters'),
  GET_CHARACTER:`${BASE_URL}characters/:id?${KEY}`,
  GET_CHARACTERS_COMICS: `${BASE_URL}characters/:id/comics?${KEY}`,
  GET_CHARACTERS_STORIES: `${BASE_URL}characters/:id/stories?${KEY}`,
  FILTER_CHARACTERS_BY_NAME: `${BASE_URL}characters?nameStartsWith=:word&${KEY}`,
};

export const COMICS_ENDPOINTS = {
  GET_LIST_OF_COMICS: GET_LIST.replace(':endpoint', 'comics'),
  GET_COMIC:`${BASE_URL}comics/:id?${KEY}`,
  FILTER_COMICS_BY_FORMAT: `${BASE_URL}comics?format=:format&${KEY}`,
  FILTER_COMICS_BY_TITLE: `${BASE_URL}comics?titleStartsWith=:word&${KEY}`,
  GET_COMICS_CHARACTERS: `${BASE_URL}comics/:id/characters?${KEY}`,
  GET_COMICS_STORIES: `${BASE_URL}comics/:id/stories?${KEY}`
};

export const STORIES_ENDPOINTS = {
  GET_STORIES: GET_LIST.replace(':endpoint', 'stories'),
  GET_STORIES_COMICS: `${BASE_URL}stories/:id/comics?${KEY}`
};
