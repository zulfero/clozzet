import Casual from "./Casual";
function Casualcollection() {
  return (
    <div className="container mx-auto grid grid-cols-2 grid-rows-[300px_300px_300px] gap-[1em] my-9">
      <div className="bg-[#f0efef] row-start-1 row-end-3 ">
        <Casual
          brand="Casual Collection"
          name="Men's Collection"
          title="Shop Now"
          image="src/assets/images/mens.png"
        />
      </div>
      <div className="bg-[#E3F9FB] ">
        <Casual
          image="src/assets/images/watches.png"
          brand="Casual Collection"
          name="Luxury Watches"
          title="Shop Now"
        />
      </div>
      <div className="bg-[#FFF1F1]">
        <Casual
          image="src/assets/images/hbags.png"
          brand="Casual Collection"
          name="Designer Handbags"
          title="Shop Now"
        />
      </div>
      
      <div className="bg-[#FEDBDB] row-start-2 row-end-4">
        <Casual
          image="src/assets/images/ladies.png"
          brand="Casual Collection"
          name="Ladies Collection"
          title="Shop Now"
        />
      </div>
    </div>
  );
}
export default Casualcollection;
