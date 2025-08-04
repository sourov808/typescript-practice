import { CgShoppingCart } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { useAppSelector } from "../hooks/storeHooks";

const Navbar = () => {
  const cartItem = useAppSelector((state) => state.cart.item);

  const totalCount = cartItem?.reduce((sum, { quantity }) => sum + quantity, 0);

  const links = (
    <>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-cyan-400 font-semibold " : ""
          }
        >
          Home
        </NavLink>
      </li>{" "}
      <li>
        <NavLink
          to={"/products"}
          className={({ isActive }) =>
            isActive ? "bg-cyan-400 font-semibold " : ""
          }
        >
          Products
        </NavLink>
      </li>{" "}
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive }) =>
            isActive ? "bg-cyan-400 font-semibold" : ""
          }
        >
          About
        </NavLink>
      </li>{" "}
      <li>
        <NavLink
          to={"/contact"}
          className={({ isActive }) =>
            isActive ? "bg-cyan-400 font-semibold" : ""
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar  bg-base-100 shadow-sm font-lora">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="text-xl font-bold" to={"/"}>
          STORE
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavLink to={"/cart"} className="relative inline-block p-2 mr-6">
          <div className="indicator">
            <CgShoppingCart size={24} />
            <span className="relative bg-green-400 rounded-full text-xs  text-black ">
              {totalCount > 0 && (
                <span className="badge badge-sm indicator-item bg-blue-700 font-bold">
                  {totalCount}
                </span>
              )}
            </span>
          </div>
        </NavLink>
        <a className="btn bg-blue-600">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
