import React, { useContext } from 'react';
import Link from 'next/link';
import { HouseContext } from '@/components/HouseContext';
import House, { HouseProps } from '../components/House'
import { ImSpinner6 } from 'react-icons/im';

export default function HouseList() {
    const { houses, loading } = useContext(HouseContext);

    if (loading) {
        return (<ImSpinner6 className='mx-auto animate-spin text-slate-700 text-4xl mt-[200px]' />)
    }
    if (houses.length < 1) {
        return <div className='text-center text-3xl text-gray-400 mt-48 mb-48'>Desculpe, nenhum resultado encontrado.</div>
    }
    return (
        <section className='mb-20'>
            <div className='p-4 lg:p-8 mx-auto'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
                    {
                        houses.map((house: {
                            id: number;
                            image: string;
                            type: string;
                            country: string;
                            address: string;
                            bedrooms: number;
                            bathrooms: number;
                            surface: number;
                            price: number;
                        }, index: number) => {
                            return (
                                <Link
                                    key={index}
                                    href={`/property/${house.id}`}>
                                    <House house={house} />
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}