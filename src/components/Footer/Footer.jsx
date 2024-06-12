import React from 'react'
import '../../assets/css/Footer.css'
import YellowPartitionImg from '../../assets/img/images/yellow-partition.png'
import OrangePartitionImg from '../../assets/img/images/partFrameImg.png'
import DecorImg from '../../assets/img/images/decor-img.png'
import InstagramIcon from '../../assets/img/icons/instagram.png'
import FacebookIcon from '../../assets/img/icons/facebook.png'
import LinkedInIcon from '../../assets/img/icons/linkedin.png'
import YoutubeIcon from '../../assets/img/icons/youtube.png'
import TwitterIcon from '../../assets/img/icons/twitter.png'

const Footer = () => {
  return (
    <div className='w-full'>

      <div className='flex items-center justify-center w-full'>
        <div className='w-full flex items-center justify-center absolute z-10'>
          <img className='w-1/2 h-2' src={OrangePartitionImg} alt="image" />
        </div>

        <div className='relative z-0'>
          <img src={YellowPartitionImg} alt="image" />
        </div>
      </div>

      <div className='w-full p-4 footer flex items-center justify-between gap-4'>
        <div className='flex items-center'>
          <img className='w-5 sm:w-10' src={DecorImg} alt="image" />
        </div>
        <div className='flex flex-col items-center justify-center footer-content'>
          <h3 className='pb-4 roboto-black text-lg'>
            Follow us on
          </h3>
          <div className='flex items-center justify-center gap-4'>
            <div className='flex items-center w-full h-full social-icons'>
              <img className='w-10' src={InstagramIcon} alt="image" />
            </div>
            <div className='flex items-center w-full h-full social-icons'>
              <img className='w-10' src={YoutubeIcon} alt="image" />
            </div>
            <div className='flex items-center w-full h-full social-icons'>
              <img className='w-10' src={TwitterIcon} alt="image" />
            </div>
            <div className='flex items-center w-full h-full social-icons'>
              <img className='w-10' src={FacebookIcon} alt="image" />
            </div>
            <div className='flex items-center w-full h-full social-icons'>
              <img className='w-10' src={LinkedInIcon} alt="image" />
            </div>

          </div>
        </div>
        <div className='flex items-center'>
          <img className='w-5 sm:w-10' src={DecorImg} alt="image" />
        </div>
      </div>

      <div>
        <img src={YellowPartitionImg} alt="image" />
      </div>
    </div>
  )
}

export default Footer