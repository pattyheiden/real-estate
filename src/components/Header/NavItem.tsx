import { ElementType } from "react"

export interface NavItemProps{
    title: string
    icon: ElementType
    className?: string
}

export function NavItem({title, icon: Icon, className}: NavItemProps){
    return(
        <a href="" className="group flex items-center gap-3 rounded px-3 py-2 hover:bg-slate-50">
             {/* <Dot className="h-5 w-5 text-zinc-500" /> */}
             <span className="font-medium text-slate-700 group-hover:text-gray-500">{title}</span>
             {title !== 'Contato' && <Icon className="h-3 w-3 text-zinc-400 group-hover:text-gray-500"/>}
            </a>
    )
}