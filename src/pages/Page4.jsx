import React from 'react';

const Page4 = () => {
  return (
    <div className='h-screen p-5 bg-white'>
      <div className='h-full w-full bg-black rounded-[50px] overflow-hidden relative'>
        <video
          className='h-full w-full object-cover'
          autoPlay
          loop
          muted
          src="https://video.wixstatic.com/video/11062b_92619c730c4b4b0bb27ea39c4276a52b/480p/mp4/file.mp4"
        />
        <h1 className='font-[anzo1] text-[15vw] md:text-[30vw] text-white absolute -bottom-28 left-16 tracking-wide'>
          ABOUT
        </h1>
      </div>
    </div>
  );
}

export default Page4;
