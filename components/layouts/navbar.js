import Image from "next/image"
const Navbar = () => (
    <section>
        <div className="h-7 w-full bg-lumin text-center">
            <small className="text-white text-tiny hover:text-lumin-darkgreen cursor-pointer">Get Your Free Trial Today</small>
        </div>
        <div className="nav-wrapper">
            <nav className="pl-12 pr-12 sticky top-0">
                <ul className="flex flex-row justify-between items-center h-full">
                    <li className="flex flex-row items-center">
                        <Image src="/logo.png" width="170" height="48.64" />
                        <div className="ml-10 flex flex-row">
                            <a className="mr-8"><h6 className="text-minor">Shop</h6></a>
                            <a className="mr-8"><h6 className="text-minor">Help</h6></a>
                            <a className="mr-8"><h6 className="text-minor">Blog</h6></a>
                        </div>
                    </li>
                    <li className="flex flex-row items-center">
                        <a className="text-minor mr-8">Account</a>
                        <h6 className="text-minor">
                            <Image src="/cart.png" width="25" height="21.64"/>
                            <sup className="-mt-10"><span className="text-minor">2</span></sup>
                        </h6>
                    </li>
                </ul>
            </nav>
        </div>
    </section>
)
export default Navbar;