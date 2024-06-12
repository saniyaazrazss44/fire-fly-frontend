import React from 'react'
import '../../assets/css/About.css'
import partLayoutImg from '../../assets/img/images/partFrameImg.png'
import sparkleImg from '../../assets/img/images/sparkleImg.png'

const About = () => {
  return (
    <div className=''>
      <div className='px-8 sm:px-28 pt-16'>
        <div className='w-full flex items-center justify-between gap-4 pb-10 sm:pb-0'>
          <div className='w-full'>
            <img className='w-48 sm:w-full' src={partLayoutImg} alt="image" />
          </div>
          <div className='w-full roboto-black text-xl sm:text-3xl'>
            <h1 className='w-full about-title text-center'>About</h1>
          </div>
          <div className='w-full'>
            <img className='w-48 sm:w-full' src={partLayoutImg} alt="image" />
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <div className='flex items-center'>
            <img src={sparkleImg} alt="image" />
          </div>

          <div className='flex flex-col items-center justify-center w-full py-7 gap-4'>
            <p className=' text-center roboto-regular leading-9'>
              Our products are crafted exclusively from the dreams and screams of young kids who wanted to show their mastery in their chosen fields, but were directed towards a factory for daily wages. Each cracker bursts brighter than their lost smiles, and can be heard louder than their cries for miles. Buy them, burst them, brag about them.
            </p>
            <p className='text-center roboto-bold leading-9'>
              The choice is yours. Because they don't have one.
            </p>
          </div>

          <div className='flex items-center'>
            <img src={sparkleImg} alt="image" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default About