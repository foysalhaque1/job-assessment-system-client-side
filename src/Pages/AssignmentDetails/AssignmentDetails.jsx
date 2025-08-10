import React from 'react';
import { Link, useLoaderData } from 'react-router';

const AssignmentDetails = () => {
    const data = useLoaderData();
    console.log(data._id)
    return (
        <div>
            <div className="hero bg-[#dedcff] min-h-screen mt-20">


                <div className="hero-content flex-col lg:flex-row">
                    <img
                        src={data.photo}
                        className="w-full rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold w-full text-black">Deatils of Assignment</h1>
                        <div className="card-body">
                            <h2 className="card-title font-bold text-black">Title:  {data.Title}</h2>
                            <p className='text-black'>Level: {data.level}</p>
                            <p className='text-black' >Description: {data.description}</p>
                            <p className='text-black'>Marks: {data.marks}</p>
                          
                            <p className='text-black'>Name: {data.name}</p>
                            <p className='text-black'>Email: {data.email}</p>
                            <Link to={`/takeAssignment/${data._id}`} className='btn btn-secondary'>Take Assignment</Link>
                           


                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AssignmentDetails;