import React from 'react'

function TopSummary() {
  return (
    <section className=' pt-[67px] pb-[90px] w-full '>
      <div className=' px-[16px] md:px-[81px] '>
        <div className=''>
            <div className='md:flex justify-center items-center'>
                <div className='max-w[302px]' >
                    <video 
                        width="100%" 
                        height="100%" preload="auto" 
                        autoPlay 
                        playsInline loop muted 
                        src="/videos/summary.mp4" 
                            className=' object-cover rounded-[1000px] mb-[56px] 
                                        w-[361px] h-[361px]                                   
                                        '
                                    ></video>
                </div>
                <div className=''>
                    <div className='max-w[58rem] text-[27px] tracking-tight 
                    leading-7 font-medium'>
                        <p>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</p>
                    </div>
                    <div 
                        className='mt-[45px] w-[391px] h-[157px] rounded-[1000px] 
                        border-2 border-gray-dark text-[22px] flex justify-center items-center font-medium'>
                        <a className=' '>
                            <span></span>
                            <span className=''>
                            
                                How we Work
                            </span>
                        </a>    
                    </div>   
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TopSummary
