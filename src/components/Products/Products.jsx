import React, { useState } from 'react'
import '../../assets/css/Products.css'
import partLayoutImg from '../../assets/img/images/partFrameImg.png'
import ProdetailsModal from '../ProductDetails/ProdetailsModal';
import ProdGridImg from '../../assets/img/images/prod-grid-img.png'
import sampleData from '../../utils/sampleData';

const Products = () => {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [id, setId] = useState(null);

  const handleOpenProdModal = (itemId) => {
    setId(itemId)
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <div className='px-8 sm:px-28 pt-12'>
        <div className='w-full flex items-center justify-between gap-4'>
          <div className='w-full'>
            <img className='w-48 sm:w-full' src={partLayoutImg} alt="image" />
          </div>
          <div className='w-full roboto-black text-xl sm:text-3xl'>
            <h1 className='w-full product-title text-center'>Our products</h1>
          </div>
          <div className='w-full'>
            <img className='w-48 sm:w-full' src={partLayoutImg} alt="image" />
          </div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full pt-10 pb-20 gap-10'>
          {sampleData?.map((prod, index) => (
            <div key={index} className='w-full prod-grid p-2 flex flex-col gap-2 items-center justify-center'>
              <div className='h-72 w-full'>
                <img className='w-full h-full' src={ProdGridImg} alt="image" />
              </div>

              <div className='w-full pt-4 flex flex-col sm:flex-row justify-between gap-2 items-center btnQuickView'>
                <h3 className='roboto-bold text-lg'>{prod.title}</h3>
                <button className='roboto-bold text-white px-8 py-2 rounded-sm' onClick={() => handleOpenProdModal(prod.id)}>QUICK VIEW</button>
              </div>
            </div>
          ))}
        </div>

        {
          modalIsOpen && (
            <ProdetailsModal prodId={id} modalIsOpen={modalIsOpen} closeModal={closeModal} />
          )
        }
      </div>
    </div>
  )
}

export default Products