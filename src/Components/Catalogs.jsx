import React from 'react';
import { IoFilterOutline, IoShareSocialSharp } from "react-icons/io5";
import { BsViewList } from "react-icons/bs";
import { TbLayoutGridFilled } from "react-icons/tb";
import { MdCompareArrows } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Catalog = () => {
    const navigate = useNavigate();

    const products = [
        { id: 1, name: "Noah Blake", category: "Skandinavia", price: "Rp500.000,00", image: "./images/catalog1.jpg" },
        { id: 2, name: "Revano Satria", category: "Skandinavia", price: "Rp550.000,00", image: "./images/catalog2.jpg" },
        { id: 3, name: "Amelia Carla", category: "Skandinavia", price: "Rp600.000,00", image: "./images/catalog3.jpg" },
        { id: 4, name: "Oliver James", category: "Skandinavia", price: "Rp650.000,00", image: "./images/catalog4.jpg" },
        { id: 5, name: "Emma Grace", category: "Minimalis", price: "Rp500.000,00", image: "./images/catalog5.jpg" },
        { id: 6, name: "Liam Carter", category: "Minimalis", price: "Rp550.000,00", image: "./images/catalog7.jpg" },
        { id: 7, name: "Sophia Rose", category: "Minimalis", price: "Rp600.000,00", image: "./images/catalog6.jpg" },
        { id: 8, name: "Ethan Scott", category: "Minimalis", price: "Rp650.000,00", image: "./images/catalog8.jpg" },
        { id: 9, name: "Ava Morgan", category: "Industrial", price: "Rp500.000,00", image: "./images/catalog9.jpg" },
        { id: 10, name: "Justin Dane", category: "Industrial", price: "Rp550.000,00", image: "./images/catalog10.jpg" },
        { id: 11, name: "Mia Harper", category: "Industrial", price: "Rp600.000,00", image: "./images/catalog11.jpg" },
        { id: 12, name: "Lucas Henry", category: "Industrial", price: "Rp650.000,00", image: "./images/catalog12.jpg" },
        { id: 13, name: "Charlotte Claire", category: "Bohemian", price: "Rp500.000,00", image: "./images/catalog13.jpg" },
        { id: 14, name: "Mason Reed", category: "Bohemian", price: "Rp550.000,00", image: "./images/catalog14.jpg" },
        { id: 15, name: "Ella Brooke", category: "Bohemian", price: "Rp600.000,00", image: "./images/catalog15.jpg" },
        { id: 16, name: "Jackson Cole", category: "Bohemian", price: "Rp650.000,00", image: "./images/catalog16.jpg" },
    ];

    return (
        <div>
            {/* Header Section */}
            <div className="bg-[url('./images/header.png')] bg-cover bg-center h-48 flex items-center justify-center font-sans">
                <h1 className="text-3xl font-bold text-black">Catalog</h1>
            </div>

            {/* Filter and Sort Section */}
            <div className="bg-customCream py-4 px-4 md:px-16 lg:px-32">
                <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-4">
                        <button className="flex items-center space-x-2">
                            <IoFilterOutline className="text-xl" />
                            <span>Filter</span>
                        </button>
                        <TbLayoutGridFilled className="text-xl" />
                        <div className="flex items-center space-x-6">
                            <BsViewList className="text-xl" />
                            <p className="text-sm">Showing 1–16 of 250 results</p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm">
                        <label>Show</label>
                        <select className="bg-white border border-gray-300 rounded-md px-2 py-1">
                            <option>16</option>
                            <option>32</option>
                            <option>48</option>
                        </select>
                        <label>Sort by</label>
                        <select className="bg-white border border-gray-300 rounded-md px-2 py-1">
                            <option>Default</option>
                            <option>Popularity</option>
                            <option>Rating</option>
                            <option>Newest</option>
                        </select>
                    </div>
                </div>
            </div>

            {/* Category Filter Buttons */}
            <div className="flex flex-wrap gap-2 py-3 px-20">
                {['Skandinavia', 'Minimalis', 'Industrial', 'Modern', 'Bohemian', 'Rustic', 'Mid-Century Mod'].map((category) => (
                    <button key={category} className="bg-customCream text-gray-800 py-2 px-4 rounded-full shadow-sm hover:bg-gray-100 text-sm">
                        {category}
                    </button>
                ))}
            </div>

            {/* Products Grid */}
            <div className="py-8 px-10 md:px-24 lg:px-32 font-sans">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="relative group cursor-pointer"
                            onClick={() => navigate('/portfolio')}
                        >
                            <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md shadow-md" />
                            <div className="absolute inset-0 bg-gray-800 bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
                                <button
                                    className="mb-2 px-4 py-2 bg-white text-black font-semibold rounded-md hover:text-customBrown"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        navigate('/portfolio');
                                    }}
                                >
                                    Chat Now
                                </button>
                                <div className="flex space-x-3 py-2 text-white text-xs font-small">
                                    <button className="flex items-center hover:text-customBrown"><IoShareSocialSharp className="text-lg px-0.5" /><span>Share</span></button>
                                    <button className="flex items-center hover:text-customBrown"><MdCompareArrows className="text-lg px-0.5" /><span>Compare</span></button>
                                    <button className="flex items-center hover:text-customBrown"><FaRegHeart className="text-lg px-0.5" /><span>Like</span></button>
                                </div>
                            </div>
                            <div className="mt-4">
                                <h3 className="font-semibold text-lg text-gray-800">{product.name}</h3>
                                <p className="text-sm text-gray-500">{product.category}</p>
                                <p className="text-lg font-semibold text-gray-800">{product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-8">
                <button className="w-10 h-10 bg-customBrown text-white font-semibold rounded-full hover:bg-yellow-600">1</button>
                <button className="w-10 h-10 bg-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-400">2</button>
                <button className="w-10 h-10 bg-gray-300 text-gray-700 font-semibold rounded-full hover:bg-gray-400">3</button>
                <button className="w-20 h-10 bg-customBrown text-white font-semibold rounded-full hover:bg-yellow-600">Next</button>
            </div>
        </div>
    );
};

export default Catalog;
