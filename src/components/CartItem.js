import React from "react";
import { useDispatch } from "react-redux";
import "./Cart.css";
import { cartActions } from "../store/cart-slice";
const CartItem = ({ name, quantity, total, price, id }) => {
  console.log(quantity, "qunatity");
  const dispatch = useDispatch();
  const removeHandler = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  const addHandler = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };

  const incrementCartItem = () => {
    dispatch(
      cartActions.addToCart({
        id,
        name,
        price,
      })
    );
  };

  const decrementCartItem = () => {
    dispatch(cartActions.removeFromCart(id));
  };
  // return (
  //   <div className="cartItem">
  //     <h2> {name}</h2>
  //     <p>${price} /-</p>
  //     <p>x{quantity}</p>
  //     <article>Total ${total}</article>
  //     <button className="cart-actions" onClick={removeHandler}>
  //       -
  //     </button>
  //     <button className="cart-actions" onClick={addHandler}>
  //       +
  //     </button>
  //   </div>
  // );
  return (
    <div className="cartItem">
      <h2> {name}</h2>
      <p>${price} /-</p>
      <p>x{quantity}</p>
      <article>Total ${total}</article>
      <button className="cart-actions" onClick={incrementCartItem}>
        +
      </button>
      <button className="cart-actions" onClick={decrementCartItem}>
        -
      </button>
    </div>
  );
};

export default CartItem;
