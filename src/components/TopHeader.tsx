import React from 'react'
import './TopHeader.css';


function TopHeader() {
  return (
      <section className='mx-[2rem] my-[8rem] mb-28 sm:mx-[8rem] sm:my-[8rem] lg:mx-[24rem] lg:my-[8rem]
      sm:mb-0 scroll-mt-[100rem] h-[100%]'>
        <div className='flex flex-col justify-center overflow-hidden '>
            <div className=''>
                <h1>
                    <div className='relative -m-[0.15rem] p-[0.15rem] inline-block'>
                        <div className='text-sm mr-3'>We</div>
                    </div>
                    <em>
                        <div className='relative -m-[0.15rem] p-[0.15rem] inline-block'>
                            <div className='text-sm'>
                                develop
                            </div>
                        </div>
                    </em>
                </h1>
            </div>
            {/* <h1 className=''>
                <div className='relative text-2xl inline-block mr-6'>
                    We
                </div>
                <em><div className='tophead-title-em  inline-block font-light '>develop</div></em>
                <div className='flex flex-row items-center '>
                    <span className='tophead-title-span'>
                        <video width="100%" height="100%" preload="auto" autoPlay playsInline loop muted 
                            src="/videos/1.mp4" className='w-[12.2rem] h-[7.6rem] object-cover rounded-[1000px]'
                        ></video>  
                        <div className='inline-block text-2xl mr-[2rem] font-light'>digital </div>  
                    </span>
                    <div className='text-2xl font-light'> products</div>
                </div>
                <div className='flex flex-row'>
                    <div className='text-2xl mr-[2rem] font-light'>from</div>
                    <div className='text-2xl'>scratch</div>
                </div>            
            </h1> */}
            
        </div> 
      </section>
  )
}

export default TopHeader;
