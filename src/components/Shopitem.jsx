import { FiSearch } from "react-icons/fi";
function Shopitem() {
  return (
    <div className="container mx-auto">
      <div className="flex  border-emerald-300
      items-center border rounded-full my-[6em] right-6 px-8 gap-3 w-[70%] ">
        <FiSearch size={30} />
        <input
          className="text-[1.2rem] p-7 "
          type="text"
          placeholder="Search Products and categories"
        />
        <h3>Filter Categories</h3>
      </div>
    </div>
  );
}
export default Shopitem;
