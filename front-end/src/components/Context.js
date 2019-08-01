import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

const initialState = {
  filter: "all",
  search: "all"
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'filter':
      return {
        ...state,
        filter: action.filter
      };
    case 'search':
      return {
          ...state,
          search: action.search
      };

    default:
      return state;
  }
};

export const StateProvider = ({children}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);