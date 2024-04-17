import AddToCart from "../components/AddToCart"

function addtocart({cart,setCart}){
    return(
        <>
        <AddToCart cart={cart} setCart={setCart}/>
        </>
    )
}
export default addtocart