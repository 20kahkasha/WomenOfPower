import React from 'react'

const Heading = ({children}) => {
  return (
    <h1 className='h1 text-center sm:text-[40px] md:text-[60px] lg:text-[80px] p-0 text-slate-600 font-sans'>{children}</h1>
  )
}

export default Heading;