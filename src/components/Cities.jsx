





const cities = [
    {"key":1 ,"city":"حمص"},
    {"key":2 ,"city":"دمشق",},
    {"key":3 ,"city":"حلب",},
    {"key":4 ,"city":"حماه"},
    {"key":5 ,"city":"اللاذقية"},
    {"key":6 ,"city":"طرطوس"},
    {"key":7 ,"city":"درعا"},
    {"key":8 ,"city":"السويداء"},
    {"key":9 ,"city":"الحسكة"},
    {"key":10 ,"city":"الرقة"},
    {"key":11 ,"city":"دير الزور"}
    ];

    const ListCity = cities.map((city)=>{
        return (
           <option value= "" key={city.key}>{city.city}</option>
        );
      });

const Cities = () => {
  return (
    <div className='relative z-[99999] mr-2 lg:mr-4'>
    <select className='lg:px-2 py-1 outline-none cursor-pointer
      bg-slate-100 rounded-lg text-sky-600 flex justify-start items-center'>
       {ListCity}
    </select>
</div>
  )
}

export default Cities
