import React from "react";
import artimg from '../assets/artimg.png';
function Article() {
  return (      
    <div className="card w-80 bg-white shadow-lg rounded-lg">
    <figure><img src={artimg} alt="Shoes" /></figure>
    <div className="card-body flex flex-col justify-center items-end text-right">
        <p className="font-regular text-right-10 text-sm leading-6 text-orange-500"> نشاطات</p>
      <h2 className="card-title font-medium text-black">الجلسات الوطنية حول واقع الطفولة في الجزائر – "إنجازات و رهانات”</h2>
      <p className="font-regular text-grey-50">اليوم الأول
أشرف الوزير الأول السيد أيمن بن عبد الرحمان الاثنين 19 ديسمبر 2022 بقصر الأمم بنادي الصنوبر بالجزائر العاصمة، على افتتاح اشغال</p>
    </div>
  </div>
  )
}
export default Article;