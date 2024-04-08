import Link from 'next/link'
import React from 'react'
import Title from './Title'

const Navbar = () => {
    return (
        <>
            <header className='w-full  bg-blue-500'>
                <nav className=' flex justify-between items-center sm:px-16 px-6 py-4'>
                    <h1 className='text-3xl text-white font-semibold'>
                        DEMO Streaming
                    </h1>
                    <div className="nav-right flex gap-3 items-center">
                        <Link href="#" className='text-white font-medium text-center'>
                            Log in
                        </Link>
                        <Link href="#" className='bg-slate-700 text-white p-2'>
                            Start your free trial
                        </Link>
                    </div>
                </nav>

            </header>
        </>

    )
}

export default Navbar