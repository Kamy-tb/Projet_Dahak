import React from "react";
import logo from '../assets/logo.png';

function Card() {
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
  <figure>
  <img className="w-12 h-12" src={logo} alt="Logo" /></figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
}

export default Card;