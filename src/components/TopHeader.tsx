import React from 'react'
import './TopHeader.css';


function TopHeader() {
  return (
      <section 
        className=' mx-[1rem] my-[8rem] mb-28 sm:mx-[8rem] sm:my-[8rem] xl:mx-[320px] xl:px-[272px]
        flex flex-col justify-center'
    >
        <div 
            className='
            overflow-hidden '
        >
            <div className=''>
                <h1  className='text-sm tracking-tighter md:text-lg  lg:text-xl xl:text-2xl'>
                    <div 
                        className='relative -m-[9.15px] p-[9.15px] inline-block'
                    >
                        <div 
                            className='mr-2'
                        >
                            We
                        </div>
                    </div>
                    <em>
                        <div className='relative -m-[9.15px] p-[9.15px] inline-block'>
                            <div 
                                className=''
                            >
                                develop
                            </div>
                        </div>
                    </em>
                    <span className='md:flex items-center '>
                        <div className='flex items-center mr-4'>
                            <div>
                                <video width="100%" height="100%" preload="auto" autoPlay playsInline loop muted 
                                    src="/videos/1.mp4" 
                                    className='w-[5.4rem] h-[3.6rem] object-cover rounded-[1000px] mr-[12px] 
                                    md:w-[89.34px] md:h-[61px]
                                    lg:w-[167px] lg:h-[115px]
                                    xl:w-[223px] xl:h-[153px]'
                                ></video>
                            </div>
                            <div className='relative -m-[9.15px] p-[9.15px] inline-block'>
                                <div className=''>digital</div>
                            </div>
                        </div>
                        <div className='relative -m-[9.15px] p-[9.15px] md:flex'>
                            <div className='inline-block'>products</div>
                        </div>
                    </span>
                    <span>
                        <div className='relative -m-[9.15px] p-[9.15px] inline-block'>
                            <div className='mr-2'>from</div>
                        </div>
                        <div className='relative -m-[9.15px] p-[9.15px] inline-block'>
                            <div className=''>scratch</div>
                        </div>
                    </span>
                    

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
