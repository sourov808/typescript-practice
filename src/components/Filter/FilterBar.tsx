import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHooks";
import { setSearch, setSort } from "../../store/filterSlice";

const FilterBar = () => {
  const dispatch = useAppDispatch();
  const { search, sort } = useAppSelector((state) => state.filters);

  const [localSearch, setLocalSearch] = useState(search);

  useEffect(() => {
    const handler = setTimeout(() => {
      dispatch(setSearch(localSearch));
    }, 500);
    return () => clearTimeout(handler);
  }, [localSearch, dispatch]);

  return (
    <div className="flex flex-col md:flex-row gap-4 justify-center mb-6">
      <input
        type="text"
        placeholder="Search products..."
        value={localSearch}
        onChange={(e) => setLocalSearch(e.target.value)}
        className="border rounded-md px-4 py-2 w-full md:w-1/3 shadow-sm focus:ring focus:ring-blue-300"
      />

      <select
        value={sort}
        onChange={(e) =>
          dispatch(setSort(e.target.value as "asc" | "desc" | "none"))
        }
        className="border rounded-md px-4 py-2 shadow-sm"
      >
        <option className=" text-black" value="none">
          Sort By
        </option>
        <option className=" text-black" value="asc">
          Price: Low to High
        </option>
        <option className=" text-black" value="desc">
          Price: High to Low
        </option>
      </select>
    </div>
  );
};

export default FilterBar;
