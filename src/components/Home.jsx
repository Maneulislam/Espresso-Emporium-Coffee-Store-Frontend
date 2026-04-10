import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const Home = () => {

    const initialCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(initialCoffees);
    console.log(initialCoffees);

    const showImage = false;

    return (
        <div>


            {/* Hero Section */}
            <div
                className="relative h-[500px] bg-cover bg-center flex items-center"
                style={{
                    backgroundImage: showImage ? "url('/src/assets/3.png')" : "none"
                }}
            >
                <div className="absolute inset-0 "></div>

                <div className="relative left-5/12 z-10 max-w-2xl ml-16 text-white">
                    <h1 className="text-4xl font-bold mb-4">
                        Would you like a Cup of Delicious Coffee?
                    </h1>
                    <p className="text-sm mb-6 leading-relaxed text-gray-200">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the
                        nostalgia back!! Your companion of every moment! Enjoy the beautiful
                        moments and make them memorable.
                    </p>

                    <button className="bg-[#d6a26e] text-black px-5 py-2 rounded hover:bg-[#c8925d] transition">
                        Learn More
                    </button>
                </div>
            </div>

            {/* Features Section */}
            <div className=" bg-[#f3f0ed] py-10 grid grid-cols-1 md:grid-cols-4  gap-16  px-56">
                {/* Item 1 */}
                <div>
                    <div className="text-3xl mb-2">☕</div>
                    <h3 className="font-semibold text-lg mb-1">Awesome Aroma</h3>
                    <p className="text-sm text-gray-600">
                        You will definitely be a fan of the design & aroma of your coffee
                    </p>
                </div>

                {/* Item 2 */}
                <div>
                    <div className="text-3xl mb-2">🏅</div>
                    <h3 className="font-semibold text-lg mb-1">High Quality</h3>
                    <p className="text-sm text-gray-600">
                        We served the coffee to you maintaining the best quality
                    </p>
                </div>

                {/* Item 3 */}
                <div>
                    <div className="text-3xl mb-2">🫘</div>
                    <h3 className="font-semibold text-lg mb-1">Pure Grades</h3>
                    <p className="text-sm text-gray-600">
                        The coffee is made of the green coffee beans which you will love
                    </p>
                </div>

                {/* Item 4 */}
                <div>
                    <div className="text-3xl mb-2">🔥</div>
                    <h3 className="font-semibold text-lg mb-1">Proper Roasting</h3>
                    <p className="text-sm text-gray-600">
                        Your coffee is brewed by first roasting the green coffee beans
                    </p>
                </div>
            </div>



            <div className='text-center mt-28 space-y-6'>
                <h3 className='text-3xl font-extrabold'>Our Popular Products</h3>
                <button className='btn text-xl hover:bg-amber-500 border border-black'> <Link to={"/addcoffee"}>Add Coffee</Link></button>
            </div>



            <div className='grid grid-cols-1 md:grid-cols-2 gap-y-7 my-14  w-full mx-auto'>

                {
                    coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
                }
            </div>
        </div>
    );
};

export default Home;