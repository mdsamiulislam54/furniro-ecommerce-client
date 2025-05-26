import React from 'react'
import Button from '../components/Button'

const Banner = () => {
  return (
    <div>
        <div className='bg-secondary lg:h-[400px] lg:w-[600px] w-[400px]   absolute top-1/2 lg:right-10 right-2 -translate-y-1/2  rounded-lg shadow-lg mx-auto '> 
            <div className='p-12' >
                <h5 className='text-sm tracking-wider font-bold mb-2'>new Arrival</h5>
                <h1 className='lg:text-6xl md:text-3xl text-2xl mb-6 font-bold tracking-wide text-primary'>Discover Our New Collection</h1>
                <p className='text-base tracking-wide font-light text-gray-600 mb-4'> Explore a handpicked selection of elegant and modern furniture to transform your home. Find the perfect blend of comfort and style at unbeatable prices.</p>
                <Button text={"Buy Now"}></Button>
            
            </div>

        </div>
    </div>
  )
}

export default Banner