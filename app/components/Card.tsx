import Link from 'next/link'
import React from 'react'
import Title from './Title'

const Card = () => {
    return (<>
        <Title title = "Title"/>
        <div className="flex p-10">

            <div className="px-4">
                <Link href="/Series" className="block max-w-sm  py-24 px-12 bg-black border  border-gray-200 shadow">

                    <h5 className="mb-2 text-2xl text-white font-bold tracking-tight dark:text-white">SERIES</h5>
                </Link>
                <p>Popular series</p>
            </div>

            <div className="px-4">
                <Link href="/Movies" className="block max-w-sm  py-24 px-12 bg-black border  border-gray-200 shadow">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">MOVIES</h5>
                </Link>
                <p>Popular Movies</p>
            </div>
        </div>
        </>

    )
}

export default Card