'use client';
// import { FaChevronRight } from "react-icons/fa6";
import {useContext} from 'react'
import CountryDropdown from '@/components/CountryDropdown'
import PropertyDropdown from '../PropertyDropdown';
import PriceRangeDropdown from '../PriceRangeDropdown';
import { FaMagnifyingGlass } from 'react-icons/fa6';
import { HouseContext } from '../HouseContext';

export function SearchBar() {    
   const { handleClick } = useContext(HouseContext);
    return (
        <div
            className='px-[30px] py-6 max-w-[1170px] mx-auto flex flex-col lg:flex-row
            justify-between gap-4 lg:gap-x-3 relative lg:-top-4 lg:shadow-lg
          bg-white lg:bg-transparent lg: backdrop-blur rounded-lg'
        >
            <CountryDropdown />
            <PropertyDropdown />
            <PriceRangeDropdown />
            <button onClick={() => handleClick()} className='bg-slate-700 hover:bg-slate-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg'>
                <FaMagnifyingGlass />
            </button>
        </div>
        // <form className="flex flex-col w-[900px] m-auto">
        //     <div className="flex justify-center items-center mb-6">
        //         <h2 className="text-base font-semibold leading-7 text-slate-700">O que você procura?</h2>
        //     </div>
        //     <div className="flex flex-row justify-center items-center gap-x-8">
        //         <div className="">
        //             <label className="block text-sm font-medium leading-6 text-slate-700">Operação</label>
        //             <div className="mt-2">
        //                 <select
        //                     id="operation"
        //                     name="operation"
        //                     className="block w-full rounded-md border-0 pt-3 pb-3 pr-12 pl-3 text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:max-w-xs sm:text-sm sm:leading-6"
        //                 >
        //                     <option>Comprar</option>
        //                     <option>Alugar</option>
        //                 </select>
        //             </div>
        //         </div>
        //         <div>
        //             <label className="block text-sm font-medium leading-6 text-slate-700">Tipo de Imóvel</label>
        //             <div className="mt-2">
        //                 <select
        //                     id="imoveltype"
        //                     name="imoveltype"
        //                     className="block w-full rounded-md border-0 pt-3 pb-3 pr-12 pl-3 text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:max-w-xs sm:text-sm sm:leading-6"
        //                 >
        //                     <option>Casa</option>
        //                     <option>Apartamento</option>
        //                     <option>Comercial</option>
        //                     <option>Sobrado</option>
        //                     <option>Galpão</option>
        //                 </select>
        //             </div>
        //         </div>
        //         <div>
        //             <label className="block text-sm font-medium leading-6 text-slate-700">Cidade</label>
        //             <div className="mt-2">
        //                 <select
        //                     id="city"
        //                     name="city"
        //                     className="block w-full rounded-md border-0 pt-3 pb-3 pr-12 pl-3 text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:max-w-xs sm:text-sm sm:leading-6"
        //                 >
        //                     <option>Blumenau</option>
        //                     <option>Indaial</option>
        //                     <option>Timbó</option>
        //                     <option>Pomerode</option>
        //                     <option>Florianópolis</option>
        //                 </select>
        //             </div>
        //         </div>
        //         <div>
        //             <label className="block text-sm font-medium leading-6 text-slate-700">Bairro</label>
        //             <div className="mt-2">
        //                 <select
        //                     id="neighborhood"
        //                     name="neighborhood"
        //                     className="block w-full rounded-md border-0 pt-3 pb-3 pr-12 pl-3 text-slate-700 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-slate-700 sm:max-w-xs sm:text-sm sm:leading-6"
        //                 >
        //                     <option>Centro</option>
        //                     <option>Itoupava</option>
        //                     <option>Testo Salto</option>
        //                 </select>
        //             </div>
        //         </div>
        //         <button
        //             className="flex rounded-md mt-8 bg-slate-700 px-12 py-3 h-11 text-sm font-semibold text-white shadow-sm hover:bg-slate-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
        //         >
        //             Buscar
        //         </button>

        //     </div>
        //     <div className="group flex mt-2 ml-2">
        //         <a className=" text-sm font-light leading-6 text-slate-700 group-hover:text-slate-500" href="">Busca avançada</a>
        //         <span className="text-slate-700 group-hover:text-slate-500"><FaChevronRight className="items-center ml-1 w-1 mt-1" /></span>
        //     </div>
        // </form>
    )
}