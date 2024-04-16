
function Category({ name, img }) {
  return (
    <div className="">
      <div className=" flex justify-center items-center rounded-full bg-[#f0efef]  w-[100px] h-[100px]">
        <img className="flex" src={img} alt="" width={50} />
      </div>
      <p>{name}</p>
    </div>
  );
}
export default Category;
