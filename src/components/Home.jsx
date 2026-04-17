import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';
import bgImage from '../assets/3.png';
import { FaPlus } from 'react-icons/fa';

const Home = () => {

    const initialCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(initialCoffees);
    console.log(initialCoffees);

    return (
        <div className="overflow-x-hidden">
            {/* Hero Section */}
            <div
                className="relative min-h-[500px] md:h-[600px] bg-cover bg-center flex items-center"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                {/* Dark Overlay for better text readability on small screens */}
                <div className="absolute inset-0 bg-black/20 md:bg-transparent"></div>

                <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-10">
                    <div className="max-w-2xl md:ml-auto text-center md:text-left text-white">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
                            Would you like a Cup of Delicious Coffee?
                        </h1>
                        <p className="text-sm md:text-base mb-8 leading-relaxed text-gray-100 opacity-90">
                            It's coffee time - Sip & Savor - Relaxation in every sip! Get the
                            nostalgia back!! Your companion of every moment! Enjoy the beautiful
                            moments and make them memorable.
                        </p>

                        <Link to="/learnmore">
                            <button className="btn btn-md md:btn-lg  bg-[#3b2a28] hover:bg-amber-500 border border-white text-white">
                                Learn More
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-[#f3f0ed] py-12 md:py-16">
                <div className="max-w-10/12 mx-auto px-6 md:px-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-10">
                        {/* Feature Items */}
                        {[
                            { icon: "☕", title: "Awesome Aroma", desc: "You will definitely be a fan of the design & aroma of your coffee" },
                            { icon: "🏅", title: "High Quality", desc: "We served the coffee to you maintaining the best quality" },
                            { icon: "🫘", title: "Pure Grades", desc: "The coffee is made of the green coffee beans which you will love" },
                            { icon: "🔥", title: "Proper Roasting", desc: "Your coffee is brewed by first roasting the green coffee beans" }
                        ].map((feature, idx) => (
                            <div key={idx} className="flex flex-col items-center md:items-start text-center md:text-left group">
                                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
                                <h3 className="font-serif font-bold text-xl mb-2 text-[#331a15]">{feature.title}</h3>
                                <p className="text-sm text-gray-600 leading-relaxed max-w-[250px]">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Product Header Section */}
            <div className="text-center mt-16 md:mt-24 px-4 space-y-4">
                <p className="text-gray-600 text-sm italic">--- Sip & Savor ---</p>
                <h2 className="text-3xl md:text-5xl font-extrabold text-[#331a15] drop-shadow-sm">
                    Our Popular Products
                </h2>
                <div className="flex justify-center">
                    <Link to="/addcoffee">
                        <button className="btn text-xl mt-4 hover:bg-amber-500 border border-black">
                            <FaPlus className="text-sm" />
                            <span className="font-bold">Add New Coffee</span>
                        </button>
                    </Link>
                </div>
            </div>

            {/* Product Grid */}
            <div className="max-w-full mx-auto px-6 md:px-12 my-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                    {coffees.map(coffee => (
                        <CoffeeCard
                            key={coffee._id}
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                        />
                    ))}
                </div>

                {/* Empty State if no coffees */}
                {coffees.length === 0 && (
                    <div className="text-center py-20 bg-gray-50 rounded-xl border-2 border-dashed">
                        <p className="text-gray-400">No coffees found. Time to brew some!</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;