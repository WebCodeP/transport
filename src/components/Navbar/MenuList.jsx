
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVanShuttle} from '@fortawesome/free-solid-svg-icons';
import {faBus} from '@fortawesome/free-solid-svg-icons';
import {faCar} from '@fortawesome/free-solid-svg-icons';


const MenuList = () => {
  return (
    <div className='grid grid-cols-1  gap-0.5 text-right
    rounded-b-lg 
    top-full
    absolute p-3
  bg-white z-[9998]
    transition-all shadow-md w-fit'
  >
    <div className='flex justify-start items-center gap-2 w-full  cursor-pointer p-0.5 rounded-lg hover:bg-slate-100 '> 
       <span className='bg-slate-100 p-2 rounded-lg'><FontAwesomeIcon icon={faVanShuttle}className='text-sky-600' /></span>
       <span className='text-lg'>سرافيس</span>
    </div>
    <div className='flex justify-start items-center gap-2 w-full cursor-pointer p-0.5 rounded-lg hover:bg-slate-100 '>
      <span className='bg-slate-100 p-2 rounded-lg'><FontAwesomeIcon icon={faBus}className='text-sky-600' /></span>
       <span className='text-lg'>باص داخلي</span>
    </div>
    <div className='flex justify-start items-center gap-2 w-full cursor-pointer p-0.5 rounded-lg hover:bg-slate-100 '>
       <span className='bg-slate-100 p-2 rounded-lg'><FontAwesomeIcon icon={faCar}className='text-sky-600' /></span>
       <span className='text-lg'>تكسي اجرة</span>
    </div> 
 </div>
  )
}

export default MenuList
