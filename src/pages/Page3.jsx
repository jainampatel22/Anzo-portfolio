import React from 'react'

const Page3 = () => {
  return (
    <div className='h-screen relative bg-white text-black flex items-center justify-center '>
        <img className=' z-20 h-[72vh] w-[70vw] absolute' src="https://static.wixstatic.com/media/f1c650_23c4e7bcc6294676abdb81290a836c2b~mv2.png/v1/fill/w_890,h_512,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/try.png" alt="" srcset="" />
        <video autoPlay loop muted  className=' z-10 h-[60vh] w-[55vw] relative object-cover' src="https://video.wixstatic.com/video/f1c650_ec0546cb7b10485c8753983f298c6ea4/360p/mp4/file.mp4"></video>
 <div className='h-0.5 w-3/5 top-[40%] absolute bg-black z-0'></div>
 <div className='h-0.5 w-4/5 top-[58%] absolute bg-black z-0'></div>
 <div className='h-0.5 w-full top-[76%] absolute bg-black z-0'></div>
    </div>
    
  )
}

export default Page3