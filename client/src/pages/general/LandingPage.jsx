// import React from 'react';

// const LandingPage = () => {
//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold text-blue-600">Welcome to Early Learners Hub</h1>
//         <p className="mt-4 text-gray-700">
//           Your one-stop solution for engaging content for young learners!
//         </p>
//         <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
//           Get Started
//         </button>
//       </div>
//     </div>
//   );
// };

// export default LandingPage;
import React from 'react'
import img from '../../images/landingimg.png'
import Buttons from '../../components/Buttons'

const LandingPage = () => {
  return (
    <div className='bg-[#F1F1F1] w-full h-auto px-10 pb-10'>
      <div className='bg-[#EBCEA8] w-full h-[100vh]'>
        <div className='border border-black w-full h-[60%] flex gap-9'>
          <div className='w-[50%] bg-slate-600 flex flex-col gap-[4rem] p-12 justify-center'>
            <h1 className='text-[50px] ml-[5vw] freckle-face'>Enhance Learning <br/> with Group Tutoring <br/> at EarlyLearnersHub <br/> Tutorial Services!</h1>
            <Buttons styleType="primary" label="ENROLL NOW"/>
          </div>
          <img src={img} alt="" />
        </div>
      </div>
    </div>
  )
}

export default LandingPage
