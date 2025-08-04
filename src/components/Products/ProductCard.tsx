import { Link } from "react-router-dom";
import type { Product } from "../../types";
import { BsStarFill } from "react-icons/bs";
import AddCart from "../AddCart/AddCart";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface ProductCardProsp {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProsp) => {
  const {
    id,
    description,
    price,
    thumbnail,
    title,
    rating,
    availabilityStatus,

    brand,
  } = product;
  return (
    <div className="flex justify-center">
      <div className="card bg-base-100 max-w-11/12   border shadow-sm hover:scale-105 ">
        <figure className="px-10 pt-10 bg-gray-50 m-2">
          <LazyLoadImage
            src={thumbnail}
            alt={title}
            width={400}
            height={300}
            effect="blur"
            threshold={100}
            placeholderSrc={`${thumbnail}?blur=20&auto=format&fit=clip`}
            wrapperProps={{
              className: "w-full h-full",
              style: { transitionDelay: "1s" },
            }}
            // beforeLoad={() => console.debug(`Loading thumbnail for ${id}`)}
            // onLoad={() => console.debug(`Loaded thumbnail for ${id}`)}
          ></LazyLoadImage>
          {/* <img src={thumbnail} alt="Shoes" className="rounded-xl bg-gray-100" /> */}
        </figure>
        <div className=" flex justify-between px-4 ">
          {brand ? (
            <div className="badge badge-outline badge-info mr-8">{brand}</div>
          ) : (
            ""
          )}

          <p
            className={
              availabilityStatus === "In Stock"
                ? "text-green-400 "
                : "text-red-700"
            }
          >
            {availabilityStatus}
          </p>
        </div>
        <div className="card-body items-start gap-3 ">
          <h2 className="card-title">{title}</h2>
          <p className="line-clamp-2">{description}</p>
          <div className="flex justify-between px-1 w-full">
            <h2 className="card-title">${price}</h2>
            <span className="flex items-center gap-1 badge badge-success rounded-xl text-white font-bold ">
              <BsStarFill size={9} />
              {rating}
            </span>
          </div>
        </div>
        <div className="flex justify-between mx-4 my-3.5">
          <AddCart id={product.id} product={product} />

          <Link className="btn btn-primary  " to={`/products/${id}`}>
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
