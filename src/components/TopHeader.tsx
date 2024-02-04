import React from 'react'
import Bounded from './Bounded';
import './TopHeader.css';

function TopHeader() {
  return (
      <div className='mx-80 my-24'>
        <div className='tophead-container flex flex-col'>
            <h1>
                <div className='text-xl inline-block mr-6 md:text-xl text-wrap md:text-balance'>We</div>
                <em><div className='tophead-title-em text-xl inline-block'>develop</div></em>
                <div className='flex flex-row items-center'>
                    <span className='tophead-title-span'>
                        <video width="100%" height="100%" preload="auto" autoPlay playsInline loop muted 
                            src="/videos/1.mp4" className='tophead-title-video'
                        ></video>  
                        <span className='inline-block'>digital products</span>  
                    </span>
                </div>
            </h1>
            <div><div>
            </div></div>
        </div> 
      </div>
  )
}

export default TopHeader
