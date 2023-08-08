import { ElementType } from "react"

export interface SocialIconsProps {
    icon: ElementType
    size: string
}
export function SocialIcons({ size, icon: Icon }: SocialIconsProps) {
    return (
        <a className="group px-3 py-2 ">
            <Icon size={size} className="w-5 ml-1 text-slate-700 group-hover:text-gray-500" />
        </a>
    )
}