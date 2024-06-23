
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faClose} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faArrowRotateBack } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

import Map from './Map';
// import Cities from './Cities';

const Addpath = () => {
  const [OpenMenu , SetOpenMenu] = useState(false);
 



//end path for map

  return (
    <>
          <div className='w-screen h-screen'>
            <Map/>
          </div>
         
        <section className='fixed top-4 left-4  w-16 h-60 flex flex-col items-center gap-y-4 z-[9999] justify-start'>
        <span onClick={()=>{SetOpenMenu(!OpenMenu)}} className= 'bg-slate-100  flex items-center justify-center p-2 px-3 transition-all cursor-pointer shadow-lg rounded-lg z-[9999]'>
          {OpenMenu?<FontAwesomeIcon icon={faClose}className='text-sky-700 text-xl' />:<FontAwesomeIcon icon={faBars}className='text-sky-700 text-xl' />}
        </span>
        <span  className= 'bg-slate-100  flex items-center justify-center p-2 px-3 transition-all cursor-pointer shadow-lg rounded-lg z-[9999]'>
          <FontAwesomeIcon icon={faArrowRotateBack}className='text-sky-700 text-xl' />
        </span>
        </section>
        {OpenMenu?<Menu/>:''}
    </>
  )
}







const Menu = ()=>{
  return(
    <div className='fixed w-full lg:w-1/3 lg:h-screen
     bg-slate-100 p-2 h-1/2
     z-[9999] shadow-lg lg:top-0  bottom-0
      lg:rounded-l-2xl transition-all'>
      {/* <div className=' w-full h-8 flex items-center justify-center'><span className='h-1 w-16  rounded-md bg-gray-200'></span></div>
      <div className=' w-full h-8 flex items-center justify-center'><span className='text-xl'>اضافة المسارات والتعديل</span></div>
      <div className='w-full h-1 bg-slate-200 mt-3'></div> */}

      <form action="" method="post" className='mt-4 p-2 w-full  flex items-start 
                justify-center flex-col gap-y-4'>
               <input type="text" name="" id=""  placeholder='ادخل اسم المسار' className='outline-none 
                  px-2 py-2 bg-slate-200 rounded-lg border-2 border-zinc-300 block w-full'/>
              

            <select name="" id="" className="block border-2 border-zinc-300
              outline-none transition-transform
             w-full py-2 px-1 mb-4 bg-slate-200  rounded-lg  cursor-pointer">
              <option value="" disabled>اختر نوع المسار</option>
              <option value="">مسار داخلي </option>
              <option value="">مسار خارجي</option>
            </select>
            <input type="submit" value="اضافة" className='bg-sky-600 cursor-pointer text-white text-xl rounded-lg py-2 w-full'/>
      </form>

      <div className='mt-8 p-2'>
        <span className=''>التعديل على مسار موجود مسبقا</span>
        <Link to={""} className='text-sm mr-4 text-sky-600 underline'>تعديل مسار</Link>
      </div>
      
      <div className='flex justify-end items-center gap-x-4 mt-60'>
        <span>مساعدة</span>
        <FontAwesomeIcon icon={faArrowLeft}className='text-sky-700 text-xl cursor-pointer' />
      </div>

  </div>
   
  );
}





export default Addpath
