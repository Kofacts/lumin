const Footer = () => (
    <section className="bg-lumin-button mt-24 p-12">
        <div className="flex flex-row">
            <div className="w-4/12">
                <h2 className="text-3xl text-white">Let's stay in touch</h2>
                <h6 className="text-major w-9/12 text-white mt-5">We’ll give you a heads up on new Lumin products, deals, and events, plus tips & tricks on how to keep your skin looking its damned finest.</h6>
            </div>
            <div className="w-7/12 ml-10">
            <div className="grid grid-cols-4 gap-4">
                <ul>
                    <li>
                        <h6 className="text-bold text-white text-major-big" style={{fontWeight:700}}>Shop</h6>
                    </li>
                    <li className="mt-5">
                        <h6 className="text-white text-major-big">Skin</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Hair</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Body</h6>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h6 className="text-bold text-white text-major-big" style={{fontWeight:700}}>About</h6>
                    </li>
                    <li className="mt-5">
                        <h6 className="text-white text-major-big">Ingredients</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Reviews</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Support</h6>
                    </li>
                </ul>
                <ul>
                    <li>
                        <h6 className="text-bold text-white text-major-big" style={{fontWeight:700}}>More</h6>
                    </li>
                    <li className="mt-5">
                        <h6 className="text-white text-major-big">Blog</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Free Trial FAQ</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Request Personal Data</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Affiliate</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Lumin Wholesale Inquiry</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Jobs</h6>
                    </li>
                    <li className="mt-2">
                        <h6 className="text-white text-major-big">Heroes Program</h6>
                    </li>
                </ul>
                <ul className="flex flex-row">
                   <li className="mr-2 text-white">IN</li>
                   <li className="mr-2 text-white">FB</li>
                   <li className="mr-2 text-white">TW</li>
                </ul>
            </div>
        </div>
        </div>
        <div className="mt-2">
            <h6 className="text-white" style={{fontWeight:700}}>Need help?</h6>
            <h6 className="mt-2 text-white">Contact us through our <a className="underline">Support Concierge</a></h6>
            <h6 className="text-white mt-2">Or email us at <a className="underline">support@luminskin.com</a></h6>
            <h6 className="text-white mt-6">© 2021, Lumin</h6>
            <h6 className="mt-5 text-white">
                <a className="underline">Privacy Policy</a>
                <a className="underline ml-4">Return Policy</a>
            </h6>
            <h6 className="mt-5 text-white">
                3600 Wilshire Boulevard, Suite 1700, Los Angeles, CA 90010
            </h6>
        </div>
    </section>
)
export default Footer;