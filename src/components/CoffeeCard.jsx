import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {

    const { _id, photo, name, price, supplier } = coffee;

    const handleDelete = (_id) => {
        console.log(_id);

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {


                fetch(`http://localhost:3000/coffees/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            });

                            const remainingCoffees = coffees.filter(coff => coff._id != _id);
                            setCoffees(remainingCoffees)
                        }
                    })



            }
        });

    }

    return (
        <div className="max-w-5xl  mx-auto px-4 py-4">
            <div className="card card-side bg-gray-100 py-5 pr-9 pl-5 border-gray-100 hover:shadow-2xl items-center  overflow-hidden">

                {/* Product Image */}
                <figure className="w-1/3 h-48">
                    <img
                        src={photo}
                        alt={name}
                        className="w-full h-full object-cover"
                    />
                </figure>

                {/* Card Details */}
                <div className="card-body ">
                    <h2 className="card-title text-2xl font-bold text-gray-800">{name}</h2>
                    <div className="space-y-1 text-gray-600">
                        <p><span className="font-semibold text-gray-800">Price:</span> ${price}</p>
                        <p><span className="font-semibold text-gray-800">Supplier:</span> {supplier}</p>
                    </div>
                </div>

                {/* Action Sidebar */}
                <div className="flex flex-col gap-3">
                    <Link to={`/coffee/${_id}`}>
                        <button
                            className="btn btn-circle btn-ghost bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white border-none shadow-sm"
                            title="View Details"
                        >
                            <FaEye size={18} />
                        </button>
                    </Link>

                    <Link to={`/updatecoffee/${_id}`}>
                        <button
                            className="btn btn-circle btn-ghost bg-slate-100 text-slate-700 hover:bg-slate-800 hover:text-white border-none shadow-sm"
                            title="Edit Coffee"
                        >
                            <FaEdit size={18} />
                        </button>
                    </Link>

                    <button
                        onClick={() => handleDelete(_id)}
                        className="btn btn-circle btn-ghost bg-red-100 text-red-600 hover:bg-red-600 hover:text-white border-none shadow-sm"
                        title="Delete"
                    >
                        <FaTrash size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;