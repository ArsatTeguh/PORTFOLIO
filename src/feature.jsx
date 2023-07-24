// disinila wadah dari nilai global state
import { createContext, useContext } from "react";
import React, { useReducer } from "react";

// membuat variabel contex dengan createContex dan empty obj sebagai nilai defaultnya
export const AppContext = createContext({});

// callback dispacth(state, dispacth)
export function useStore() {
  return useContext(AppContext);
}

const reducer = (state, action) => {
  switch (action.type) {
    case "THEMA_MODE":
      return { ...state, thema: action.payload };
    default:
      throw new Error("invalid token");
  }
};

const initialState = {
  thema: false,
};

// pusat data
export const DataContext = ({ children }) => {
  const [state, dispacth] = useReducer(reducer, initialState);

  const addThema = ({ type, value }) => {
    dispacth({
      type: type,
      payload: value,
    });
  };

  const initialValue = [state, addThema];

  return (
    <AppContext.Provider value={initialValue}>{children}</AppContext.Provider>
  );
};
