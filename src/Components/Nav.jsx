import { Link } from "react-router-dom";
import { FaUserAlt, FaRegHeart } from "react-icons/fa";
import { IoChatbubbleEllipsesOutline, IoSearch } from "react-icons/io5";

const Nav = () => {
    const content = (
        <>
            <div className="lg:hidden block absolute top-16 w-full left-0 right-0 bg-slate-900 transition">
                <ul className="text-center text-xl p-20">
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="/about">About</Link>
                    </li>
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="/catalog">Catalog</Link>
                    </li>
                    <li className="my-4 py-4 border-b border-slate-800 hover:bg-slate-800 hover:rounded">
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
        </>
    );
    
    return (
        <nav>
            <div className="h-10vh flex items-center justify-between z-50 text-black lg:py-5 px-5 py-4 flex-1">
                <div className="flex items-center justify-start">
                    <img src="./images/logo-oemah.png" alt="Logo Oemah" className="w-12 h-8" />
                    <span className="text-3xl font-bold p-1">OEMAH</span>
                </div>
                <div className="lg:flex md:flex lg:flex-1 items-center justify-center font-normal hidden">
                    <div className="flex-10">
                        <ul className="flex gap-8 text-[18px]">
                                <Link to="/catalog">
                                <li className="border border-transparent hover:bg-customBrown hover:border-customBrown transition rounded-lg p-1">Catalog</li>
                                </Link>
                                <Link to="/about">
                                <li className="border border-transparent hover:bg-customBrown hover:border-customBrown transition rounded-lg p-1">About</li>
                                </Link>
                                <Link to="/contact">
                                <li className="border border-transparent hover:bg-customBrown hover:border-customBrown transition rounded-lg p-1">Contact</li>
                                </Link>
                                <Link to="/payment">
                                <li className="border border-transparent hover:bg-customBrown hover:border-customBrown transition rounded-lg p-1">Payment</li>
                                </Link>
                        </ul>
                    </div>
                </div>
                <div className="flex gap-5 items-center">
                <IoSearch className="text-xl" />
                <FaRegHeart className="text-xl" />
                <IoChatbubbleEllipsesOutline className="text-xl" />
                <FaUserAlt className="text-xl" />
            </div>
            </div>
        </nav>
    );
};

export default Nav;
