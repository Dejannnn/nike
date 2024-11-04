import React from 'react'
import { arrowRight } from '../assets/icons';
import Button from '../components/Button/Button';
import { offer } from '../assets/images';
const SpecialOffer = () => {
  return (
    <section
    id=""
    className="flex justify-wrap items-start max-lg:flex-col-reverse gap-10 w-fill max-container "
  >
    <div className='flex-1'>
      <img src={offer} width={773} height={687} className='object-contain w-full'/>
    </div>
    <div className="flex-1 flex-col">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize lg:max-w-lg">
          <span className="text-coral-red"> Special </span> Offer
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Discover stylish Nike arrivas, quality comfort and inoation for your
          active life.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and experience ensuers your satisfaction
        </p>
      </div>
      <div className="mt-11 flex gap-4">
        <Button label="View now" iconUrl={arrowRight} />
        <Button label="Learn more" iconUrl={arrowRight} backgroundColor="bg-white" borderColor='border-color-gray' textColor='text-black'/>

      </div>
    </div>
  </section>
  )
}

export default SpecialOffer