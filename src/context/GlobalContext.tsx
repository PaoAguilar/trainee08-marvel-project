import { createContext, useReducer } from 'react';
import { Action, reducer, State } from '../config/reducer';
import { ChildrenProps } from '../types/interfaces';

const initialState: State = {
  characters: [],
  stories: [],
  comics: [],
  bookmark: {
    characters: [],
    comics: [],
    stories: [],
  },
};

interface ContextInterface {
  state: State;
  dispatch: (action: Action) => void;
}

export const GlobalContext = createContext<ContextInterface>({
  state: initialState,
  dispatch: () => {},
});

const GlobalProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
