

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {faAngleDown} from '@fortawesome/free-solid-svg-icons';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import { faClose} from '@fortawesome/free-solid-svg-icons';


//componts
import MenuListPaths from './MenuListPaths';
import MenuListPathMobil from './MenuListPathMobil';
import MenuList from './MenuList';
import MenuListMobil from './MenuListMobil';
import AddMenu from './AddMenu';
import AddMenuMobil from './AddMenuMobil';
// import Cities from '../Cities';
import Trcak from '../Trcak';


import { useState } from 'react';
import {Link} from 'react-router-dom';





const Navbar = () => {
  const [Open , SetOpen] = useState({
   OpenMenu:false,
   OpenMenuPath:false,
   MenuTruck:false,
   AddMenu:false
  });

  //state for open navber in a small devices
  const [OpenInSmall , SetOpenInSmall] = useState(false);


  return (
     <header className="w-full lg:h-12 bg-white shadow-sm z-[9999] fixed top-0 ">
        <nav className="mx-auto px-4  lg:px-8 flex justify-between h-12 items-center">
         <div className='flex items-center gap-x-1 lg:gap-x-2 h-full'>
            {/* <img src={startedImage} alt="" className='w-16 h-16' /> */}
            <a href="#" className='lg:text-xl text-lg font-normal flex items-center justify-center  h-full rounded-xl'>مراقبة المواصلات</a>
            {/* <Cities/> */}
         </div> 
        

            <ul className="hidden transition-all lg:flex lg:justify-center lg:h-full lg:items-center lg:relative">
                <li className='transition-all' onClick={()=>{SetOpen({OpenMenuPath:!Open.OpenMenuPath})}}>
                  <span className="py-2 px-6  cursor-pointer rounded-lg mx-4 
                  gap-2 flex justify-center items-center transition-all hover:bg-slate-50 ">المسارات
                  {Open.OpenMenuPath?<FontAwesomeIcon icon={faAngleDown} className='text-sky-600 rotate-180'/>:<FontAwesomeIcon icon={faAngleDown} className='text-sky-600 '/>}
                  </span>
                  {Open.OpenMenuPath?<MenuListPaths/>:''}
                </li>
                <li className='transition-all' onClick={()=>{SetOpen({OpenMenu:!Open.OpenMenu})}}>
                    <span className="py-2 px-6 rounded-lg mx-4 cursor-pointer gap-2 flex justify-center items-center hover:bg-slate-50 transition-all">المركبات
                    {Open.OpenMenu?<FontAwesomeIcon icon={faAngleDown} className='text-sky-600 rotate-180'/> : <FontAwesomeIcon icon={faAngleDown} className='text-sky-600'/>}
                    </span>
                    {Open.OpenMenu?<MenuList/>:''}
                    </li>
                <li   className='relative transition-all' onClick={()=>{SetOpen({MenuTruck:!Open.MenuTruck})}}><span className="py-2 px-6 rounded-lg mx-4 cursor-pointer gap-2 flex justify-center items-center  hover:bg-slate-50">التعقب
                   {Open.MenuTruck?<Trcak/>:''}
                </span>
                </li>
                 
            </ul>

            {/* ul for small devices */}
            {/* -------------------------------------------------------------- */}

            {OpenInSmall ?<ul className="w-full flex flex-col gap-y-4 justify-center top-12 left-0 bg-white items-start p-4 absolute">
                <li className='w-full transition-all'onClick={()=>{SetOpen({OpenMenuPath:!Open.OpenMenuPath})}}>
                  <span className=" py-2 px-6  cursor-pointer 
                   gap-2 flex justify-start items-center rounded-lg mx-4 transition-all hover:bg-slate-50 ">المسارات
                  {Open.OpenMenuPath?<FontAwesomeIcon icon={faAngleDown} className='text-sky-600 rotate-180'/>:<FontAwesomeIcon icon={faAngleDown} className='text-sky-600 '/>}
                  </span>
                  {Open.OpenMenuPath?<MenuListPathMobil/>:""}


               </li>
                <li className='relative transition-all w-full' onClick={()=>{SetOpen({OpenMenu:!Open.OpenMenu})}}>
                    <span className="py-2 px-6  rounded-lg mx-4 cursor-pointer gap-2 flex justify-start items-center hover:bg-slate-50 transition-all">المركبات
                    {Open.OpenMenu?<FontAwesomeIcon icon={faAngleDown} className='text-sky-600 rotate-180'/> : <FontAwesomeIcon icon={faAngleDown} className='text-sky-600'/>}
                    </span>
                    {Open.OpenMenu?<MenuListMobil/>:''}

                    </li>
                <Link to={'/تعقب سيارة'} className='relative transition-all w-full' onClick={()=>{SetOpen({MenuTruck:!Open.MenuTruck})}}>
                 <span className="py-2 px-6 rounded-lg mx-4 cursor-pointer gap-2 flex justify-start
                               items-center  hover:bg-slate-50">التعقب
                   {/* {Open.MenuTruck?<FontAwesomeIcon icon={faAngleDown} className='text-sky-600 rotate-180'/>:<FontAwesomeIcon icon={faAngleDown} className='text-sky-600 '/>} */}
                </span>
                </Link>
               
               <AddMenuMobil/>



            </ul>:''}
            {/* End ul for small devices */}
            {/* ----------------------------------------------------------- */}


            <div className='flex items-center justify-center gap-2  
            lg:flex lg:items-center lg:justify-center lg:gap-6'>
                <button className='hidden lg:bg-slate-100 lg:py-2 lg:px-4 
                      lg:rounded-lg  lg:flex lg:items-center 
                      lg:justify-center' onClick={()=>{SetOpen({AddMenu:!Open.AddMenu})}}>
                      <FontAwesomeIcon icon={faPlus} className='text-lg text-sky-600' />
                </button>
                      {Open.AddMenu?<AddMenu/> : ''}
                <button className='bg-slate-100 py-2 px-4 rounded-lg
                       flex items-center justify-center '>
                      <FontAwesomeIcon icon={faMagnifyingGlass} className='text-lg text-sky-600' />
                </button>
                <button onClick={()=>{SetOpenInSmall(!OpenInSmall)}} className='bg-slate-100 flex 
                     items-center justify-center
                      py-2 px-4 rounded-lg lg:hidden'>
                      {OpenInSmall?<FontAwesomeIcon icon={faClose} className='text-xl text-sky-600' />:<FontAwesomeIcon icon={faBars} className='text-lg text-sky-600' />}
                </button>
            </div>
        </nav>
     </header>
  )
}




export default Navbar
