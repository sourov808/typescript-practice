import { BsDashCircle, BsFillTrashFill, BsPlusCircle } from "react-icons/bs";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  clearCart,
  decrementQuantity,
  incrementQuantity,
  removeItem,
} from "../../store/CartSlice";

const Cart = () => {
  const dispatch = useAppDispatch();
  const { item, quantity } = useAppSelector((state) => state.cart);

  const totalPrice = item.reduce(
    (sum, { product, quantity }) => sum + product.price * quantity,
    0
  );

  if (item.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
      </div>
    );
  }
  return (
    <section className="p-8 max-w-4xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Shopping Cart</h1>

      {item.map(({ product, quantity }) => (
        <div
          key={product.id}
          className="grid grid-cols-[1fr_auto_2fr_auto] items-center gap-4 border-b py-4"
        >
          <div className="w-40">
            <img
              src={product.thumbnail}
              alt={product.title}
              className=" border  h-20 object-cover rounded"
            />
          </div>
          <div>
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-gray-600 text-sm line-clamp-2">
              {product.description}
            </p>
            <p>
              <strong>${product.price.toFixed(2)}</strong> each
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label={`Decrease quantity of ${product.title}`}
              onClick={() => dispatch(decrementQuantity(product.id))}
              className="p-1 disabled:opacity-50"
              disabled={quantity <= 1}
            >
              <BsDashCircle size={20} />
            </button>
            <span className="text-lg px-2">{quantity}</span>
            <button
              aria-label={`Increase quantity of ${product.title}`}
              onClick={() => dispatch(incrementQuantity(product.id))}
              className="p-1"
            >
              <BsPlusCircle size={20} />
            </button>
          </div>

          <div className="space-y-2 text-right">
            <span className="block">
              <strong>Total:</strong> ${(product.price * quantity).toFixed(2)}
            </span>
            <button
              onClick={() => dispatch(removeItem(product.id))}
              aria-label={`Remove ${product.title} from cart`}
              className="text-red-600 hover:underline inline-flex items-center gap-1"
            >
              <BsFillTrashFill />
              Remove
            </button>
          </div>
        </div>
      ))}
      <div className="mt-6 flex justify-between items-center">
        <button
          onClick={() => dispatch(clearCart())}
          className="text-white font-semibold btn bg-red-600"
        >
          Clear Cart
        </button>
        <div className="space-y-1 text-right">
          <p>
            Items: <span className="font-bold">{quantity}</span>
          </p>
          <p className="text-2xl">
            Total: <span className="font-bold">${totalPrice.toFixed(2)}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
