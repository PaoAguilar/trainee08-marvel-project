import { Character, Comic, Story } from '../types/interfaces';

export type Action = {
  type:
    | 'LIST_OF_CHARACTER'
    | 'SET_CHARACTER'
    | 'SET_CHARACTERS_COMICS'
    | 'SET_CHARACTER_STORIES'
    | 'SET_COMIC'
    | 'SET_STORY';
  payload?: {
    characters?: Character[];
    character?: Character;
    charactersComics?: Comic[];
    characterStories?: Story[];
    comics?: Comic[];
    stories?: Story[];
  };
};

export interface State {
  characters?: Character[] | null;
  character?: Character | null;
  charactersComics?: Comic[] | null;
  characterStories?: Story[] | null;
  comics?: Comic[] | null;
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
    case 'SET_COMIC': {
      const comics = action.payload?.comics;
      if (comics) return { ...state, comics };
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
