import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1 flex justify-center items-center">
        <img src={offer} alt="offer"
        width={773} height={687} 
        className="object-contain w-full"/>
      </div>

      <div className='flex flex-1 flex-col'>
        <h2 className='font-palanquin text-4xl capitalize font-bold lg:max-w-lg'>
          <span className='text-coral-red'>Special</span> Offer
        </h2>
          <p className='mt-4 lg:max-w-lg info-text'>
            Ensuring premium comfort and style, our meticulously crafted footware is designed to elevate your experience, providing you with unmathced quality, innovation, and a touch of elegance.
          </p>
          <p className='mt-6 lg:max-w-lg info-text'>
            Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.
          </p>
          <div className="mt-11 flex flex-wrap gap-4">
              <Button label="Shop Now"
                iconURL={arrowRight} />
              <Button
                label="Learn More"
                backgroundColor="bg-white"
                borderColor="border-slate-gray"
                textColor="text-slate-gray" />
          </div>
      </div>
    </section>
  )
}

export default SpecialOffer