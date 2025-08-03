import { Link, useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHooks";
import Delivery from "../Delivery/Delivery";
import Review from "../Review/Review";

const ProductDetails = () => {
  const { id } = useParams();
  const product = useAppSelector((state) =>
    state.products.items.find((P) => P.id === Number(id))
  );

  if (!product) return <h2 className="text-center">Product not found</h2>;

  const {
    thumbnail,
    brand,
    availabilityStatus,
    title,
    description,
    price,
    rating,
    reviews,
  } = product;
  // console.log(params);
  return (
    <div className="center  min-h-screen font-playFair">
      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="md:w-12/12">
          <div className="md:w-12/12 center  flex-col md:min-h-10/12 md:ml-3 ">
            <figure className=" md:w-10/12 bg-gray-50 center p-3 rounded-lg">
              <img
                className="w-70 h-70 md:w-[400px] md:h-[350px]  rounded-md"
                src={thumbnail}
                alt={title}
              />
            </figure>
          </div>
          <div className="flex justify-around   mx-4 my-3.5 ">
            <Link className="btn btn-primary  bg-cyan-500" to={"/"}>
              Buy Now
            </Link>
            <Link className="btn btn-primary bg-cyan-500" to={"/"}>
              Buy Now
            </Link>
          </div>
        </div>
        <div className="">
          {" "}
          <div className="card-body items-start gap-5 ">
            {brand ? (
              <div className="badge badge-outline badge-info mr-8">{brand}</div>
            ) : (
              ""
            )}
            <h2 className="card-title text-2xl">{title}</h2>
            <p className="text-balance">{description}</p>

            <div className="space-y-4">
              <h2 className="card-title">${price}</h2>
              <h2 className="card-title ">Rating: {rating}</h2>
            </div>
            <p
              className={
                availabilityStatus === "In Stock"
                  ? "text-green-400 "
                  : "text-red-700"
              }
            >
              {availabilityStatus}
            </p>
            <Delivery product={product} />
            <Review reviews={reviews} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
