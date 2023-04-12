import React from 'react'
import Navbar from "../components/Navbar";
import acceuilpicture from '../assets/acceuilpicture.png';
import association from '../assets/association.png';
import firefighter from '../assets/firefighter.png';
import police from '../assets/police-station.png'
import balance from '../assets/balance.png';
import Card from '../components/Card';
import { Link } from "react-router-dom";
import Article from '../components/Article';
export default function Accueil() {
    return (
      <div className="Acceuil bg-white ">
        <div style={{position: 'relative'}}>
      <img src={acceuilpicture} style={{ width: '100%', height: '85vh', objectFit: 'cover' }} alt="Ma photo" />
 
      

            <div class="absolute w-315 h-30 right-10 top-28 font-normal text-2xl text-right text-white">
              <p>  نتمتع بأكثر من 20 سنة في  </p>
            </div>
           
            <div class="absolute  h-219 w-60 right-16 top-40 font-bold text-4xl text-right text-white">
                <p>معالجة مشاكل التعدي على حقوق الاطفال           </p>
            </div>
            <a href="/Signaler">
            <button style={{position: 'absolute', top: '320px', right: '43px', backgroundColor: 'rgba(89, 197, 94, 0.5)', width: '130px', height: '40px', borderRadius: '10px', color: 'white', fontSize: '18px', fontWeight: 'medium', backdropFilter: 'blur(10px)'}}>
  التبليغ
</button>
</a>           
        </div>   
      

   
   <div className="flex flex-row justify-between items-center mb-4 mt-4 px-4">
<a href="#" className="text-sm font-medium text-gray-600 hover:text-gray-800">المزيد</a>
<h2 className="text-xl font-medium text-gray-800 text-right">أخبار و نشاطات</h2>

</div>
  <div className="flex flex-row gap-8 w-full justify-between px-4">
 <Article />
 <Article />
 <Article />
 <Article />

</div>
<h2 className="text-xl font-medium text-gray-800 text-right mt-4 mb-4 px-4">المؤسسات المتعوانة</h2>

<div className="flex flex-wrap justify-center">
  <div className="sm:w-1/4 p-4">
    <div className="flex flex-col justify-center items-center">
      <img src={police} alt="Police" className="w-1/2 rounded-lg" style={{height: 'auto'}} />
      <p className="text-black text-center py-2 rounded-b-lg">الشرطة</p>
    </div>
  </div>
  <div className="sm:w-1/4 p-4">
    <div className="flex flex-col justify-center items-center">
      <img src={association} alt="Association" className="w-1/2 rounded-lg" style={{height: 'auto'}} />
      <p className="text-black text-center py-2 rounded-b-lg">المؤسسات الخيرية</p>
    </div>
  </div>
  <div className="sm:w-1/4 p-4">
    <div className="flex flex-col justify-center items-center">
      <img src={balance} alt="Balance" className="w-1/2 rounded-lg" style={{height: 'auto'}} />
      <p className="text-black text-center py-2 rounded-b-lg">العدالة</p>
    </div>
  </div>
  <div className="sm:w-1/4 p-4">
    <div className="flex flex-col justify-center items-center">
      <img src={firefighter} alt="Firefighter" className="w-1/2 rounded-lg " style={{height: 'auto'}} />
      <p className="text-black text-center py-2 rounded-b-lg">الحماية</p>
    </div>
  </div>
</div>


</div>
      )
}