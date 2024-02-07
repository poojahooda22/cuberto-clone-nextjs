import React from 'react'

function VideoSection() {
  return (
    <section className='max-h-[50%]'>
        <div>
            <video 
                width="100%" 
                height="100%" 
                preload="auto" 
                autoPlay 
                playsInline 
                loop 
                muted 
                src="/videos/1.mp4" className='w-[100%] h-[100%] object-cover '
            ></video>
        </div>
      
    </section>
  )
}

export default VideoSection
