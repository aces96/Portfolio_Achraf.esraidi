"use client"
import Image from 'next/image'
import {motion as m} from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function Home() {
  return (
    <main className="flex flex-row justify-between h-full bg-zinc-800	">
      <div className='w-80 h-screen  flex items-center justify-center ml-5'>
        <div className='w-80 fixed h-3/5 z-10 border-2 border-zinc-500 hover:border-green-500 rounded-3xl  bg-transparent flex flex-col items-center'>
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
        initial={{y:"20%"}}
        whileInView={{y: '0%'}}
        transition={{duration: 0.7}}
        className='h-80 w-full flex flex-col justify-center'>
          <div className='flex flex-row mb-8'>
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
              <h1 className='text-7xl mb-8'>
                  Fullstack Developer
              </h1>

          <h5 className='text-zinc-500 text-lg'>
              i build modern websites, mobile applications using latest web technologies.
          </h5>
        </m.div>

        <div className='w-8/12 h-full mt-20'>
          <div className='h-12 w-full  flex flex-row justify-start'>
            <div className='w-36 h-full border-2 border-zinc-500 rounded-2xl flex flex-row items-center justify-center'>
                <Image className='mr-2' alt='homeIcon' src="/resume.svg" width={20} height={20}/>
                <h5>
                  Resume
                </h5>
            </div>
          </div>

          <VerticalTimeline s>
              <VerticalTimelineElement contentStyle={{ background: 'rgba(34, 192, 94,0.4)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(34, 192, 94,0.4)' }}
                date=""
                iconStyle={{ background: 'white', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50, height: 50}}
                icon={<Image alt='workIcon' src={'/work.svg'} width={40} height={40}/>}
                className="vertical-timeline-element--work">
                <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Freelance, 'level 1 seller on fiverr'</h4>
                <p>
                  build modern web apps and mobile application using Nextjs, Nodejs and React Native.
                  integrate OpenAI Models GPT-3 and Dall-e using there api.
                </p>
                  <p className='text-green-500 '>
                  Decembre 2022 - Present
                  </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement  contentStyle={{ background: 'rgba(34, 192, 94,0.4)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(34, 192, 94,0.4)' }}
                iconStyle={{ background: 'white', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50, height: 50}}
                icon={<Image alt='workIcon' src={'/work.svg'} width={40} height={40}/>}
                className="vertical-timeline-element--work">
                <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Internship, "Sens-Things"</h4>
                <p>
                  i had an internship at the end of my second year at youcode school in a startup called "Sens-Things" where i worked on a mobile application using React Native and and NFC technologie it was a great experience where i learned a lot about mobile developement and the NFC technologie.
                </p>
                  <p className='text-green-500 '>
                  June 2022 - Decembre 2022
                  </p>
              </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </main>
  )
}
