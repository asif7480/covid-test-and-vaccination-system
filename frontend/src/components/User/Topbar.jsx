import React from 'react'

function Topbar({ title, img }) {
    return (
        <>
            <div 
                // className='h-96 bg-cover bg-center' 
                className='h-96 bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center' 
                style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${img})`}}
            >
                <div className='w-2/3 mx-auto text-center'>
                    <h2 className='font-semibold text-3xl md:text-6xl mt-14 pb-10 text-white'>{title}</h2>
                </div>

            </div>
        </>
    )
}

export default Topbar