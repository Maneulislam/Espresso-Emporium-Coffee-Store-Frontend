import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {

    const { _id, photo, name, price, supplier, taste, details, category } = useLoaderData();

    const handleUpdateCoffee = (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const updatedCoffee = Object.fromEntries(formData.entries());
        console.log(updatedCoffee);

        fetch(`https://espresso-emporium-coffee-store-back-six.vercel.app/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

                if (data.modifiedCount) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Coffee updated successfully!!",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })

    }

    return (
        <div className="bg-white ">
            {/* Back to Home Link */}
            <div className="max-w-7xl mx-auto mb-14">

                <div className="my-12">
                    <Link to="/" className="flex items-center gap-2 text-[#374151] hover:text-[#D2B48C] transition-colors font-rancho text-2xl">
                        <FaArrowLeft />
                        <span style={{ fontFamily: 'Rancho, cursive' }}>Back to home</span>
                    </Link>
                </div>


                {/* Form Container */}
                <div className="bg-[#F4F3F0]  mx-auto py-16 px-8 md:px-20 rounded-lg">
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-bold text-[#374151] mb-4" style={{ fontFamily: 'Rancho, cursive' }}>
                            Update Coffee
                        </h2>

                    </div>

                    <form onSubmit={handleUpdateCoffee}>
                        {/* Form Row 1: Name & Chef */}
                        <div className="md:flex gap-6 mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text  font-semibold text-lg">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Enter coffee name" className="input input-bordered w-full bg-white focus:outline-none" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Price</span>
                                </label>
                                <input type="text" name="price" defaultValue={price} placeholder="Enter coffee Price" className="input input-bordered w-full bg-white focus:outline-none" />
                            </div>
                        </div>

                        {/* Form Row 2: Supplier & Taste */}
                        <div className="md:flex gap-6 mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Supplier</span>
                                </label>
                                <input type="text" name="supplier" defaultValue={supplier} placeholder="Enter coffee supplier" className="input input-bordered w-full bg-white focus:outline-none" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Taste</span>
                                </label>
                                <input type="text" name="taste" defaultValue={taste} placeholder="Enter coffee taste" className="input input-bordered w-full bg-white focus:outline-none" />
                            </div>
                        </div>

                        {/* Form Row 3: Category & Details */}
                        <div className="md:flex gap-6 mb-6">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Category</span>
                                </label>
                                <input type="text" name="category" defaultValue={category} placeholder="Enter coffee category" className="input input-bordered w-full bg-white focus:outline-none" />
                            </div>
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Details</span>
                                </label>
                                <input type="text" name="details" defaultValue={details} placeholder="Enter coffee details" className="input input-bordered w-full bg-white focus:outline-none" />
                            </div>
                        </div>

                        {/* Form Row 4: Photo URL */}
                        <div className="mb-8">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-semibold text-lg">Photo</span>
                                </label>
                                <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full bg-white focus:outline-none" />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <input
                            type="submit"
                            value="Update Coffee"
                            className="btn btn-block bg-[#D2B48C] hover:bg-[#b89a74] border-2 border-[#331A15] text-[#331A15] font-rancho text-xl normal-case"
                            style={{ fontFamily: 'Rancho, cursive' }}
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateCoffee;