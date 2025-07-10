// NUEVA VERSIÓN (REDUX TOOLKIT Y REACT REDUX)
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart, updateQuantity, clearCart } from "../store/slices/cartSlice";

export function useCart() {
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  const getCartTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const getItemCount = () =>
    cartItems.reduce((count, item) => count + item.quantity, 0);

  return {
    cartItems,
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    updateQuantity: (id, quantity) => dispatch(updateQuantity({ id, quantity })),
    clearCart: () => dispatch(clearCart()),
    getCartTotal,
    getItemCount,
  };
}