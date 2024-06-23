

// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
// import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

const Trcak = () => {
  return (
    <div className='h-48 w-screen fixed z-[9999] bottom-0 left-0 bg-white rounded-t-xl'>
      <div className='flex  justify-between gap-y-12 p-4  '>
            <form action="" method="post" className=' w-1/3 flex items-center justify-center gap-x-3'>
              <input type="text" name="" id="" placeholder='ادخل رقم السيارة'
              className='bg-slate-200 p-2 w-full outline-none rounded-lg placeholder:text-lg border-2 border-zinc-300' />
              <input type="submit" value="تعقب" className='bg-slate-200 text-sky-600 text-xl py-2 px-4 rounded-lg
              '  />
            </form>
      </div>
    </div>
  )
}

export default Trcak
