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
   <div className=' max-w-2xl w-full px-4 py-5 border-b  border-[#ffdb89] flex items-center justify-center mx-auto font-mono   backdrop-blur-2xl bg-[#121212]'>
      <div className='flex gap-2 justify-between items-center mx-auto  cursor-pointer py-2 '>
        {items.map((val, idx) =>
          path === val.path ? (
            <div key={val.path} className='text-[#ffdb89] underline'>
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
