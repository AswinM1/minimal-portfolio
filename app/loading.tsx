// components/Loading.tsx
'use client'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center ">
      <motion.div
        className="w-16 h-16 rounded-full border-4 border-t-white border-b-white animate-spin"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      />
    </div>
  )
}
