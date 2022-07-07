import React from 'react';
import arrowRight from '../../assets/ic_arrow_right_circle.svg';

const Card = () => {

    const img = "https://images.unsplash.com/photo-1644982654131-79f434ac0c6c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";
    const title = "Shayna Online Shop";
    const desc = "There are many variations of passages of Lorem Ipsum available, but the majority have suffered.";

    return (
        <div className='rounded-xl p-5 grid-cols-3 w-96 hover:shadow-lg'>
            <img className='rounded-xl h-60 mb-7' src={img} alt="img" />
            <h5 className='text-slate-700 text-2xl font-bold mb-1'>{title}</h5>
            <p className='text-slate-400 text-lg font-regular mb-5'>{desc}</p>
            <div className='flex'>
                <button className='text-base mr-1 font-semibold text-orange-400'>Visit Site</button>
                <img src={arrowRight} alt="arrow" />
            </div>
        </div>
    );
}

export default Card;
