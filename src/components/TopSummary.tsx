import React from 'react'

function TopSummary() {
  return (
    <section className=' pt-[67px] pb-[90px]'>
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
                    <div>
                        <span></span>
                        <span className='mt-[45px]'>
                            How we Work
                        </span>
                    </div>
                    
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TopSummary
