import React from 'react'

interface TitleProps {
    title: String;
}

const Title = ({ title }: TitleProps) => {
    return (
        <header className='w-full bg-slate-700'>
            <nav className=' flex justify-between items-center sm:px-16 px-6 py-4'>
                <h1 className='text-2xl text-white font-semibold'>
                    Popular {title}
                </h1>
            </nav>
        </header>
    )
}

export default Title
