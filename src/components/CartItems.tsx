import { useCustomDispatch, useCustomSelector } from "../hooks";
import { type CartItem, cartActions } from "../store/cartSlice";

export default function CartItems() {
  const { items } = useCustomSelector((state) => state.cart);
  const dispatch = useCustomDispatch();

  const handleAddToCart = (item: CartItem) => {
    dispatch(cartActions.addToCart(item));
  };
  const handleRemoveFromCart = (idObj: { id: string }) => {
    dispatch(cartActions.removeFromCart(idObj));
  };

  const formattedTotalPrice = items
    .reduce((prevValue, currItem): number => {
      return prevValue + currItem.quantity * currItem.price;
    }, 0)
    .toFixed(2);

  return (
    <div id="cart">
      {items.length == 0 && <p>No items in cart!</p>}
      {items.length > 0 && (
        <ul id="cart-items">
          {items.map((item) => {
            const formattedPrice = `$${item.price.toFixed(2)}`;

            return (
              <li key={item.id}>
                <div>
                  <span>{item.title}</span>
                  <span> ({formattedPrice})</span>
                </div>
                <div className="cart-item-actions">
                  <button onClick={() => handleRemoveFromCart({ id: item.id })}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleAddToCart(item)}>+</button>
                </div>
              </li>
            );
          })}
        </ul>
      )}

      <p id="cart-total-price">
        Cart Total: <strong>{formattedTotalPrice}</strong>
      </p>
    </div>
  );
}
