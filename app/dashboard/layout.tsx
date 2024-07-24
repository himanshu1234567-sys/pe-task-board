import Link from 'next/link'
import React from 'react'


interface DashBoardLayoutProps {
    children: React.ReactNode
}

const DashBoardLayout: React.FC<DashBoardLayoutProps> = (props) => {
    return (
        <div className=''>
           <nav className='bg-black text-white py-4 px-5 flex justify-between items-center'>
            <h3 className='text-xl'>logo</h3>
           <ul className='flex items-center gap-3'>
            <li>home</li>
            <li>about</li>
            <li>setting</li>
            <li>login</li>

           </ul>
           </nav>
           <div className='flex'>
            <div className='h-screen bg-slate-500 w-[25vw] text-black text-2xl'>
                <ul className='pt-5 flex flex-col gap-5 px-3'>
                    <li><Link href='/dashboard'>Dashboard</Link></li>
                    <li><Link href='/dashboard/todo'>todo</Link></li>
                    <li><Link href='/dashboard/users'>Users</Link></li>
                    <li><Link href='/dashboard/profile'>profile</Link></li>
                

                </ul>
            </div>
            <div className='p-4 max-h-screen overflow-auto'>{props.children}</div>
           </div>
        </div>
    )
}

export default DashBoardLayout