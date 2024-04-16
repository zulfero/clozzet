import Shopselect from "./Shopselect"
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
function Shopselector(){
    return(
< div className="container mx-auto flex items-center justify-center gap-6">
    <div className="text-[grey]">
<Shopselect tug={<MdOutlineKeyboardArrowLeft/>}/>
</div>
<Shopselect tug="1"/>
<Shopselect tug="2"/>
<Shopselect tug="3"/>
<Shopselect tug="4"/>
<Shopselect tug="5"/>
<Shopselect tug={<MdOutlineKeyboardArrowRight/>}/>
</div>
    )
}
export default Shopselector