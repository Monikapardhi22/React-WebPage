import React from 'react'

export default function Footer() {
  return (
    <div className='light:bg-gray-950 '>

        <div className='container bg-gray-50 flex-row flex justify-evenly pb-1 pt-5'>
            <div className=' pb-2 pt-5'>
                {/* company details */}
                <div className='w-[280px] py-8 px-2'>
                    <a href='#' 
                    className='text-primary
                     font-semibold tracking-widest text-2xl  
                     sm:text-3xl uppercase'>
                        Eshop
                    </a>
                    <p className='text-black-500 
                     lg:pr-24 pt-3 mt-4'>This type of Website for selling the devices. It is comfortable For Searching </p>
                    <p className='text-black-500 
                     lg:pr-24 pt-3 mt-4'> 
                        Made with by the Coding Journey
                    </p>
                 
                    <a href='https://www.youtube.com/channel/UC1H-a1MEFXRiFlGNLcy7gQ'
                    target='blank' className='inline-block bg-primary/90
                    rounded-full text-sm mt-4 px-4 py-2'>Visit our YouTube Channel</a>
                </div>
            </div>
            <div className='py-9 px-10 gap-4 font-bold text-xl' >Important Links

                <div className='text-xl flex flex-col gap-3 py-6'>
                    <i class="fa-brands fa-instagram"></i>insta
                    <i class="fa-brands fa-facebook"></i>facebook
                    <i class="fa-brands fa-linkedin"></i>linkedin

                </div>
            </div>
        </div>
        
      
    </div>
  )
}
