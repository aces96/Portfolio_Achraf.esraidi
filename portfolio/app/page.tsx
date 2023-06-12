"use client"
import Image from 'next/image'
import {motion as m} from 'framer-motion'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {useRef, useState} from 'react';
import { Resend } from 'resend';







export default function Home() {
  const resend = new Resend('re_FaujChwC_BpuGPNyYvkr84DUp6u7iSpSo');


  const ref = useRef<null | HTMLDivElement>(null);
  const [fullname,setFullname] = useState('')
  const [email,setEmail] = useState('')
  const [message,setMessage] = useState('')
  const [filledName, setFilledName] = useState(true)
  const [filledEmail, setFilledEmail] = useState(true)
  const [filledMessage, setFilledMessage] = useState(true)

    const handleClick = ()=>{
        ref.current?.scrollIntoView({behavior: 'smooth'});
    }

    const handleSend = async()=>{

      if(fullname.length < 1){
        setFilledName(false)
      }

      if(email.length < 1){
        setFilledEmail(false)
      }

      if(message.length < 1){
        setFilledMessage(false)
      }


      if(filledEmail && filledMessage && filledName){
          const config = {
            Username: 'frussefeiffedda-4738@yopmail.com',
            Password: 'EE597DC002B587ED1B5427486AFB35DC5E0F',
            Host: "smtp.elasticemail.com",
            Port: 2525,
            To : 'them@website.com',
            From : "you@isp.com",
            Subject : "This is the subject",
            Body : "And this is the body"
          }
      }
    }


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

            <button onClick={handleClick} className='h-12 text-white hover:text-black w-56 rounded-2xl border-2 border-green-500 bg-transparent hover:bg-green-400 mt-8'>
                Contact me
            </button>
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

        <div className='h-12 w-full  flex flex-row justify-start'>
            <div className='w-36 h-full border-2 border-zinc-500 rounded-2xl flex flex-row items-center justify-center'>
                <Image className='mr-2' alt='homeIcon' src="/resume.svg" width={20} height={20}/>
                <h5>
                  Resume
                </h5>
            </div>
        </div>

        <div className='w-full h-full mt-20 mb-16'>

          <VerticalTimeline>
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

              <VerticalTimelineElement  contentStyle={{ background: 'rgba(34, 192, 94,0.4)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(34, 192, 94,0.4)' }}
                iconStyle={{ background: 'white', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50, height: 50}}
                icon={<Image alt='workIcon' src={'/work.svg'} width={40} height={40}/>}
                className="vertical-timeline-element--work">
                <h3 className="vertical-timeline-element-title">Frontend Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">Internship, "IBTIKARCOM"</h4>
                <p>
                  i had an internship at the end of my first year at youcode school in a startup called "IBTIKARCOM" where i worked on the frontend side of a e-commerce platform using React js and Laravel it was my first professional experience where you get to work in big team you share idea and learn new skills from your teammates.
                </p>
                  <p className='text-green-500 '>
                  June 2021 - Septembre 2021
                  </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement  contentStyle={{ background: 'rgba(34, 192, 94,0.4)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(34, 192, 94,0.4)' }}
                iconStyle={{ background: 'white', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50, height: 50}}
                icon={<Image alt='educationIcon' src={'/education.svg'} width={40} height={40}/>}
                className="vertical-timeline-element--work">
                <h3 className="vertical-timeline-element-title">Web Development</h3>
                <h4 className="vertical-timeline-element-subtitle">"Youcode School"</h4>
                <p>
                    i studied web development at youcode school for 2 years training program, where the first year we learn the basic of programming and the second year is where you choose the stack you want specialize in it i choosed "MERN stack".
                </p>
                  <p className='text-green-500 '>
                  Septembre 2020 - june 2022
                  </p>
              </VerticalTimelineElement>

              <VerticalTimelineElement  contentStyle={{ background: 'rgba(34, 192, 94,0.4)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgba(34, 192, 94,0.4)' }}
                iconStyle={{ background: 'white', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 50, height: 50}}
                icon={<Image alt='educationIcon' src={'/education.svg'} width={40} height={40}/>}
                className="vertical-timeline-element--work">
                <h3 className="vertical-timeline-element-title">baccalaureate</h3>
                <h4 className="vertical-timeline-element-subtitle">"Jaber ibn Hayan High School"</h4>
                <p>
                    i had my electrical science baccalaureate from jaber ibn hayan high school.
                </p>
                  <p className='text-green-500 '>
                  june 2017 
                  </p>
              </VerticalTimelineElement>
          </VerticalTimeline>
        </div>

        <div className='h-12 w-full  flex flex-row justify-start'>
            <div className='w-36 h-full border-2 border-zinc-500 rounded-2xl flex flex-row items-center justify-center'>
                <Image className='mr-2' alt='homeIcon' src="/service.png" width={20} height={20}/>
                <h5>
                  Services
                </h5>
            </div>
        </div>

        <div className='w-full h-full mt-16 mb-16 flex flex-col items-start'>
            <div className=' flex flex-row'>
              <h2 className='text-7xl'>
              My
              </h2>
              <h2 className='text-7xl text-green-500 ml-3'>
                    Services
              </h2>
              <h2 className='text-7xl '>
                    .
              </h2>
            </div>

            <m.div
            initial={{y: "30%"}}
            whileInView={{y: '0%'}}
            transition={{duration: 0.6}}
            className='w-10/12 h-40 border-2 border-zinc-500 hover:border-green-500 mt-10 rounded-2xl flex flex-col items-center justify-center'>
                <div className='w-10/12 h-10 flex flex-row items-center justify-between'>
                    <h5 className='text-2xl'>
                    Web development
                    </h5>
                    <Image alt='codeIcon' src='/codeIcon.png' width={30} height={30}/>
                </div>
                <h5 className='text-base text-zinc-400 text-left mt-4'>
                    i build modern web apps using the latest web technologies.
                    like "Reactjs, Nodejs, Nextjs...""
                </h5>
            </m.div>

            <m.div
            initial={{y: "30%"}}
            whileInView={{y: '0%'}}
            transition={{duration: 0.6}}
            className='w-10/12 h-40 border-2 border-zinc-500 hover:border-green-500 mt-10 rounded-2xl flex flex-col items-center justify-center'>
                <div className='w-10/12 h-10 flex flex-row items-center justify-between'>
                    <h5 className='text-2xl'>
                    Mobile development
                    </h5>
                    <Image alt='codeIcon' src='/codeIcon.png' width={30} height={30}/>
                </div>
                <h5 className='text-base text-zinc-400 text-left mt-4'>
                    i build modern mobile applications React Native.
                </h5>
            </m.div>

        </div>

        <div className='h-12 w-full mb-16  flex flex-row justify-start'>
            <div className='w-36 h-full border-2 border-zinc-500 rounded-2xl flex flex-row items-center justify-center'>
                <Image className='mr-2' alt='homeIcon' src="/skills.png" width={20} height={20}/>
                <h5>
                  Skills
                </h5>
            </div>
        </div>

        <div className='h-full w-full grid grid-cols-4 gap-8'>
          <m.div
          initial={{y: '30%'}}
          whileInView={{y: "0%"}}
          transition={{duration: 0.7}}
          className='h-44 w-36 rounded-3xl border-2 border-zinc-500 hover:border-green-500 flex flex-col items-center justify-center'>
            <Image alt='javascriptIcon' src="/javascriptIcon.svg" height={50} width={50}/>
            <h3 className='text-xl mt-3'>
              Javascript
            </h3>
            <h3 className='text-2xl text-green-500 mt-2'>
              80%
            </h3>
          </m.div>

          <m.div
          initial={{y: '30%'}}
          whileInView={{y: "0%"}}
          transition={{duration: 0.7}}
          className='h-44 w-36 rounded-3xl border-2 border-zinc-500 hover:border-green-500 flex flex-col items-center justify-center'>
            <Image alt='javascriptIcon' src="/nodeIcon.svg" height={50} width={50}/>
            <h3 className='text-xl mt-3'>
              Nodejs
            </h3>
            <h3 className='text-2xl text-green-500 mt-2'>
              75%
            </h3>
          </m.div>

          <m.div
          initial={{y: '30%'}}
          whileInView={{y: "0%"}}
          transition={{duration: 0.7}}
          className='h-44 w-36 rounded-3xl border-2 border-zinc-500 hover:border-green-500 flex flex-col items-center justify-center'>
            <Image alt='javascriptIcon' src="/reactIcon.svg" height={50} width={50}/>
            <h3 className='text-xl mt-3'>
              React
            </h3>
            <h3 className='text-2xl text-green-500 mt-2'>
              80%
            </h3>
          </m.div>

          <m.div
          initial={{y: '30%'}}
          whileInView={{y: "0%"}}
          transition={{duration: 0.7}}
          className='h-44 w-36 rounded-3xl border-2 border-zinc-500 hover:border-green-500 flex flex-col items-center justify-center'>
            <Image alt='javascriptIcon' src="/nextjsIcon.svg" height={50} width={50}/>
            <h3 className='text-xl mt-3'>
              Nextjs
            </h3>
            <h3 className='text-2xl text-green-500 mt-2'>
              70%
            </h3>
          </m.div>

          <m.div
          initial={{y: '30%'}}
          whileInView={{y: "0%"}}
          transition={{duration: 0.7}}
          className='h-44 w-36 rounded-3xl border-2 border-zinc-500 hover:border-green-500 flex flex-col items-center justify-center'>
            <Image alt='javascriptIcon' src="/reduxIcon.svg" height={50} width={50}/>
            <h3 className='text-xl mt-3'>
              Redux
            </h3>
            <h3 className='text-2xl text-green-500 mt-2'>
              85%
            </h3>
          </m.div>

          <m.div
          initial={{y: '30%'}}
          whileInView={{y: "0%"}}
          transition={{duration: 0.7}}
          className='h-44 w-36 rounded-3xl border-2 border-zinc-500 hover:border-green-500 flex flex-col items-center justify-center'>
            <Image alt='javascriptIcon' src="/phpIcon.svg" height={50} width={50}/>
            <h3 className='text-xl mt-3'>
              PHP
            </h3>
            <h3 className='text-2xl text-green-500 mt-2'>
              65%
            </h3>
          </m.div>

          <m.div
          initial={{y: '30%'}}
          whileInView={{y: "0%"}}
          transition={{duration: 0.7}}
          className='h-44 w-36 rounded-3xl border-2 border-zinc-500 hover:border-green-500 flex flex-col items-center justify-center'>
            <Image alt='javascriptIcon' src="/mongodbIcon.svg" height={50} width={50}/>
            <h3 className='text-xl mt-3'>
              Mongodb
            </h3>
            <h3 className='text-2xl text-green-500 mt-2'>
              85%
            </h3>
          </m.div>

          <m.div
          initial={{y: '30%'}}
          whileInView={{y: "0%"}}
          transition={{duration: 0.7}}
          className='h-44 w-36 rounded-3xl border-2 border-zinc-500 hover:border-green-500 flex flex-col items-center justify-center'>
            <Image alt='javascriptIcon' src="/mysqlIcon.svg" height={50} width={50}/>
            <h3 className='text-xl mt-3'>
              Mysql
            </h3>
            <h3 className='text-2xl text-green-500 mt-2'>
              75%
            </h3>
          </m.div>

        </div>

        <div className='h-12 w-full mb-16 mt-16  flex flex-row justify-start'>
            <div className='w-36 h-full border-2 border-zinc-500 rounded-2xl flex flex-row items-center justify-center'>
                <Image className='mr-2' alt='homeIcon' src="/emailIcon.png" width={20} height={20}/>
                <h5>
                  Contact
                </h5>
            </div>
        </div>

        <div ref={ref} className='w-full h-full mt-16 mb-16 flex flex-col items-start'>
            <div className='flex flex-row'>
                <h2 className='text-6xl '>
                    Contact 
                </h2>
                <h2 className='text-6xl text-green-500 ml-3'>
                    me
                </h2>
                <h2 className='text-6xl ml-3'>
                    !
                </h2>
            </div>

            <div className='h-full w-11/12 flex flex-col mt-16'>
                <div className='h-22 w-11/12 flex flex-row'>
                  <div className='h-full w-6/12  flex flex-col items-start'>
                      <div className='h-6 w-full  flex flex-row items-start'>
                        <p className='text-base'>
                          Full Name 
                        </p>
                        <p className='text-red-500 ml-2'>
                          *
                        </p>
                      </div>
                      <input onChange={(e)=>{
                        setFullname(e.target.value)
                        console.log(fullname)
                      }} placeholder='Your Full Name' type='text' className='h-10 w-11/12 bg-transparent border-2 border-zinc-500 focus:border-green-500 focus:outline-none text-white .placeholder-zinc-500 mt-2'/>

                      {!filledName &&
                        <p className='text-base text-red-600 mt-3'>
                        Please fill out this field.
                      </p>
                      }


                  </div>

                  <div className='h-full w-6/12  flex flex-col items-start'>
                      <div className='h-6 w-full  flex flex-row items-start'>
                        <p className='text-base'>
                          Email 
                        </p>
                        <p className='text-red-500 ml-2'>
                          *
                        </p>
                      </div>
                      <input onChange={(e)=>{
                        setEmail(e.target.value)
                      }} placeholder='Your Email' type='text' className='h-10 w-11/12 bg-transparent border-2 border-zinc-500 focus:border-green-500 focus:outline-none text-white .placeholder-zinc-500 mt-2'/>

                      {!filledEmail &&
                        <p className='text-base text-red-600 mt-3'>
                        Please fill out this field.
                        </p>
                      }


                  </div>

                </div>

                <div className='h-40 w-full  flex flex-col items-start mt-8'>
                      <div className='h-6 w-full  flex flex-row items-start'>
                        <p className='text-base'>
                          Message 
                        </p>
                        <p className='text-red-500 ml-2'>
                          *
                        </p>
                      </div>
                      <input onChange={(e)=>{
                        setMessage(e.target.value)
                      }} placeholder='Your Message' type='text' className='h-full w-11/12 bg-transparent border-2 border-zinc-500 focus:border-green-500 focus:outline-none text-white .placeholder-zinc-500 mt-2'/>

                      {!filledMessage &&
                        <p className='text-base text-red-600 mt-3'>
                          Please fill out this field.
                        </p>
                      }


                </div>


                <button onClick={handleSend} className='h-12 text-white hover:text-black w-56 rounded-2xl border-2 border-green-500 bg-transparent hover:bg-green-400 mt-8'>
                   SEND MESSAGE
                </button>
            </div>
        </div>
        



      </div>
    </main>
  )
}
