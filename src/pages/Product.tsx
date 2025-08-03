import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/storeHooks";
import { fetchProducts } from "../store/productSlice";
import Skeleton from "../components/Skeleton";
import ProductCard from "../components/Products/ProductCard";

const PLACEHOLDER_COUNT = 8;

const Product = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  console.log(loading, items);

  return (
    <div>
      <h2 className="text-center text-xl my-4">Products</h2>
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <Skeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <h2>Error:{error}</h2>
      ) : items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <h2>No products found.</h2>
      )}
    </div>
  );
};

export default Product;
