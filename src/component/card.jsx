import React from 'react';
import { FaArrowTrendUp } from "react-icons/fa6";

const Card = ({ icon: Icon,styles, text, value, description }) => (
  <div className="card bg-white w-64 h-52 rounded-xl p-2">
    <div className="card-icon m-5">
      <Icon className={styles}/>
    </div>
    <div className="card-content  m-5">
      <div className="card-title">{text}</div>
      <div className="card-value">{value}</div>
      <div className="card-description text-primaryColor items-center text-start flex flex-row">
        <FaArrowTrendUp className='text-sm'/>
        <span className='text-xs ml-1'>{description}</span>
        </div>
    </div>
  </div>
);

export default Card;
