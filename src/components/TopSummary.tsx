import React from 'react'

function TopSummary() {
  return (
    <section className='flex justify-center py-[180px]'>
      <div className='mx-[320px]'>
        <div className='md:flex gap-4'>
            <div>
                <video 
                    width="100%" 
                    height="100%" preload="auto" 
                            autoPlay 
                                    playsInline loop muted 
                                    src="/videos/1.mp4" 
                                    className='w-[5.4rem] h-[3.6rem] object-cover rounded-[1000px] mr-[12px]                                    
                                    lg:w-[167px] lg:h-[115px]
                                    xl:w-[223px] xl:h-[153px]'
                                ></video>
            </div>
            <div>
                <div>
                    <h3>Cuberto is a leading digital product agency focused on branding, UI/UX design, mobile, and web development.</h3>
                </div>
                <button>How we Work</button>
            </div>
        </div>
      </div>
    </section>
  )
}

export default TopSummary
