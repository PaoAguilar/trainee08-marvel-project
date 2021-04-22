import { Character, Comic, Story } from '../types/interfaces';

export type Action = {
  type:
    | 'LIST_OF_CHARACTER'
    | 'LIST_OF_COMICS'
    | 'SET_CHARACTER'
    | 'SET_CHARACTERS_COMICS'
    | 'SET_CHARACTER_STORIES'
    | 'SET_COMIC'
    | 'SET_COMIC_CHARACTERS'
    | 'SET_COMIC_STORIES'
    | 'SET_STORY';
  payload?: {
    characters?: Character[];
    character?: Character;
    charactersComics?: Comic[];
    characterStories?: Story[];
    comics?: Comic[];
    comic?: Comic;
    comicCharacters?: Character[];
    comicStories?: Story[];
    stories?: Story[];
  };
};

export interface State {
  characters?: Character[] | null;
  character?: Character | null;
  charactersComics?: Comic[] | null;
  characterStories?: Story[] | null;
  comics?: Comic[] | null;
  comic?: Comic | null;
  comicCharacters?: Character[] | null;
  comicStories?: Story[] | null;
  stories?: Story[] | null;
}

export const reducer = (state: State, action: Action): State => {
  const { type } = action;

  switch (type) {
    case 'LIST_OF_CHARACTER': {
      const characters = action.payload?.characters;
      if (characters) return { ...state, characters };
      break;
    }
    case 'SET_CHARACTER': {
      const character = action.payload?.character;
      if (character) return { ...state, character };
      break;
    }
    case 'SET_CHARACTERS_COMICS': {
      const charactersComics = action.payload?.charactersComics;
      if (charactersComics) return { ...state, charactersComics };
      break;
    }
    case 'SET_CHARACTER_STORIES': {
      const characterStories = action.payload?.characterStories;
      if (characterStories) return { ...state, characterStories };
      break;
    }
    case 'LIST_OF_COMICS': {
      const comics = action.payload?.comics;
      if (comics) return { ...state, comics };
      break;
    }
    case 'SET_COMIC': {
      const comic = action.payload?.comic;
      if (comic) return { ...state, comic };
      break;
    }
    case 'SET_COMIC_CHARACTERS': {
      const comicCharacters = action.payload?.comicCharacters;
      if (comicCharacters) return { ...state, comicCharacters };
      break;
    }
    case 'SET_COMIC_STORIES': {
      const comicStories = action.payload?.comicStories;
      if (comicStories) return { ...state, comicStories };
      break;
    }
    case 'SET_STORY': {
      const stories = action.payload?.stories;
      if (stories) return { ...state, stories };
      break;
    }
  }
  return { ...state };
};
