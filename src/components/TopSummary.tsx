import React from 'react';
import './TopSummary.css';

function TopSummary() {
  return (
    <section className=' pt-[67px] pb-[90px] 
    md:pt-[72px] md:pb-[120px]
    lg:pt-[135px] lg:pb-[225px]
    xl:pt-[180px] xl:pb-[300px]
    w-full '>
      <div className=' px-[16px] md:px-[81px] '>
        <div className=''>
            <div className='md:flex items-center justify-center gap-8'>
                <div 
                    className='w-[361px] h-[361px] md:w-[361px] md:h-[361px] mb-[56px]
                    lg:w-[332px] lg:h-[332px] xl:w-[624px] xl:h-[624px] md:flex items-center' 
                >
                    <video 
                        width="100%" 
                        height="100%" preload="auto" 
                        autoPlay 
                        playsInline loop muted 
                        src="/videos/summary.mp4" 
                        className=' object-cover rounded-[1000px]  md:mb-[24px]
                        '
                    ></video>
                </div>
                <div className='sm:max-w-[302px] lg:max-w-[403px] xl:max-w-[688px]'>
                    <div className='max-w[58rem] text-[27px] tracking-normal
                    leading-[29.84px] font-matter md:text-[21px] md:leading-[23px] lg:text-[21px] lg:leading-6 xl:text-[40px] xl:leading-[44px]'>
                        <p>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</p>
                    </div>
                    <div 
                        className='mt-[45px] w-[391px] h-[157px] rounded-[1000px] 
                        md:w-[232px] md:h-[104px] md:mt-[28px]
                        lg:w-[313px] lg:h-[138px] lg:mt-[24px]
                        xl:w-[588px] xl:h-[263px] xl:mt-[72px]
                        border-2 border-gray-dark text-[22px] md:text-[16px] lg:text-[21px] xl:text-[40px]
                        flex justify-center items-center font-matter'>
                        <a className=' '>
                            <span></span>
                            <span className='font-matter'>
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
