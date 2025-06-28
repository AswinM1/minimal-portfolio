import React from 'react'
import Experince from './Experience'

function Skills() {
    
  const list = ["React.js", "Next.js", "Tailwind Css", "HTML", "CSS", "javaScript", "TypeScript"]
  const listb = ["Node.js", "MySQL", "MongoDB"]
  const listl = ["Java", "C++", "SQL", "OOPS", "DSA"]
  return (
    <div>
       

        <div className='max-w-2xl py-4 font-medium font-sans px-4'>
          <p className='py-4 font-sans font-semibold text-[#ffdb89] text-xl'>Skills</p>
          Frontend
          <div className='flex flex-wrap gap-2 font-light mt-2'>
            {list.map((val, idx) => (
              <div key={idx} className='px-2 py-1 bg-neutral-800 rounded text-xs'>{val}</div>
            ))}
          </div>
        </div>
        <div className='max-w-2xl py-4 font-medium font-sans px-4'>
          Backend & DBs
          <div className='flex flex-wrap gap-2 font-light mt-2'>
            {listb.map((val, idx) => (
              <div key={idx} className='px-2 py-1 bg-neutral-800 rounded text-xs'>{val}</div>
            ))}
          </div>
        </div>

        <div className='max-w-4xl py-4 font-medium font-sans px-4'>
          Languages & Others
          <div className='flex flex-wrap gap-2 font-light mt-2'>
            {listl.map((val, idx) => (
              <div key={idx} className='px-2 py-1 bg-neutral-800 rounded text-xs'>{val}</div>
            ))}
          </div>
        </div>

        <div>
          
          
        </div>
    </div>
  )
}

export default Skills