import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons';

function Review() {
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
                            <img
                                src="./images/catalog2.jpg"
                                alt="Main product image"
                                className="w-96 h-96 object-cover rounded-lg"
                            />
                        </div>
                    </div>
                </div>

                {/* Product Information */}
                <div className="w-1/2 pl-8">
                    <h1 className="text-3xl font-bold mb-2">Revano Satria</h1>
                    <p className="text-xl text-gray-700 mb-2">Rp 250.000,00 - 2.000.000,00*</p>

                    {/* Ratings */}
                    <div className="flex items-center mb-4">
                        <div className="flex text-yellow-500">
                            {[...Array(4)].map((_, i) => (
                                <FontAwesomeIcon key={i} icon={faStar} />
                            ))}
                            <FontAwesomeIcon icon={faStarHalfAlt} />
                        </div>
                        <span className="text-gray-600 ml-2">20 Customer Review</span>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>

                    {/* Tags */}
                    <div className="mb-4">
                        <span className="text-gray-600">Tag:</span>
                        {['Industrial', 'Minimalis'].map((tag, i) => (
                            <span key={i} className="bg-gray-200 text-gray-800 px-2 py-1 rounded-full ml-2">
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Chat Button */}
                    <button className="bg-yellow-600 text-white w-full max-w-2xl py-4 rounded-lg text-lg hover:bg-yellow-700 transition duration-200">
                        Chat Now
                    </button>

                    {/* Categories */}
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
                    <div className="text-gray-600 text-center text-xl cursor-pointer hover:text-gray-800">Description</div>
                    <div
                        className="text-gray-800 font-medium text-center text-xl">
                        Review
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto p-4">
                {/* Header Section */}
                <div className="max-w-6xl mx-auto mt-1 p-4">

                    <div className="flex items-start border-b border-gray-200 pb-6">
                        {/* Summary Section */}
                        <div className="flex justify-between items-center w-full mb-1">
                            {/* Total Reviews */}
                            <div className="text-center w-1/3">
                                <div className="text-2xl font-semibold text-gray-800">Total Reviews</div>
                                <div className="flex justify-center items-center">
                                    <span className="text-5xl font-bold text-black">20</span>
                                    <span className="ml-2 text-xl font-medium text-black">Reviews</span>
                                </div>
                            </div>

                            {/* Average Rating */}
                            <div className="text-center w-1/3 border-l border-r border-gray-200 px-4 h-full">
                                <div className="text-2xl font-semibold text-gray-800">Average Rating</div>
                                <div className="flex items-center justify-center text-5xl font-bold text-black">
                                    4.0
                                    <div className="flex ml-2">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                xmlns="http://www.w3.org/2000/svg"
                                                className={`h-6 w-6 ${index < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927a1 1 0 011.902 0l1.756 4.386a1 1 0 00.757.625l4.664.63a1 1 0 01.566 1.736l-3.345 3.173a1 1 0 00-.29.91l.84 4.608a1 1 0 01-1.45 1.054L10 15.347l-4.048 2.209a1 1 0 01-1.45-1.054l.84-4.608a1 1 0 00-.29-.91L1.707 9.675a1 1 0 01.566-1.736l4.664-.63a1 1 0 00.757-.625l1.756-4.387z" />
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Rating Distribution */}
                            <div className="w-1/3 text-left pl-8">
                                {[{ stars: 5, count: 1 }, { stars: 4, count: 15 }, { stars: 3, count: 4 }, { stars: 2, count: 0 }, { stars: 1, count: 0 }].map(
                                    (rating) => (
                                        <div key={rating.stars} className="flex items-center mb-1">
                                            <div className="flex">
                                                {[...Array(5)].map((_, index) => (
                                                    <svg
                                                        key={index}
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className={`h-4 w-4 ${index < rating.stars ? 'text-yellow-500' : 'text-gray-300'}`}
                                                        fill="currentColor"
                                                        viewBox="0 0 20 20"
                                                    >
                                                        <path d="M9.049 2.927a1 1 0 011.902 0l1.756 4.386a1 1 0 00.757.625l4.664.63a1 1 0 01.566 1.736l-3.345 3.173a1 1 0 00-.29.91l.84 4.608a1 1 0 01-1.45 1.054L10 15.347l-4.048 2.209a1 1 0 01-1.45-1.054l.84-4.608a1 1 0 00-.29-.91L1.707 9.675a1 1 0 01.566-1.736l4.664-.63a1 1 0 00.757-.625l1.756-4.387z" />
                                                    </svg>
                                                ))}
                                            </div>
                                            <div className="ml-2 text-gray-600">{rating.count} reviews</div>
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Reviews List */}
                    <div className="max-w-5xl mx-auto py-8 space-y-6">
                        {/* Review 1 */}
                        <div className="flex items-start border-b border-gray-200 pb-6">
                            {/* Avatar dan Info Reviewer */}
                            <div className="flex w-1/3">
                                <div className="flex-shrink-0">
                                    <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
                                        <span className="text-gray-500 text-xl">👤</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div className="font-semibold text-gray-800 text-lg">RedHibiscus</div>
                                    <div className="text-xs text-gray-600">Reviewed on September 24, 2024</div>
                                    <div className="text-xs text-gray-600">
                                        Category : 3x3 <span className="mx-2">|</span> Tag : Minimalist
                                        <div className="text-orange-500 font-medium">Verified Purchase</div>
                                    </div>
                                </div>
                            </div>

                            {/* Rating dan Review Text */}
                            <div className="flex-1 ml-8">
                                <div className="flex items-center mb-2">
                                    {/* Bintang Rating */}
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 ${index < 4 ? 'text-yellow-500' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927a1 1 0 011.902 0l1.756 4.386a1 1 0 00.757.625l4.664.63a1 1 0 01.566 1.736l-3.345 3.173a1 1 0 00-.29.91l.84 4.608a1 1 0 01-1.45 1.054L10 15.347l-4.048 2.209a1 1 0 01-1.45-1.054l.84-4.608a1 1 0 00-.29-.91L1.707 9.675a1 1 0 01.566-1.736l4.664-.63a1 1 0 00.757-.625l1.756-4.387z" />
                                        </svg>
                                    ))}
                                    <h4 className="font-semibold ml-2">Lorem ipsum dolor sit amet</h4>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Halo...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                </p>
                            </div>
                        </div>

                        {/* Review 2 */}
                        <div className="flex items-start border-b border-gray-200 pb-6">
                            {/* Avatar dan Info Reviewer */}
                            <div className="flex w-1/3">
                                <div className="flex-shrink-0">
                                    <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
                                        <span className="text-gray-500 text-xl">👤</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div className="font-semibold text-gray-800 text-lg">RedHibiscus</div>
                                    <div className="text-xs text-gray-600">Reviewed on September 24, 2024</div>
                                    <div className="text-xs text-gray-600">
                                        Category : 3x3 <span className="mx-2">|</span> Tag : Minimalist
                                        <div className="text-orange-500 font-medium">Verified Purchase</div>
                                    </div>
                                </div>
                            </div>

                            {/* Rating dan Review Text */}
                            <div className="flex-1 ml-8">
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 ${index < 3 ? 'text-yellow-500' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927a1 1 0 011.902 0l1.756 4.386a1 1 0 00.757.625l4.664.63a1 1 0 01.566 1.736l-3.345 3.173a1 1 0 00-.29.91l.84 4.608a1 1 0 01-1.45 1.054L10 15.347l-4.048 2.209a1 1 0 01-1.45-1.054l.84-4.608a1 1 0 00-.29-.91L1.707 9.675a1 1 0 01.566-1.736l4.664-.63a1 1 0 00.757-.625l1.756-4.387z" />
                                        </svg>
                                    ))}
                                    <h4 className="font-semibold ml-2">Lorem ipsum dolor sit amet</h4>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>

                        {/* Review 3 */}
                        <div className="flex items-start pb-6">
                            <div className="flex w-1/3">
                                <div className="flex-shrink-0">
                                    <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
                                        <span className="text-gray-500 text-xl">👤</span>
                                    </div>
                                </div>
                                <div className="ml-4">
                                    <div className="font-semibold text-gray-800 text-lg">RedHibiscus</div>
                                    <div className="text-xs text-gray-600">Reviewed on September 24, 2024</div>
                                    <div className="text-xs text-gray-600">
                                        Category : 3x3 <span className="mx-2">|</span> Tag : Minimalist
                                        <div className="text-orange-500 font-medium">Verified Purchase</div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex-1 ml-8">
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, index) => (
                                        <svg
                                            key={index}
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={`h-5 w-5 ${index < 2 ? 'text-yellow-500' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927a1 1 0 011.902 0l1.756 4.386a1 1 0 00.757.625l4.664.63a1 1 0 01.566 1.736l-3.345 3.173a1 1 0 00-.29.91l.84 4.608a1 1 0 01-1.45 1.054L10 15.347l-4.048 2.209a1 1 0 01-1.45-1.054l.84-4.608a1 1 0 00-.29-.91L1.707 9.675a1 1 0 01.566-1.736l4.664-.63a1 1 0 00.757-.625l1.756-4.387z" />
                                        </svg>
                                    ))}
                                    <h4 className="font-semibold ml-2">Lorem ipsum dolor sit amet</h4>
                                </div>
                                <p className="text-gray-700 text-sm">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </p>
                            </div>
                        </div>
                    </div>


                    {/* Show More Button */}
                    <div className="flex justify-center mt-6">
                        <button className="border border-yellow-600 text-yellow-600 px-6 py-2 rounded-lg hover:bg-yellow-600 hover:text-white transition duration-200">
                            Show More
                        </button>
                    </div>
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

export default Review;
