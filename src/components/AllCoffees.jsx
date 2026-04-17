import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import CoffeeCard from './CoffeeCard';

const AllCoffees = () => {

    const initialCoffees = useLoaderData();

    const [coffees, setCoffees] = useState(initialCoffees);
    console.log(initialCoffees);


    return (
        <div>
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

export default AllCoffees;