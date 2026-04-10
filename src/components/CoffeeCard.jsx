import React from 'react';
import { Link } from 'react-router';
import Swal from 'sweetalert2';

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
        <div className='max-w-9/12 mx-auto  '>
            <div className="card card-side  shadow-sm bg-gray-100 w-xl  items-center pr-7 ">
                <div>
                    <img
                        src={photo}
                        alt="" />
                </div>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: {price}</p>
                    <p>Supplier: {supplier}</p>

                </div>
                <div className="join join-vertical space-y-4">
                    <Link to={`/coffee/${_id}`}>
                        <button className="btn join-item ">View</button>
                    </Link>
                    <Link to={`/updatecoffee/${_id}`}>
                        <button className="btn join-item">Edit</button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;