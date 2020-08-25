import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transactions) => (
          <Transaction
            text={transactions.text}
            amount={transactions.amount}
            key={transactions.id}
            _id={transactions._id}
          />
        ))}
      </ul>
    </>
  );
};
