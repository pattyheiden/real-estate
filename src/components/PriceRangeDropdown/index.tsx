import React, { useState, useEffect, useContext } from "react"
import { Menu } from "@headlessui/react";
import { HouseContext } from "../HouseContext"
import { LuChevronDown, LuChevronUp, LuWallet } from "react-icons/lu";

export default function PriceRangeDropdown() {
    const { price, setPrice } = useContext(HouseContext);   
    const [isOpen, setIsOpen] = useState(false);
    const prices = [
        {
            value: "Preço estimado (todos)",
        },
        {
            value: "100000 - 130000",
        },
        {
            value: "130000 - 160000",
        },
        {
            value: "160000 - 190000",
        },
        {
            value: "190000 - 220000",
        },
        {
            value: "10000 - 30000",
        },
        {
            value: "30000 - 40000",
        },
        {
            value: "1 - 2",
        },
    ]
    return (
        <Menu as='div' className="w-full lg:max-w-[296px] cursor-pointer relative">
            <Menu.Button onClick={() => setIsOpen(!isOpen)} className="flex h-[64px] items-center px-[18px] border rounded-lg w-full text-left">
                <LuWallet className="text-2xl mr-[18px] text-slate-500" />
                <div>
                    <div className="text-[15px] font-medium leading-tight">{price}</div>
                    <div className="text-[13px]">Selecione</div>                    
                </div>
                {
                        isOpen ? (
                            <LuChevronUp className="text-2xl text-slate-500 ml-auto" />                                                        
                        ) : (
                            <LuChevronDown className="text-2xl text-slate-500 ml-auto" />
                        )
                    }
            </Menu.Button>
            <Menu.Items className="px-6 py-8 text-[15px] space-y-6 shadow-md bg-white absolute w-full z-10 list-none rounded-b-lg">
                {prices.map((price, index) => {
                    return(
                        <Menu.Item 
                        onClick={() => setPrice(price.value)}
                        className="cursor-pointer hover:text-slate-600 transition" 
                        as='li' 
                        key={index}>
                            {price.value}
                        </Menu.Item>
                    );
                })}
            </Menu.Items>
        </Menu>
    )
}