import { MdOutlineLocationOn } from "react-icons/md";
import type { Product } from "../../types";
import type React from "react";

interface DeliveryProps {
  product: Product;
}

const Delivery: React.FC<DeliveryProps> = ({ product }) => {
  const { returnPolicy, warrantyInformation, weight, shippingInformation } =
    product;
  return (
    <div className="font-lora    w-full">
      <h1 className="flex items-center gap-1">
        <span className="text-blue-500 text-lg">
          <MdOutlineLocationOn />
        </span>
        Delivery Details
      </h1>
      <p className="ml-3.5">Weight: {weight}</p>
      <div className="border-b ">
        <ul className="list-disc pl-5">
          <li>{shippingInformation}</li>
          <li>{returnPolicy}</li>
          <li>{warrantyInformation}</li>
        </ul>
      </div>
    </div>
  );
};

export default Delivery;
