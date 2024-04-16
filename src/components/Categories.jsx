import Category from "./Category";


function Categories() {
  return (
    <div>
      <h3 className="text-center my-12 font-semibold text-2xl">Top Categories</h3>
      <div className="flex container mx-auto justify-between">
      
        <Category name="Jackets" img="src/assets/images/sweater.png" />
        <Category name="Handbags" img="src/assets/images/handbag.png" />
        <Category name="Shirts" img="src/assets/images/tshirt.png" />
        <Category name="Dresses" img="src/assets/images/dress.png" />
        <Category name="Jeans" img="src/assets/images/jeans.png" />
        <Category name="Shoes" img="src/assets/images/shoe.png" />
        <Category name="Sweaters" img="src/assets/images/sweater.png" />
 
      </div>
    </div>
  );
}
export default Categories;
