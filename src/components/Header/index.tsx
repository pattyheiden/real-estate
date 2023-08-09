import { NavItem } from "./NavItem";
import { SocialIcons } from "./SocialIcons";
import Logo from '@/assets/logo.png'
import Image from "next/image";
import Link from "next/link";
import { LuFacebook, LuHeadphones, LuInstagram } from "react-icons/lu";

export default function Header() {
    return (
        <div className="grid grid-cols-2 place-items-center h-auto px-6 text-white">
            {/* <div className="grid grid-cols-2 place-items-center h-auto px-6 text-white border-b border-zinc-200"></div> */}
            <div className="justify-self-start">
                <Link href="/">
                    <Image alt="" src={Logo} className=" h-[8rem] w-[10rem] my-2" />
                </Link>
            </div>
            <div className="justify-self-end">
                <nav className="flex">
                    <SocialIcons size='text-2xl' icon={LuHeadphones} />
                    <SocialIcons size='text-2xl' icon={LuFacebook} />
                    <SocialIcons size='text-2xl' icon={LuInstagram} />
                </nav>
            </div>
        </div>
    )
}
