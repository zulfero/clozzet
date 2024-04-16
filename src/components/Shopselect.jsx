
function Shopselect({tug,image}) {
  
    return (
    <>
      <div className="border border-[grey] rounded-full h-24 w-24 flex items-center justify-center my-9">
        <p>{tug}</p>
      </div>
      <div>
        <img src={image} alt="" />
      </div>
    </>
  );
}
export default Shopselect;
