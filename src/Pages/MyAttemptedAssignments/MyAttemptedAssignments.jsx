import React, { Suspense, use } from 'react';
import MySubmission from './MySubmission';

import { AuthContext } from '../../Provider/Authcontext';
import Loading from '../Loading/Loading';
import useAttemptedApi from '../Hooks/useAttemptedApi';



const MyAttemptedAssignments = () => {
    // const data = use(attemptedPromise);
    // console.log(data)
    const { user,loading } = use(AuthContext);
    const {attemptedPromise} = useAttemptedApi();
    console.log(user);
    console.log(user.accessToken)

    return (
        <div className=' mt-30 mb-10 bg-[#dedcff]'>
          {
            !loading &&   <Suspense fallback={<Loading></Loading>}>

                <MySubmission attemptedPromise={attemptedPromise(user.email)} ></MySubmission>
            </Suspense>
          }
        </div>
    );
};

export default MyAttemptedAssignments;