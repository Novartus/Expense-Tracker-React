import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ _id, text, amount }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = amount < 0 ? "-" : "+";
  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button onClick={() => deleteTransaction(_id)} className="delete-btn">
        x
      </button>
    </li>
  );
};
