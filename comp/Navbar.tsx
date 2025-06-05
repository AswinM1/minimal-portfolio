"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

function Navbar() {
  const path = usePathname()
  const items = [
    { name: "about", path: "/" },
    { name: "projects", path: "/projects" },
    { name: "blogs", path: "/blogs" }
  ]

  return (
   <div className=' z-0 max-w-5xl w-full px-4 py-4  flex items-center justify-center mx-auto font-serif  italic'>
      <div className='flex gap-2 justify-between items-center mx-auto py-4 px-2 cursor-pointer'>
        {items.map((val, idx) =>
          path === val.path ? (
            <div key={val.path} className='text-white'>
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
