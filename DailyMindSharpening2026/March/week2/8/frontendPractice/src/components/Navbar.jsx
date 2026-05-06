function Navbar(){
    return (
        <div className="border h-[60px] flex items-center justify-between px-2">
            <div>Orange</div>
            <div className="flex gap-3">
                <select name="" id="" className="border absolute left-[50vw]">
                        <option value="store">Store</option>
                        <option value="electronics">Electronics</option>
                        <option value="vegetables">Vegetables</option>
                        <option value="fruits">Fruits</option>
                </select>
                <p>Cart</p>
            </div>
            <div className="flex gap-3">
                <button className="border px-3 py-1 rounded-lg bg-green-400 text-white hover:bg-green-500 cursor-pointer">Signup</button>
                <button className="border px-3 py-1 rounded-lg bg-blue-400 text-white hover:bg-blue-500 cursor-pointer">Login</button>
            </div>
        </div>
    )
}
export default Navbar;