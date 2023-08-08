import { NavItem } from "./NavItem";
import { SocialIcons } from "./SocialIcons";
import { FaChevronDown } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Logo from '@/assets/logo.png'
import Image from "next/image";

export default function Header() {
    return (
        <div className="grid grid-cols-2 place-items-center w-auto max-w-{1130} h-auto px-6 text-white border-b border-zinc-200">
            <div>
            <Image alt="" src={Logo} className=" h-[8rem] w-[10rem] my-2"/>
            </div>
            <div>
                <nav className="flex">
                    <NavItem title="Comprar" icon={FaChevronDown} />
                    <NavItem title="Vender" icon={FaChevronDown} />
                    <NavItem title="Contato" icon={FaChevronDown} />
                    <SocialIcons size='1rem' icon={FaFacebookF} />
                    <SocialIcons size='1rem' icon={FaInstagram} />
                </nav>
            </div>
        </div>
    )
}
