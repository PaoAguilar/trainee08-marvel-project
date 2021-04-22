import { Character, Comic, Story } from '../types/interfaces';

export type Action = {
  type: 'SET_CHARACTER' | 'SET_COMIC' | 'SET_STORY';
  payload?: {
    characters?: Character[];
    comics?: Comic[];
    stories?: Story[];
  };
};

export interface State {
  characters?: Character[] | null;
  comics?: Comic[] | null;
  stories?: Story[] | null;
}

export const reducer = (state: State, action: Action): State => {
  const { type } = action;

  switch (type) {
    case 'SET_CHARACTER': {
      const characters = action.payload?.characters;
      if (characters) return { ...state, characters };
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
