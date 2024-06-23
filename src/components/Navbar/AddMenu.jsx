
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faRoute} from '@fortawesome/free-solid-svg-icons';
import {faCarRear} from '@fortawesome/free-solid-svg-icons';

import {Link} from 'react-router-dom';

const AddMenu = () => {
  return (

 <div className=' lg:bg-white p-2 lg:rounded-b-md lg:absolute
     lg:top-full lg:shadow-lg   lg:w-fit lg:z-[9998]'>
       <Link to={'/اضافة مسار'} className='flex justify-start 
       items-center gap-2 py-0.5 pl-8 rounded-lg lg:w-full  hover:bg-slate-100'>
          <span className='bg-slate-100 p-2 px-3 rounded-lg'><FontAwesomeIcon icon={faRoute} className='text-sky-600' /></span>
          <span className='text-lg'>مسار</span>
       </Link>
       <Link to={'/اضافة عربة'} className='flex justify-start items-center gap-2 p-0.5 rounded-lg  hover:bg-slate-100'>
          <span className='bg-slate-100 p-2 px-3 rounded-lg'><FontAwesomeIcon icon={faCarRear}className='text-sky-600' /></span>
          <span className='text-lg'>مركبة</span>
       </Link>
     </div>
    
  )
}

export default AddMenu
