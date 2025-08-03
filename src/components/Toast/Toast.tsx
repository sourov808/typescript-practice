import toast from "react-hot-toast";
import { LuCircleX } from "react-icons/lu";

interface ToastProps {
  title: string;
  img: string;
}

const Toast = ({ img, title }: ToastProps) => {
  return toast.custom((t) => (
    <div
      className={`${
        t.visible ? "animate-enter" : "animate-leave"
      } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
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

          <p className="text-sm pl-2 mt-2 font-medium  text-green-400">
            {title}
          </p>
        </div>
      </div>
      <div className="flex  border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium"
        >
          <LuCircleX size={20} color="#d00b0b" />
        </button>
      </div>
    </div>
  ));
};

export default Toast;
