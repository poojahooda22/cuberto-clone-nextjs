import React from 'react'

function VideoSection() {
  return (
    <section className=''>
        <div>
            <video 
                width="100%" 
                height="100%" 
                preload="auto" 
                autoPlay 
                playsInline 
                loop 
                muted 
                src="/videos/1.mp4" className='max-h-[100vh] object-cover '
            ></video>
        </div>
      
    </section>
  )
}

export default VideoSection
