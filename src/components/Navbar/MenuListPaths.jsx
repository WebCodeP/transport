
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { faRoadBridge } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const MenuListPaths = () =>{
    return (
       <div className='grid grid-cols-1  gap-0.5 text-right
       rounded-b-lg 
       top-full
       absolute p-3
     bg-white z-[9998]
       transition-all shadow-md w-fit'
     >
       <div className='flex justify-start items-center gap-2 w-full  cursor-pointer p-0.5 rounded-lg hover:bg-slate-100 '> 
          <span className='bg-slate-100 p-2 rounded-lg'><FontAwesomeIcon icon={faRoad}className='text-sky-600' /></span>
          <span className='text-lg'>مسارات داخلية</span>
       </div>
       <div className='flex justify-start items-center gap-2 w-full cursor-pointer p-0.5 rounded-lg hover:bg-slate-100 '>
         <span className='bg-slate-100 p-2 rounded-lg'><FontAwesomeIcon icon={faRoadBridge}className='text-sky-600' /></span>
          <span className='text-lg'>مسارات خارجية</span>
       </div>
    </div>
    );
 }

 export default MenuListPaths;