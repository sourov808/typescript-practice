import toast from "react-hot-toast";
import { LuCircleX } from "react-icons/lu";

interface ToastProps {
  title: string;
  img: string;
  titleDes: string;
}

const Toast = ({ img, title, titleDes }: ToastProps) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-md  pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0 pt-0.5">
            <img
              className="h-10 w-10 border p-2 bg-yellow-100 rounded-full"
              src={img}
              alt={title}
            />
          </div>

          <p className="text-sm pl-2 mt-2 font-medium text-black ">
            <span className="text-sm pl-2 mt-2 font-medium  text-green-400">
              {title}
            </span>
            <span>{titleDes}</span>
          </p>
        </div>
      </div>
    </div>
  ));
};

export default Toast;
