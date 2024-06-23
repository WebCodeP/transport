import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faVanShuttle} from '@fortawesome/free-solid-svg-icons';
import {faBus} from '@fortawesome/free-solid-svg-icons';


const MenuListPathMobil = () => {
  return (
    <div className='grid grid-cols-1  
    gap-0.5 text-right rounded-lg p-3 transition-all w-full'>
         <div className='flex pr-8 justify-start items-center gap-2 w-full  cursor-pointer p-0.5 rounded-lg hover:bg-slate-100 '> 
             <span className='bg-slate-100 p-2 rounded-lg'><FontAwesomeIcon icon={faVanShuttle}className='text-sky-600' /></span>
             <span className='text-xl'>مسارات داخلية</span>
         </div>
         <div className='flex pr-8 justify-start items-center gap-2 w-full cursor-pointer p-0.5 rounded-lg hover:bg-slate-100 '>
             <span className='bg-slate-100 p-2 rounded-lg'><FontAwesomeIcon icon={faBus}className='text-sky-600' /></span>
             <span className='text-xl'>مسارات خارجية</span>
         </div>
    </div>
  )
}

export default MenuListPathMobil
