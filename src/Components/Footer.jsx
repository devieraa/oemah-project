import React from 'react';
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="bg-white text-black py-10 px-5">
            <div className="flex justify-between items-start">
                <div className="w-1/3">
                    <h2 className="text-2xl font-bold mb-4">Oemah</h2>
                    <p className="text-gray-500">
                    Your perfect designer is just a click away! Browse portfolios of top interior designers, connect with professionals that match your style, and bring your vision to life.
                    </p>
                </div>
                <div className="w-1/3 flex justify-around">
                    <div>
                        <h3 className="text-gray-400 font-medium mb-3">Links</h3>
                        <ul className="space-y-2">
                            <Link to="About">
                                <li className="hover:underline mb-2">About</li>
                            </Link>
                            <Link to="Catalog">
                                <li className="hover:underline mb-2">Catalog</li>
                                </Link>
                            <Link to="Contacts">
                                <li className="hover:underline mb-2">Contact</li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-400 font-medium mb-3">Help</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline">Payment Options</a></li>
                            <li><a href="#" className="hover:underline">Returns</a></li>
                            <li><a href="#" className="hover:underline">Privacy Policies</a></li>
                        </ul>
                    </div>
                </div>
                <div className="w-1/4 flex justify-center">
                    <img src="./images/logo-oemah.png" alt="Logo Oemah" className="w-25 h-20" />
                </div>
            </div>
            <div className="border-t border-gray-300 mt-10 pt-4 text-center">
                2024 Oemah. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
