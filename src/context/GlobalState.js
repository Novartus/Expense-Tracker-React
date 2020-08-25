import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//Init State
const initialState = {
  transactions: [
    { id: 1, text: "VideoGame", amount: -10 },
    { id: 2, text: "Stipend", amount: 300 },
    { id: 3, text: "Laptop Accessory", amount: -20 },
    { id: 4, text: "Books", amount: -10 },
  ],
};

// Create Context
export const GlobalContext = createContext(initialState);

//To access globalContext we need a provider component

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //Actions
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
