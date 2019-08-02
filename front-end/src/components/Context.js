import React, {createContext, useContext, useReducer} from 'react';

export const StateContext = createContext();

const initialRequest = {
  id: 1,
  status: 'In Progress',
  dateCreated: 'today',
  dateCompleted: '',
  parkLocation: 32,
  requestType: 'Bathroom Service',
  problemDesc: 'Clean bathroom at end of trail',
  email: 'megan.moore@credera.com'
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
  <StateContext.Provider value={useReducer(reducer, initialRequest)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);