import React from 'react'


export default function Service() {
  return (
    <div>
        <div className='container'>
            <div className='flex flex-row justify-evenly
            font-bold  text-2xl text-red-800' >
                <div className='flex items-center w-[350px] mr-12 gap-2'>
                    <i class="fa-solid fa-car-side"></i>
                      Free Shipping
                </div>
                 <div className='flex items-center gap-2 mr-12'>
                    <i class="fa-solid fa-headphones"></i>
                      Free Shipping
                      
                </div>
                 <div className='flex items-center gap-2 mr-12'>
                    <i class="fa-solid fa-circle-check"></i>
                    
                      Free Shipping
                </div>
                 <div className='flex items-center gap-2 mr-4'>
                    <i class="fa-solid fa-money-check"></i>
                    
                    
                      Free Shipping
                </div>
                
            </div>
        </div>
        <br/>
      <div style={{border:'1px solid black', width:'100%'}}>

      </div>
      
    </div>
  )
}
