import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';

const PendingAssignment = () => {
    const [pendingData,setPendingData] = useState([]);
    useEffect(()=>{
        fetch('https://job-assessment-project-server2.vercel.app/submittedAssignment').then(res=>res.json())
        .then(data=>{
            const pendingData = data.filter(pendData=>pendData.status=="Pending");
            setPendingData(pendingData)
        })
    },[])
    // const data = useLoaderData();
    
    console.log('pending data',  pendingData);
    // console.log(data)
    return (

         <div>
            <div className="overflow-x-auto max-w-full mx-auto mt-30 bg-[#dedcff]">
                <table className="table mx-auto">
                    {/* head */}
                    <thead className='mx-auto'>
                        <tr>
                            <th className='text-blue-500'>
                                No
                            </th>
                            <th className='text-blue-500' >Title</th>
                            <th className='text-blue-500' >Assignment marks</th>
                            
                            <th className='text-blue-500'>Status</th>
                            <th className='text-blue-500'>Examinee(submitted Email)</th>
                            

                        </tr>
                    </thead>
                    <tbody >
                        {/* row 1 */}
                        {
                            pendingData.map((user, index) => <tr>
                                <th className='text-black'>
                                    {index + 1}
                                </th>
                                
                                {/* <td>
                                    {user.thumbnails}
                                </td> */}
                                <td className='text-black'>{user.Title}</td>
                                <td className='text-black'>{user.assinmentMarks}</td>
                                <td className='text-black'>{user.status}</td>
                                <td className='text-black'>{user.submittedEmail}</td>
                                <th className='space-x-3 text-black'>
                                    <Link to={`/giveMarks/${user._id}`} ><button className="btn lg:text-[16px] text-[10px]  btn-secondary">Give a mark</button></Link>
                                   


                                </th>
                            </tr>)
                        }

                    </tbody>
                    {/* foot */}

                </table>
            </div>
        </div>
    );
};

export default PendingAssignment;