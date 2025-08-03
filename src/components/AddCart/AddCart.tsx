import { FaMinus, FaPlus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import {
  addToCart,
  decrementQuantity,
  incrementQuantity,
} from "../../store/CartSlice";
import type { Product } from "../../types";

import Toast from "../Toast/Toast";

interface CartProps {
  id: number;
  product: Product;
}

const AddCart = ({ id, product }: CartProps) => {
  const dispatch = useAppDispatch();
  const cartItem = useAppSelector((state) =>
    state.cart.item.find((cartItem) => cartItem.product.id === id)
  );

  const quantity = cartItem?.quantity || 0;
  const stock = cartItem?.product.stock || 0;

  const handleAddToCart = () => {
    dispatch(addToCart({ product, quantity: 1 }));
    Toast({ img: product.thumbnail, title: `${product.title} added to cart` });
  };

  if (!cartItem) {
    return (
      <button className="btn btn-primary" onClick={handleAddToCart}>
        Add to Cart
      </button>
    );
  }

  return (
    <div className="btn btn-primary ">
      <button
        className="cursor-pointer disabled:opacity-50"
        disabled={quantity <= 1}
        onClick={() => dispatch(decrementQuantity(id))}
      >
        <FaMinus />
      </button>
      <span>{quantity}</span>
      <button
        className="cursor-pointer disabled:opacity-50 "
        disabled={quantity >= stock}
        onClick={() => dispatch(incrementQuantity(id))}
      >
        <FaPlus />
      </button>
    </div>
  );
};

export default AddCart;
