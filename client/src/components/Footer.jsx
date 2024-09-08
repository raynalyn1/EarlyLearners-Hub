import React from 'react'
import logo from '../images/footer/logo.png'
import location from '../images/footer/location.png'
import family from '../images/footer/family.png'
import question from '../images/footer/question.png'
import phone from '../images/footer/phone.png'
import email from '../images/footer/email.png'
import fb from '../images/footer/fb.png'

const Footer = () => {
  return (
    <div className='w-[90%] h-[50vh] flex flex-col'>
      <div className='w-full h-[40vh] flex gap-5'>
        <div className='w-[32.2%] h-[40vh] flex flex-col gap-2 p-2'>
          <img src={logo} alt='kfjwoefj' className='w-[7vw] ml-5' />
          <p>LearningLane Hub Tutorial Services, where learning meets excellence!</p>
          <div className='flex gap-5 mt-5'>
            <img src={location} alt='efwefwef' className='h-[10vh] border border-[#EB9721] rounded-[50%]' />
            <p className='text-[.8rem]'>Unit 1 - Bajarias' Commercial Space,
              Cambangyao Dalaguete, near Gerboy's
              Residence
              Dalaguete, Philippines, 6022</p>
          </div>
        </div>
        <div className='w-[32.2%] h-[40vh] flex flex-col justify-center items-center '>
          <h1 className='font-bold'>Useful Links</h1>
          <div className='flex gap-3 items-center mt-3'>
            <img src={family} alt='efwefwef' className='h-[6vh] border border-[#EB9721] rounded-[50%]' />
            <p>Our Team</p>
          </div>
          <div className='flex gap-3 items-center mt-3'>
            <img src={question} alt='efwefwef' className='h-[7vh] border border-[#EB9721] rounded-[50%] ml-[-3vh]' />
            <p className='ml-[2vh]'>FAQ's</p>
          </div>
        </div>
        <div className='w-[32.2%] h-[40vh] flex flex-col gap-3 justify-center pt-14 px-5'>
          <h1 className='font-bold'>Contact Us</h1>
          <div className='flex gap-3'>
            <img src={phone} alt='phone' className='border border-[#EB9721] rounded-[50%] p-1' />
            <div className='text-[.8rem]'>
              <p>+63 929 093 5005</p>
              <p>+63 960 670 2035</p>
            </div>
          </div>
          <div className='flex gap-3 text-[.8rem] items-center'>
            <img src={email} alt='waragud' className='border border-[#EB9721] rounded-[50%] p-1' />
            <p>learninglanehub07@gmail.com</p>
          </div>
          <div className='flex gap-3 text-[.8rem] items-center'>
            <img src={fb} alt='kk' className='border border-[#EB9721] rounded-[50%] p-1' />
            <p>LearningLane Hub Tutorial Services</p>
          </div>
        </div>
      </div>
      <div className='w-full h-[3rem] bg-[#EB9721] flex justify-end items-center px-3'>
        <p>Copyright©2024  Early Learners Hub.  All Rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer