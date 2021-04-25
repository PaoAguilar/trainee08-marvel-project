import { useContext, useEffect, useState } from 'react';
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

export const useGlobalContex = () => {
  const authState = useContext(GlobalContext);
  return authState;
};

const GlobalProvider = ({ children }: ChildrenProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const [bookmark, setBookmark] = useState({})
  // const itemsData = JSON.parse(localStorage.getItem('BOOKMARKS'))
  // useEffect(() => {
  //   // const itemsData = JSON.parse(localStorage.getItem('BOOKMARKS'))
  //   if (itemsData) {
  //     setBookmark(bookmark)
  //   }
  // },[bookmark]);

  useEffect(() => {
    dispatch({
      type: 'GET_BOOKMARKS'
    });
  }, []);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;
