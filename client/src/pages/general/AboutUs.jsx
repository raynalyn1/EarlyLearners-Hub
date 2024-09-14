import React from 'react';
import about from '../../images/about.png';
import book from '../../images/book-about.png';
import paper from '../../images/paper-about.png';
import many from '../../images/many-book.png';
import hand from '../../images/hand.png';
import symp from '../../images/symbol.png';
import kid from '../../images/kid.png';
import teacher from '../../images/teacher.png';
import confitte from '../../images/confitte.png';
import Footer from '../../components/Footer';
import teaching from '../../images/teaching.png';
import Buttons from '../../components/Buttons'
import teach from '../../images/teach.png'
import play from '../../images/play.png'
import Card from '../../components/Card';
import teachi from  '../../images/teacher/teach.png'
import { useNavigate } from 'react-router-dom'
 
const AboutUs = () => {
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    navigate('/services');
  };

  return (
    <div className='flex flex-col justify-center items-center px-9'>
      <div
        className='flex justify-center items-center'
        style={{
          backgroundImage: `url(${about})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100%',
          height: '500px',
          marginTop: '-2.5vh',
        }}
        alt="About Us Image"
      >
        <h1
          className='text-[#5B3A29] text-[5rem] font-semibold'
          style={{ textShadow: '6px 5px 4px rgba(0, 0, 0, 0.7)' }}
        >
          About Us
        </h1>
      </div>

      <div className='bg-[#EBCEA8] w-[90%] h-auto p-9'>
        <div className='w-full h-auto flex flex-row gap-6 items-center'>
          <h1 className='text-[#5B3A29] freckle-face text-[1.8rem] w-[35%]'>
            Welcome to Early Learners <br />
            Hub Tutorial Services,<br />
            where learning meets<br />
            excellence!
          </h1>

          <div className='w-[30%] flex flex-row justify-center'>
            <img src={book} alt='Book' className="w-[30px] h-[30px] ml-5" />
            <p className='text-center text-[#5B3A29]'>Kickstart your Child's Literacy Journey with EarlyLearners Hub Tutorial Services!</p>
          </div>

          <div className='w-[30%] flex flex-row justify-center'>
            <img src={paper} alt='Paper' className="w-[40px] h-[40px] mr-3" />
            <p className='text-center text-[#5B3A29]'>Discover our comprehensive programs designed to develop essential reading and writing skills.</p>
          </div>
        </div>

        <div className=' w-full h-[40vh] grid grid-rows-2 grid-cols-3  gap-8 justify-center py-5'>
          <div className='w-full h-full bg-white rounded-lg flex gap-2 items-center justify-center' style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={many} alt='bok' className='border border-[#EB9721] rounded-full' />
            <p>Early Reading Programs</p>
          </div>
          <div className='w-full h-full bg-white rounded-lg flex gap-2 items-center justify-center' style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={hand} alt='hand' className='border border-[#EB9721] rounded-full' />
            <p>Writing Fundamentals</p>
          </div>
          <div className='w-full h-full bg-white rounded-lg flex gap-2 items-center justify-center' style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={symp} alt='hand1' className='border border-[#EB9721] rounded-full p-1' />
            <p>Interactive Learning</p>
          </div>
          <div className='w-full h-full bg-white rounded-lg flex gap-2 items-center justify-center' style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={kid} alt='hand1' className='border border-[#EB9721] rounded-full px-1' />
            <p>Tailored for Young Learners</p>
          </div>
          <div className='w-full h-full bg-white rounded-lg flex gap-2 items-center justify-center' style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={teacher} alt='hand1' className='border border-[#EB9721] rounded-full p-1' />
            <p>Experienced Educators</p>
          </div>
          <div className='w-full h-full bg-white rounded-lg flex gap-2 items-center justify-center' style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
            <img src={confitte} alt='hand1' className='border border-[#EB9721] rounded-full p-1' />
            <p>Fun and Engaging Activities</p>
          </div>

        </div>
        <div className='w-full h-[40vh] rounded-lg flex flex-row p-9 justify-center '>
            <img src={teach} alt='image3' className='w-[40%] h-[25vh] rounded-3xl' style={{ boxShadow: '-9px -9px 8px rgba(255, 255, 255, 0.9)' }} />
            <img src={play} alt='image4' className='w-[40%] h-[25vh] mt-20 rounded-xl' style={{ boxShadow: '-9px -9px 8px rgba(255, 255, 255, 0.9)' }}/>
        </div>

        <div className="w-full h-[50vh] bg-[#EBCEA8]">
          <div className='rounded-b-[50%] bg-[#ECB671] w-full h-[20vh] flex flex-col gap-2 justify-center items-center'>
            <h1 className='text-[#5B3A29] text-[2rem] font-bold'>Esteemed Teachers</h1>
            <p className='w-[35vw] text-center'>Experienced and passionate educators who are committed to guiding and inspiring your child through their educational journey.</p>
          </div>
          <div className='flex gap-16 justify-center'>
            <Card imgSrc={teachi} title="Ms. Emille Panganiban" description="Teacher in the classs" />
            <Card imgSrc={teachi} title="Ms. Emille Panganiban" description="Teacher in the classs" />
            <Card imgSrc={teachi} title="Ms. Emille Panganiban" description="Teacher in the classs" />
            <Card imgSrc={teachi} title="Ms. Emille Panganiban" description="Teacher in the classs" />
          </div>
        </div>


        <div className='w-full h-[60vh] p-9 flex gap-9'>
          <div className='w-[70%] h-auto flex flex-col gap-5'>
            <h1 className='text-[1.5rem] font-bold text-center text-[#5B3A29]'>Services Offered</h1>
            <div className='w-full flex gap-9'>
              <div className='w-[50%] h-[40vh] bg-[#EDC285] rounded-lg p-5' style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h1 className='font-bold'>Flexible Tutoring Options</h1>
                <p className='text-center mt-[10vh]'>Whether you prefer <span className='font-bold'>one-on-one</span> sessions or <span className='font-bold'>group</span> classes, we offer flexible options to suit your child’s needs and your schedule.</p>
              </div>
              <div className='w-[50%] h-[40vh] bg-[#EDC285] rounded-lg p-5' style={{ boxShadow: '6px 6px 8px rgba(0, 0, 0, 0.5), -4px -4px 8px rgba(0, 0, 0, 0.1)' }} >
                <h1 className='font-bold'>Parental Involvement</h1>
                <p className='text-center mt-[10vh]'>We believe in collaborating with parents to create a holistic learning experience, ensuring alignment between home and school learning.</p>
              </div>
            </div>
            <Buttons styleType='primary1' label='Learn More' onClick={handleLearnMoreClick} />
          </div>
          <img src={teaching} alt='pic' className='rounded-lg' />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AboutUs;
