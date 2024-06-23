// import startedImage from '../public/photos/started.png';
import loadingSvg from '/photos/loading.svg';
import icon from '/photos/car.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


const Started = () => {
    useGSAP(() => {
        gsap.to(".icon", {y:30 , direction:9 ,opacity:1 });
    });

  return (
    <div className="w-screen h-screen bg-transparent">
      <img src={icon} alt="Logo" className='icon mx-auto translate-y-[-4rem] opacity-0' />
 
       <div className='flex items-center h-16  justify-center  w-full pt-32  '>
          <img src={loadingSvg} alt="" className='w-20 h-20'/>
       </div>

    </div>
  )
}

export default Started
