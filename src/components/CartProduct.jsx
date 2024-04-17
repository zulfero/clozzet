function Cartproduct({image, price, title, size, add }) {
  return (
    <>
      <div className="flex justify-around items-center py-5">
        <div className="flex justify-center flex-1">
          <img className="" src={image} alt="" width={100} />
          <div className="font-black">
            <h3>{title}</h3>
            <h3 className="text-[#b0b0b0]">{size}</h3>
          </div>
        </div>

        <div className="flex justify-center text-xl flex-1">
          <p className="py-1 px-4 border">{add}</p>
          <p className="py-1 px-4 border">{add}</p>
          <p className="py-1 px-4 border">{add}</p>
        </div>
        <div className="flex-1 flex justify-center">
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}
export default Cartproduct;
