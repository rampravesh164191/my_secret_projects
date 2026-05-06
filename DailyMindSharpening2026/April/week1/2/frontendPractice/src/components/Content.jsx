import pic1 from "../assets/pics/p1.webp"
import s1 from "../assets/pics/s1.webp"
import s2 from "../assets/pics/s2.webp"
import s3 from "../assets/pics/s3.webp"
import s4 from "../assets/pics/s4.webp"
import s5 from "../assets/pics/s5.webp"
import s6 from "../assets/pics/s6.webp"
import s7 from "../assets/pics/s7.webp"
import s8 from "../assets/pics/s8.webp"
import card1 from "../assets/pics/card1.webp"
import q1 from "../assets/pics/q1.webp"
import q2 from "../assets/pics/q2.webp"
import q3 from "../assets/pics/q3.webp"
import q4 from "../assets/pics/q4.webp"


function Content(){
    return (
        <>
        <div>
            <div className="relative">
                <img src={pic1} alt="pic1" />
                <div className="absolute w-[400px] h-[300px] right-[50px] top-[100px]">
                    <p className="text-[40px] text-white">Smart Shopping</p>
                    <p className="text-[40px] text-white">Trusted by Millions</p>
                    <button className="text-[40px] px-[30px] py-[10px] rounded-lg bg-white mt-[30px]">Shop Now</button>
                </div>
            </div>
            <div className="border h-[80px] flex items-center bg-gray-200 px-3">
                <div className="border border-gray-500 rounded-lg h-[60%] w-full bg-white flex justify-center">
                    <div className="w-[30%] flex items-center justify-between">
                        <p>7 Days Easy Return</p>
                        <div className="border h-[50%] border-gray-200"></div>
                        <p>Cash on Delivery</p>
                        <div className="border h-[50%] border-gray-200"></div>
                        <p>Lowest Prices</p>
                    </div>
                </div>
            </div>
            {/* ----------------------------next section ----------------------------------------- */}
            <div className="border h-[300px] flex items-center justify-between px-[50px] text-center">
                <div className="hover:mb-[20px] cursor-pointer">
                    <img src={s1} alt="s1" />
                    <p className="mt-3">Ethnic Wear</p>
                </div>
                <div className="hover:mb-[20px] cursor-pointer">
                    <img src={s2} alt="s2" />
                    <p className="mt-3">Western Dresses</p>
                </div>
                <div className="hover:mb-[20px] cursor-pointer">
                    <img src={s3} alt="s3" />
                    <p className="mt-3">Menswear</p>
                </div>
                <div className="hover:mb-[20px] cursor-pointer">
                    <img src={s4} alt="s4" />
                    <p className="mt-3">Footwear</p>
                </div>
                <div className="hover:mb-[20px] cursor-pointer">
                    <img src={s5} alt="s5" />
                    <p className="mt-3">Home Decor</p>
                </div>
                <div className="hover:mb-[20px] cursor-pointer">
                    <img src={s6} alt="s6" />
                    <p className="mt-3">Beauty</p>
                </div>
                <div className="hover:mb-[20px] cursor-pointer">
                    <img src={s7} alt="s7" />
                    <p className="mt-3">Accessories</p>
                </div>
                <div className="hover:mb-[20px] cursor-pointer">
                    <img src={s8} alt="s8" />
                    <p className="mt-3">Grocery</p>
                </div>
            </div>
            {/* -------------------------next section-------------------- */}
            <div className="relative">
                <img src={card1} alt="card1" className="w-full" />
                <div className="h-[500px] w-[400px] absolute right-[100px] top-[80px]">
                    <div className="flex justify-between mb-[50px]">
                        <img src={q1} alt=""  />
                        <img src={q2} alt="" />
                    </div>
                    <div className="flex justify-between">
                        <img src={q3} alt="" />
                        <img src={q4} alt="" />
                    </div>
                </div>
            </div>

        </div>
        </>
    )
}
export default Content;