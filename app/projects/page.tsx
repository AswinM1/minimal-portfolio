import Projects from '@/comp/Projects'
import React, { Suspense } from 'react'
import Loading from '../loading'

function page() {
  return (
    <div>
      <Suspense fallback={<div><Loading></Loading></div>}>
      <Projects></Projects>
      </Suspense>
    </div>
  )
}

export default page