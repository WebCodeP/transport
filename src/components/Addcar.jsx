// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faEllipsisVertical} from '@fortawesome/free-solid-svg-icons';
// import startedImage from '../public/photos/started.png';

import icon from '/photos/car.png';

const Addcar = () => {
  return (
  <>
    <div className="w-screen p-2 h-screen flex justify-center items-center">
      <div className=" w-full  lg:w-[44rem] lg:h-[28rem] border-2 p-5 
      shadow-lg rounded-xl border-slate-200 flex items-center justify-center gap-x-8">
         <form action="" method="post" className="w-2/3 h-full">

            {/* حقل ادخال رقم السيارة */}
            <input type="text" name="" className="block border-2
             border-zinc-300 w-full py-2 px-1 my-4 transition-transform
             rounded-lg bg-gray-100 focus:scale-105 outline-none " placeholder='ادخل رقم السيارة'/>
            
            {/* حقل ادخال رقم الجي بي اس  */}
            <input type="text" name="" className="block border-2 
             border-zinc-300 w-full focus:scale-105 outline-none transition-transform
             py-2 px-1 my-4 rounded-lg bg-gray-100" placeholder='ادخل رقم الجي بي اس'/>
             
            {/* حقل اختيار نوع السيارة */}
            
            <select name="" id="" className="block border-2 border-zinc-300
             focus:scale-105 outline-none transition-transform
             w-full py-2 px-1 my-4  rounded-lg bg-gray-100 cursor-pointer">
              <option value="" selected disabled>اختر نوع السيارة</option>
              <option className="bg-transparent" value="">سرفيس</option>
              <option className="bg-transparent" value="">باص داخلي</option>
              <option className="bg-transparent" value="">تكسي اجرة</option>
            </select>

            {/* حقل ادخال مسار السيارة */}
            <select name="" id="" className="block border-2 border-zinc-300
             focus:scale-105 outline-none transition-transform
             w-full py-2 px-1 my-4  rounded-lg bg-gray-100 cursor-pointer">
              <option value="" selected disabled>اختر المسار</option>
              <option className="bg-transparent" value="">السوق-النزهة</option>
              <option className="bg-transparent" value="">السبيل-جامعة</option>
              <option className="bg-transparent" value="">الزهراء-كراج شمالي</option>
            </select>


            <input type="submit" value="اضافة"className="block w-full  py-2 
            bg-sky-600 text-white rounded-lg mt-8 text-xl
             cursor-pointer hover:bg-sky-700 transition-all" />
         </form>
         <div>
          <img src={icon} alt="addCarImgae" />
         </div>
      </div>
    </div>
  </>
  )
}


export default Addcar
