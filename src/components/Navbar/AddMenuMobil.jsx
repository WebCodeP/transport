
import { Link } from "react-router-dom";

const AddMenuMobil = () => {
  return (
    <div className="w-full">
         <Link to={'/اضافة مسار'} className='w-full flex justify-start items-center
             gap-2 p-0.5 rounded-lg  hover:bg-slate-50'>
            <span className='block py-2 px-6  cursor-pointer rounded-lg mx-4 
            transition-all hover:bg-slate-50 '>اضافة مسار</span>
         </Link>
         <Link to={'/اضافة عربة'} className='w-full flex justify-start items-center
             gap-2 p-0.5 rounded-lg  hover:bg-slate-50'>
             <span className='block py-2 px-6  cursor-pointer rounded-lg mx-4 
            transition-all hover:bg-slate-50 '>اضافة سيارة</span>
          </Link>
    </div>
  )
}

export default AddMenuMobil
