import ImgBanner from '@/assets/img/house-banner.png'
import { SearchBar } from '../SearchBar'
export default function Banner() {
    return (
        <section className='h-full max-h-[640px] mb-8 xl:mb-24'>
            <div className='flex flex-col lg:flex-row'>
                <div className='lg:ml-8 xl:ml=[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0' >
                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                        <span className='text-slate-700'>Compre</span> sua casa dos sonhos conosco
                    </h1>
                    <p className='max-w-[480px] mb-8'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Officia odit dolorum hic neque delectus non voluptatem,
                        iusto reprehenderit perferendis ipsam perspiciatis
                        incidunt laudantium libero obcaecati quam ad possimus
                        magnam voluptate!</p>
                </div>
                <div className='hidden flex-1  lg:flex justify-end items-end'>
                    <img src={ImgBanner.src} alt='' />
                </div>
            </div>
            <SearchBar />
        </section>
    )
}