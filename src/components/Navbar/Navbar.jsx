import React from 'react';
import navImg from "../../assets/logo.png"
import coinImg from "../../assets/Currency.png"

const Navbar = ({AvailableBalance}) => {
    return (
        <div className="navbar max-w-[1200px] mx-auto">
            <div className= " flex-1  ">
                <a className=" "><img className='w-[60px] h-[60px] bg-white rounded-4xl' src={navImg} alt="" /></a>
            </div>
            <div className="flex gap-2 text-gray-500">
                <span className='flex'>{AvailableBalance} <p>M</p></span>
                <span className='flex gap-2'>coin <img src={coinImg} alt="" /></span>
            </div>
        </div>
    );
};

export default Navbar;