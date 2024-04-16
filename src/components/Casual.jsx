import { FaPlay } from "react-icons/fa";
function Casual({ brand, name, title, image }) {
  return (
    <div className="container mx-auto flex flex-row-reverse justify-between items-end h-[100%] p-9">
      <div className="h-[100%]">
        <img className="h-[100%]" src={image} alt="" />
      </div>
      <div className="my-2 flex flex-col gap-3">
        <div className="text-neutral-400">
        <p>{brand}</p>
        </div>
        <div className="text-2xl">
        <p>{name}</p>
        </div>
        <div className="flex gap-6">
          <p>{title}</p>
          <FaPlay />
        </div>
      </div>
    </div>
  );
}
export default Casual;
