const Reducer = (state, action) => {
  if (action.type === "SWITCH_CART") {
    let status = state.hide;
    return { ...state, hide: !status };
  }
  if (action.type === "HIDE_CART") {
    return { ...state, hide: false };
  }
  if (action.type === "INCREASE_AMOUNT") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        if (
          typeof cartItem.qty === "string" ||
          cartItem.qty instanceof String
        ) {
          return { ...cartItem, qty: Number(cartItem.qty) + 1 };
        } else {
          return { ...cartItem, qty: cartItem.qty + 1 };
        }
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "DECREASE_AMOUNT") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, qty: cartItem.qty - 1 };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "SET_AMOUNT") {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        return { ...cartItem, qty: action.payload.amount };
      }
      return cartItem;
    });
    return { ...state, cart: tempCart };
  }
  if (action.type === "REMOVE_ITEM") {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== action.payload),
    };
  }
  if (action.type === "PRICE_SUMMARY") {
    let shipping = state.shipping;
    let { total } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, qty } = cartItem;
        const itemTotal = price.current_price * qty;

        cartTotal.total += itemTotal;
        return cartTotal;
      },
      {
        total: 0,
      }
    );

    if (total !== 0) {
      total += shipping;
    }

    total = parseFloat(total.toFixed(2));

    return { ...state, total };
  }
  if (action.type === "GET_EXTRA") {
    return { ...state, extra: action.payload };
  }

  throw new Error("no matching action type");
};

export default Reducer;
