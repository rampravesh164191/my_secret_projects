import logo from "../assets/pics/meeshoLogo.svg";
import {Search} from "lucide-react"
function Navbar(){
    return (
        <>
        <div className="border h-[60px] flex items-center px-3 sticky bg-white top-0 z-2">
            <div className="h-[70%] flex items-center">
                <img src={logo} alt="meeshoLogo" className="h-full" />
            </div>
            <div className="border h-[70%] flex-1 mx-3 rounded flex items-center">
                <Search className="mx-1"/>
                <input type="text" placeholder="Try Saree, Kurti, Search by Product Code" className="flex-1 h-full outline-none" />
            </div>
            <div className="h-[70%] flex gap-3 items-center">
                <p>Become a Supplier</p>
                <div className="border h-full"></div>
                <p>Investor Relations</p>
                <div className="border h-full"></div>
                <div>
                    <p>Profile</p>
                </div>
                <div>
                    <p>Cart</p>
                </div>
            </div>
        </div>
        <div className="border-b h-[40px] flex items-center justify-between px-3 sticky bg-white top-[60px] z-2">
            <p>Popular</p>
            <p>Kurti, Saree & Lehenga</p>
            <p>Women Western</p>
            <p>Lingerie</p>
            <p>Men</p>
            <p>Kids & Toys</p>
            <p>Home & Kitchen</p>
            <p>Beauty & Health</p>
            <p>Jewellery & Accessories</p>
            <p>Bags & Footwear</p>
            <p>Electronics</p>
            <p>Watches</p>
        </div>
        </>
    )
}
export default Navbar;