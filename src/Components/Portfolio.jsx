import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

function Portfolio() {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto p-4">
            {/* Header Section */}
            <div className="flex items-center justify-between border-b pb-4 mb-4">
                <div className="text-gray-600">Catalogue</div>
                <div className="text-gray-800 font-medium">Revano Satria</div>
            </div>

            {/* Main Content Section */}
            <div className="flex">
                {/* Thumbnail and Main Image */}
                <div className="w-1/2">
                    <div className="flex flex-col items-center">
                        <div className="flex">
                            <div className="flex flex-col space-y-2 mr-4">
                                {['catalog3.jpg', 'catalog4.jpg', 'catalog5.jpg', 'catalog7.jpg'].map((src, idx) => (
                                    <img
                                        key={idx}
                                        src={`./images/${src}`}
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                ))}
                            </div>
                            <img src="./images/catalog2.jpg" alt="Main product image" className="w-96 h-96 object-cover rounded-lg" />
                        </div>
                    </div>
                </div>

                {/* Product Information */}
                <div className="w-1/2 pl-8">
                    <h1 className="text-3xl font-bold mb-2">Revano Satria</h1>
                    <p className="text-xl text-gray-700 mb-2">Rp 250.000,00 - 2.000.000,00*</p>
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500">
                            {[...Array(4)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                        <span className="text-gray-600 ml-2">20 Customer Review</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="mb-4">
                        <span className="text-gray-600">Tag:</span>
                        {['Industrial', 'Minimalis'].map((tag, i) => (
                            <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full ml-2">{tag}</span>
                        ))}
                    </div>
                    <button className="bg-yellow-600 text-white w-full max-w-2xl py-4 rounded-lg text-lg hover:bg-yellow-700 transition duration-200">Chat Now</button>
                    <div className="mt-4">
                        <span className="text-gray-600">Category</span>
                        <div className="flex space-x-2 mt-2">
                            {['3 x 3', '4 x 4', '5 x 5'].map((size, i) => (
                                <button
                                    key={i}
                                    className={`px-4 py-2 rounded-full ${i === 0 ? 'bg-yellow-600 text-white' : 'bg-gray-200 text-gray-800'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Description and Reviews Section */}
            <div className="border-t mt-8 pt-4">
                <div className="flex space-x-8 mb-4 justify-center">
                    <div className="text-gray-800 font-medium text-center text-xl">Description</div>
                    <div
                        className="text-gray-600 text-center text-xl cursor-pointer hover:text-gray-800"
                        onClick={() => navigate('/review')}
                    >
                        Reviews
                    </div>
                </div>
                <p className="text-gray-600 mb-4 text-center text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-items-center">
                    {['catalog3.jpg', 'catalog4.jpg'].map((src, idx) => (
                        <div key={idx} className="w-full h-80">
                            <img src={`./images/${src}`} alt={`Description image ${idx + 1}`} className="w-full h-full object-cover rounded-lg" />
                        </div>
                    ))}
                </div>
            </div>

            {/* Related Products Section */}
            <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4 text-center">Related Products</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {['Ava Morgan', 'Noah Blake', 'Mia Harper', 'Lucas Henry'].map((name, idx) => (
                        <div key={idx} className="bg-white shadow rounded-lg overflow-hidden">
                            <img src={`./images/catalog${idx + 12}.jpg`} alt={name} className="w-full h-48 object-cover" />
                            <div className="p-4">
                                <h3 className="font-semibold text-lg">{name}</h3>
                                <p className="text-gray-600">Industrial</p>
                                <p className="text-gray-800 font-bold">Rp500.000,00</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-6">
                    <button className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-200">
                        Show More
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
