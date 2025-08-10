import React, { use } from 'react';
import assignmentImg from '../../assets/assignment list.png';
import assignmentCreateImg from '../../assets/create assignment.png';
import assignmentdetailsImg from '../../assets/Assignment details page.png';
import pendingAssignmentImg from '../../assets/pending assignment.png';
import attemptedAssignmentImg from '../../assets/Attempted assignments.png';
import giveMarkImg from '../../assets/give mark page.png';
import { Link } from 'react-router';
import { AuthContext } from '../../Provider/Authcontext';

const FeatureSection = () => {

    const {user} = use(AuthContext)
    return (
       <div className='mt-30 text-center mb-16 bg-[#dedcff] p-8 ' >

            <h2 className='text-5xl font-bold ' >Feature of this application</h2>
            <p className='mt-10 text-2xl mb-10 font-bold text-black'> This typically involves a user interface where instructors can input details like title, instructions, due date, and points, and optionally attach files, rubrics, or other resources. Students should then be able to access and submit their work through a similar interface</p>
        
            <div className='grid grid-cols-1'>
               
                <div className='grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4 my-14'  >
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>Assignment List</h2>
                        <img className='py-1.5' src={assignmentImg} alt="" />
                        <p className='font-bold text-black'>a feature to display a list of assignments is commonly included <br /> in assignment websites. This list typically shows upcoming, past due, and completed assignments, often with details like deadlines and submission status. It helps users stay organized and manage their workload effectively. </p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'/assignments'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>Create Assignment</h2>
                        <img className='py-1.5' src={assignmentCreateImg} alt="" />
                        <p className='font-bold text-black'>This functionality is typically found within the instructor or teacher's interface, allowing them to define assignment details, instructions, due dates, and point values.</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'/createAssignment'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>My Attempted Assignment</h2>
                         <img className='py-1.5 mt-auto mb-auto' src={attemptedAssignmentImg} alt="" />
                        <p className='font-bold text-black mt-auto mb-auto '>  Include a "My Attempted Assignments" feature. This feature typically allows students to view, manage, and track their assigned tasks within the platform.</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'/myAttemptedAssignments'} >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>Assignment Details Page</h2>
                         <img className='py-1.5' src={assignmentdetailsImg} alt="" />
                        <p className='font-bold text-black'>  This feature typically provides students with comprehensive information about each assignment, including instructions, due dates, points possible, and any relevant resources. .</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={user?`/assignments/${user._id}`:'/assignments'}  >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>Give Mark Page</h2>
                         <img className='py-1.5' src={giveMarkImg} alt="" />
                        <p className='font-bold text-black'>  This feature typically provides other users can observe the assignment and can provide feedback,also can give marks .</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={user?`/giveMarks/${user._id}` : '/assignments'}  >See More</Link>
                    </div>
                    <div className='border-2 p-3 flex flex-col rounded-xl'>

                        <h2 className='text-2xl text-blue-700 font-bold'>Pending Assignment Page</h2>
                         <img className='py-1.5 mt-auto mb-auto' src={pendingAssignmentImg} alt="" />
                        <p className='font-bold text-black mt-auto mb-auto'>  This feature typically provides the assignments which marks not included</p>
                        <Link className='btn btn-secondary py-1 mt-auto' to={'/pendingAssignments'} >See More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureSection;