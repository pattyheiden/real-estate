import Image from 'next/image';
import React from 'react';
import { LuBedSingle, LuBath, LuExpand } from 'react-icons/lu';

export interface HouseProps {    
  house: {    
    id: number;
    image: string;
    type: string;
    country: string;
    address: string;
    bedrooms: number;
    bathrooms: number;
    surface: number;
    price: number;
  };
}

export default function House({ house }: HouseProps) {
  const { id, image, type, country, address, bedrooms, bathrooms, surface, price } = house;
  return (
    <div className='bg-white shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition lg:mb-10'>
      <Image className='mb-8' src={image} alt='' />
      <div className='mb-4 flex gap-x-2 text-sm'>
        <div className='bg-yellow rounded-full text-white px-3'>{type}</div>
        <div className='bg-slate-600 rounded-full text-white px-3 '>{country}</div>
      </div>
      <div className='text-lg font-semibold max-w-[260px] text-slate-800'>{address}</div>
      <div className='flex gap-x-4 my-4'>
        <div className='flex items-center text-slate-600 gap-1'>
          <div className='text-[20px]'><LuBedSingle /></div>
          <div>{bedrooms}</div>
        </div>
        <div className='flex items-center text-slate-600 gap-1'>
          <div className='text-[20px]'><LuBath /></div>
          <div>{bathrooms}</div>
        </div>
        <div className='flex items-center text-slate-600 gap-1'>
          <div className='text-[20px]'><LuExpand /></div>
          <div>{surface}</div>
        </div>
      </div>      
      <div className='text-lg font-semibold '>{price}</div>
    </div>
  )
}