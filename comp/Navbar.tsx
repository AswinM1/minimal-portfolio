"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  const path = usePathname()
  const items = [
    { name: "About", path: "/" },
    { name: "Projects", path: "/projects" },
 
  
  ]

  return (
   <div className='w-full px-4 py-5  fixed flex items-center justify-center mx-auto font-sans  z-5  backdrop-blur-2xl bg-transparent mb-10'>
      <div className='flex gap-6 justify-between items-center mx-auto font-medium cursor-pointer py-2 '>
        {items.map((val, idx) =>
          path === val.path ? (
            <div key={val.path} className='text-[#ffdb89] '>
              {val.name}
            </div>
          ) : (
            <Link key={val.path} href={val.path}>
              <div className='text-neutral-400'>{val.name}</div>
            </Link>
          )
        )}
      </div>
    </div>
  )
}

export default Navbar
