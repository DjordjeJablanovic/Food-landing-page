import React from 'react'
import {footerData} from '../data'

const Footer = () => {

    const {about,links,program} = footerData

  return (
    <footer className='py-[40px] lg:py-[160px] gabg w-full px-5 max-w-[1640px] bg-black/90 mx-auto'>
        <div className='mx-auto max-w-[1240px]  '>
            {/* grid */}
            <div className='text-white flex flex-col lg:flex-row lg:justify-between gap-x-4 gap-y-10'>
                {/* about */}
                <div className='flex-1 flex flex-col gap-y-6'>
                    {/* title */}
                    <div className='font-primary text-xl uppercase tracking-[0.08em] text-orange-400'>{about.title}</div>
                    {/* subtitle */}
                    <div className='leading-relaxed text-[#dbdbdb] '>{about.subtitle}</div>
                    {/* address, phone, email */}
                    <div className='flex flex-col gap-y-4 font-semibold text-[#dbdbdb]'>
                        <div className='flex items-center gap-x-[10px]'>
                            <div>{about.address.icon}</div>
                            <div>{about.address.name}</div>
                        </div>
                        <div className='flex items-center gap-x-[10px]'>
                            <div>{about.phone.icon}</div>
                            <div>{about.phone.number}</div>
                        </div>
                        <div className='flex items-center gap-x-[10px]'>
                            <div>{about.email.icon}</div>
                            <div>{about.email.address}</div>
                        </div>
                    </div>
                </div>
                {/* links */}
                <div className='flex-1 flex flex-col gap-y-6 xl:items-center'>
                    <div>
                        <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6 text-orange-400'>{links.title}</div>
                        <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
                            {links.items.map((item,index) =>{
                                //destructure item
                                const { href, name} = item
                                return <li key={index}>
                                    <a href={href} className='hover:text-white transition'>{name}</a>
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
                {/* program */}
                <div className='flex-1'>
                    <div className='font-primary text-xl uppercase tracking-[0.08em] mb-6 text-orange-400'>{program.title}</div>
                    <ul className='flex flex-col gap-y-4 text-[#dbdbdb]'>
                        {program.items.map((item, index)=>{
                            return <li key={index}>{item.name}</li>
                        })}
                    </ul>
                </div>
                {/* newsletter */}
                
            </div>
        </div>
    </footer>
  )
}

export default Footer