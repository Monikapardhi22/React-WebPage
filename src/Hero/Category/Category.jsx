import React from 'react'
import bandheadphone from '../../assets/band-headphone.webp'
import boatsmartwatch from '../../assets/boat smart watch.png'
import headphones from '../../assets/headphone.png'

export default function Category() {
  return (
    <div className='py-8'>
      <div className='container'>
        {/* <div className='grid grid-cols-1 sm:grid-cols-2
        lg:grid-cols-4 gap-8'> */}
        <div className='flex flex-wrap justify-evenly items-center'>

          {/* first column */}
          <div className='px-6 pl-5 pr-14 bg-gradient-to-br  w-[360px]
          from-black/90 to-black/70 text-white rounded-3xl  flex items-center '>
            <div>
              
              <div className='mb-2'>
                <p className='mb-[2px] text-gray-400' >Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px'>With</p>
                <p className='text-4xl xl:text-5xl font-bold 
                mb-2 opacity-20'>Watch</p>
                <button className="bg-red-500
                      cursor-pointer w-[80px]  text-center rounded-2xl text-white">
                       Browser</button>
              </div>
            </div>
            <img src={boatsmartwatch} alt='img'
             className='w-[210px] relative bottom-0' />
          </div>
          {/* second column  */}
          <div className='ml-13'>
            <div className='px-6 pl-5 pr-14 bg-gradient-to-br  w-[370px]
          from-black/90 to-black/70 text-white rounded-3xl flex items-center '>
            <div>
              
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400' >Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px'>With</p>
                <p className='text-4xl xl:text-5xl font-bold 
                mb-2 opacity-20'>Head-<br/>phones</p>
                <button className="bg-red-500
                      cursor-pointer w-[80px]  text-center rounded-2xl text-white">Browser</button>
              </div>
            </div>
            <img src={headphones} alt='img'
             className='w-[210px] relative bottom-0' />
          </div>
          </div>
          {/* third column */}
            <div className='ml-23'>
            <div className='px-6 pl-5 pr-14 bg-gradient-to-br  w-[500px] ml-2.5
          from-black/90 to-black/70 text-white rounded-3xl flex items-center '>
            <div>
              
              <div className='mb-4'>
                <p className='mb-[2px] text-gray-400' >Enjoy</p>
                <p className='text-2xl font-semibold mb-[2px'>With</p>
                <p className='text-4xl xl:text-5xl font-bold 
                mb-2 opacity-20'>Band <br/>Headphones</p>
                <button className="bg-red-500
                      cursor-pointer w-[80px]  text-center rounded-2xl text-white">
                        Browser</button>
              </div>
            </div>
            <img src={bandheadphone} alt='img'
             className='w-[210px] relative bottom-0' />
          </div>
          </div>
        


        </div>
      </div>
    </div>
  )
}

