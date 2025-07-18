'use client'
import React from 'react'
import { GiPapers } from 'react-icons/gi'
import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs'
import Experince from './Experience'
import { motion } from 'framer-motion'
import Skills from './Skills'
import Github from './Github'
import img1 from '../comp/images/bg.jpg'
import Image from 'next/image';

function Home() {
  const Links = [
    {
      name: 'Resume',
      url: 'https://drive.google.com/file/d/1V67x1NlX1AFVpI2XJtHw3ikYVMs6JzLg/view',
      icon: <GiPapers />
    },
    {
      name: 'GitHub',
      url: 'https://github.com/AswinM1',
      icon: <BsGithub size={15} className='text-white' />
    },
    {
      name: 'Mail',
      url: 'mailto:aswinheria@gmail.com',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 141.7 141.7" className="w-4 h-4">
          <path fill="#4285f4" d="M24.3,111.3h17.2V69.6L16.9,51.3V104C16.9,108,20.2,111.3,24.3,111.3z"></path>
          <path fill="#34a853" d="M100.3,111.3h17.2c4.1,0,7.4-3.3,7.4-7.4V51.3l-24.5,18.4V111.3z"></path>
          <path fill="#fbbc04" d="M100.3,37.8v31.9l24.5-18.4v-9.8c0-9.1-10.4-14.3-17.7-8.8L100.3,37.8z"></path>
          <path fill="#ea4335" fillRule="evenodd" d="M41.4,69.6V37.8l29.4,22.1l29.4-22.1v31.9L70.9,91.7L41.4,69.6z" clipRule="evenodd"></path>
          <path fill="#c5221f" d="M16.9,41.4v9.8l24.5,18.4V37.8l-6.9-5.2C27.3,27.2,16.9,32.4,16.9,41.4z"></path>
        </svg>
      )
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/aswinmfullstack',
      icon: <BsLinkedin size={15} className='text-blue-400' />
    },
    {
      name: 'Twitter',
      url: 'https://x.com/__pseudocode__',
      icon: <BsTwitterX size={12} />
    },
  ]


  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className='max-w-xl   px-4 py-5  h-screen '
    >
      <div className='w-full h-screen flex flex-col mt-10'>
      
        <div className='py-6 px-4 text-xl font-bold font-sans text-[#ffdb89]'>
          <div className='flex flex-col mx-auto '> Aswin 
            <p className='font-sans tracking-tight text-sm text-neutral-300 '>Full stack developer</p></div></div>

        <div className='max-w-2xl px-4 text-md text-neutral-300 font-sans leading-relaxed'>
           I can convert design to beautiful websites with scalable backends and eye catching UI.
        </div>

        <div className='flex flex-wrap gap-2 items-center justify-center py-5 px-4'>
          {Links.map((link, idx) => (
            <a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex"
            >
              <span className="flex gap-2 border border-neutral-700 bg-neutral-800 rounded-sm items-center justify-between font-sans text-[12px] py-1 px-2 hover:bg-neutral-800 transition-all">
                {link.icon}
                {link.name}
              </span>
            </a>
          ))}
        </div>
  <Skills></Skills>
  <Experince></Experince>
  
  
  
       
      </div>
    </motion.div>
  )
}

export default Home