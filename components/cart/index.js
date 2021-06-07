import Image from "next/image"
const Index = () => (
    <section className="cart-wrapper">
        <div className="cart-wrapper__sidebar bg-lumin-darkwhite p-5 pt-7">
            <div className="cart-header flex flex-row items-center justify-between">
                <div className="w-5/12">
                    <button className="w-6 h-6 flex flex-row items-center justify-center rounded-2xl border border-lumin-grey">
                        <Image src="/chev-arrow.svg" width="10" height="10"/>
                    </button>
                </div>
                <span className=" text-x-tiny text-lumin-darkgrey w-7/12" style={{letterSpacing:'1px',fontWeight:600}}>YOUR CART</span>
            </div>
            <div className="mt-6">
                <select className="default pl-3 pr-3 text-tiny">
                    <option>GBP</option>
                </select>
            </div>

            <div className="cart-items grid grid-cols-1 gap-3 mt-5">
                <div className="bg-white p-4">Item 1</div>
                <div className="bg-white p-4">Item 1</div>
                <div className="bg-white p-4">Item 1</div>
            </div>
        </div>
    </section>
)
export default Index;