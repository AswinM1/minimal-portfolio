
import React, { Suspense } from 'react'
import Loading from '../loading'

function page() {
  return (
    <Suspense fallback={<div><Loading></Loading></div>}>
    <div className=' max-w-2xl h-screen justify-center items-center mx-auto flex'>
      <div className='font-sans tracking-tighter font-bold'>in Progress...</div>
    </div>
    </Suspense>
  )
}

export default page