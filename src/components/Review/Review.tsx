import type { Product } from "../../types";
import { BsStarFill } from "react-icons/bs";

interface ReviewProps {
  reviews: Product;
}

const Review = ({ reviews }: ReviewProps) => {
  console.log(reviews);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 space-x-1 space-y-3  ">
      {reviews.map((_, r) => (
        <div
          className="border flex flex-col space-y-1  space-x-1.5 p-3 rounded-xl shadow-lg shadow-blue-300"
          key={Math.random()}
        >
          <span className="flex items-center gap-1 badge badge-success rounded-xl text-white font-bold ">
            <span>{r.rating}/5</span> <BsStarFill size={9} />
          </span>

          <div>
            <strong>{r.comment}</strong>
            <p className="text-xs ">{r.reviewerEmail}</p>
            <div className="flex text-xs space-x-2 text-gray-400">
              <p className="text-xs">{r.reviewerName}</p>
              <p>
                comment on:
                {new Date(r.date).toLocaleDateString("en-In", {
                  month: "short",
                  day: "numeric",
                })}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Review;
