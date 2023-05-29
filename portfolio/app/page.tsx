import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen ">
      <div className='w-80 h-3/4 fixed z-10 border-2 border-red-500 rounded-3xl top-1/2 -translate-y-1/2  left-10 bg-transparent flex flex-col items-center '>
          <Image className='rounded-3xl' alt='profilImage' src="/profilImg.png" width={170} height={120}/>
          <div className='w-full h-14 bg-transparent flex flex-row items-center'>
          </div>
      </div>

    </main>
  )
}
