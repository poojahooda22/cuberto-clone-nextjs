import React from 'react'
import './TopHeader.css';

function TopHeader() {
  return (
      <section className='mx-[4rem] my-[32rem] mb-28 sm:mx-[8rem] sm:my-[8rem] lg:mx-[24rem] lg:my-[8rem]
      sm:mb-0 scroll-mt-[100rem]'>
        <div className='flex flex-col justify-center'>
            <h1 className=''>
                <div className=' relative text-2xl font-light inline-block mr-6 md:text-xl leading-3'>We</div>
                <em><div className='tophead-title-em text-xl inline-block font-thin'>develop</div></em>
                <div className='flex flex-row items-center '>
                    <span className='tophead-title-span'>
                        <video width="100%" height="100%" preload="auto" autoPlay playsInline loop muted 
                            src="/videos/1.mp4" className='tophead-title-video '
                        ></video>  
                        <div className='inline-block text-2xl mr-[2rem]'>digital </div>  
                    </span>
                    <div className='text-2xl'> products</div>
                </div>
                <div className='flex flex-row'>
                    <div className='text-2xl mr-[2rem]'>from</div>
                    <div className='text-2xl'>scratch</div>
                </div>
                
            </h1>
            
        </div> 
      </section>
  )
}

export default TopHeader;
