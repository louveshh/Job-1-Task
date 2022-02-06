import React, { useContext, useReducer, useEffect, createContext } from "react";
import cartItems from "../data/Data.json";
import Reducer from "./Reducer";

const AppContext = createContext();

const url = "https://fakestoreapi.com/products?limit=2";

const initialState = {
  currency: cartItems.currency,
  cart: cartItems.items,
  hide: true,
  loading: false,
  total: 0,
  currency: cartItems.currency,
  shipping: cartItems.shipping,
  extra: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  const switchCart = () => {
    dispatch({ type: "SWITCH_CART" });
  };

  const hideCart = () => {
    dispatch({ type: "HIDE_CART" });
  };
  const increaseAmount = (id) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: { id } });
  };
  const decreaseAmount = (id) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: { id } });
  };
  const setAmount = (id, amount) => {
    dispatch({ type: "SET_AMOUNT", payload: { id, amount } });
  };
  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  const fetchData = async () => {
    const response = await fetch(url);
    const extra = await response.json();
    dispatch({ type: "GET_EXTRA", payload: extra });
  };

  useEffect(() => {
    dispatch({ type: "PRICE_SUMMARY" });
  }, [state.cart]);

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider
      value={{
        ...state,
        switchCart,
        hideCart,
        increaseAmount,
        decreaseAmount,
        setAmount,
        removeItem,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
