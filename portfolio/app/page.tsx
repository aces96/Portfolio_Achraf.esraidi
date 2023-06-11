"use client"
import Image from 'next/image'
import {motion as m} from 'framer-motion'

export default function Home() {
  return (
    <main className="flex flex-row justify-between h-full bg-zinc-800	">
      <div className='w-80 h-screen flex items-center justify-center ml-5'>
        <div className='w-80 h-3/5 z-10 border-2 border-zinc-500 hover:border-green-500 rounded-3xl  bg-transparent flex flex-col items-center'>
            <Image className='rounded-3xl mt-7' alt='profilImage' src="/profilImg.png" width={170} height={120}/>
            <div className='w-full h-14 bg-transparent flex flex-col items-center justify-center'>
                <h2 className='text-xl font-medium mt-10'>
                  Achraf Esraidi
                </h2>
                <h2 className='text-base font-light mt-2'>
                  esraidi12@gmail.com
                </h2>
            </div>

            <div className='w-36 h-14 bg-transparent mt-10 flex flex-row items-center justify-between'>
              <a  href='https://www.linkedin.com/in/achraf-esraidi-7b3196249/' target='_blank' className='w-14 h-14 rounded-full	border-2 border-zinc-500 hover:border-green-500 flex justify-center items-center'>
                  <Image alt='linkedinIcon' src="/linkedinIcon.svg" color='grey' width={28} height={28}/>
              </a>
              <a  href='https://github.com/aces96' target='_blank' className='w-14 h-14 rounded-full	border-2 border-zinc-500 hover:border-green-500 flex justify-center items-center'>
                  <Image alt='githubIcon' src="/githubIcon.svg" color='grey' width={28} height={28}/>
              </a>
            </div>
        </div>
      </div>

      <div className='w-8/12 h-full mt-20'>
        <div className='h-12 w-full  flex flex-row justify-start'>
            <div className='w-36 h-full border-2 border-zinc-500 rounded-2xl flex flex-row items-center justify-center'>
                <Image className='mr-2' alt='homeIcon' src="/home.svg" width={20} height={20}/>
                <h5>
                  Introduce
                </h5>
            </div>
        </div>

        <m.div
        initial={{x:"100%"}}
        whileInView={{x: '0%'}}
        transition={{duration: 0.7}}
        className='h-80 w-full flex flex-col justify-center'>
          <div className='flex flex-row mb-5'>
                <h1 className='text-7xl '>
                    Hi i'm
                </h1>
                <h1 className='text-7xl ml-6 text-green-500'>
                    Achraf Esraidi
                </h1>
                <h1 className='text-7xl '>
                    ,
                </h1>
          </div>
              <h1 className='text-7xl mb-5'>
                  Fullstack Developer
              </h1>

          <h5 className='text-zinc-500 text-lg'>
              i build modern websites, mobile applications using latest web technologies.
          </h5>
        </m.div>
      </div>

    </main>
  )
}
