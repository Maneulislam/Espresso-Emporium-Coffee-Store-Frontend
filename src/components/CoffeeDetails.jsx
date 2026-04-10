import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';

const CoffeeDetails = () => {
    const coffee = useLoaderData();
    console.log(coffee);

    return (
        <div>
            <div className=" max-w-5xl mx-auto  p-8 font-sans">
                {/* Navigation Header */}
                <Link to="/" className="flex items-center gap-2 mb-16 text-[#374151] hover:text-[#D2B48C] transition-colors font-rancho text-2xl">
                    <FaArrowLeft />
                    <span style={{ fontFamily: 'Rancho, cursive' }}>Back to home</span>
                </Link>

                {/* Main Card Container */}
                <div className="max-w-5xl mx-auto bg-[#FDFBF7] rounded-lg shadow-sm p-12 md:p-20 flex flex-col md:flex-row items-center gap-16">

                    {/* Left Side: Product Image */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <div className="relative group">
                            {/* Replace the src with your actual image path */}
                            <img
                                src={coffee.photo}
                                alt="Coffee Cup Mockup"
                                className="w-64 md:w-80 h-auto drop-shadow-2xl transform transition-transform group-hover:scale-105"
                            />
                        </div>
                    </div>

                    {/* Right Side: Product Information */}
                    <div className="w-full md:w-1/2">
                        <h2 className="text-3xl font-serif italic text-[#331A15] mb-8">Niceties</h2>

                        <div className="space-y-4">
                            <p className="text-lg">
                                <span className="font-bold text-slate-800">Name:</span>
                                <span className="text-slate-500 ml-2">{coffee.name}</span>
                            </p>
                            <p className="text-lg">
                                <span className="font-bold text-slate-800">Price:</span>
                                <span className="text-slate-500 ml-2">{coffee.price}</span>
                            </p>
                            <p className="text-lg">
                                <span className="font-bold text-slate-800">Supplier:</span>
                                <span className="text-slate-500 ml-2">{coffee.supplier}</span>
                            </p>
                            <p className="text-lg">
                                <span className="font-bold text-slate-800">Taste:</span>
                                <span className="text-slate-500 ml-2">{coffee.taste}</span>
                            </p>
                            <p className="text-lg">
                                <span className="font-bold text-slate-800">Category:</span>
                                <span className="text-slate-500 ml-2">{coffee.category}</span>
                            </p>
                            <p className="text-lg">
                                <span className="font-bold text-slate-800">Details:</span>
                                <span className="text-slate-500 ml-2">{coffee.details}</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;

