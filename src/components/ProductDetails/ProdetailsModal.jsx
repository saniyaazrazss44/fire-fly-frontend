import React, { useEffect, useState } from 'react'
import closeDetailsIcon from '../../assets/img/icons/close-details.png'
import '../../assets/css/ProdetailsModal.css'
import Modal from 'react-modal';
import ProdImage from '../../assets/img/images/product-main-img.png'
import ProdImage1 from '../../assets/img/images/prodImg-1.png'
import ProdImage2 from '../../assets/img/images/prodImg-2.png'
import ProdImage3 from '../../assets/img/images/prodImg-3.png'
import ProdImage4 from '../../assets/img/images/prodImg-4.png'
import PartitionImg from '../../assets/img/images/partition.png'
import contentLogo from '../../assets/img/icons/contentLogo.png'
import sampleData from '../../utils/sampleData';

const ProdetailsModal = ({ prodId, closeModal, modalIsOpen }) => {

    const [customStyles, setCustomStyles] = useState({
        overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.85)',
            zIndex: 1000
        },
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#ffffff',
            width: '80%',
            borderRadius: '0px',
            fontFamily: 'Roboto',
            overflow: 'hidden',
            zIndex: 20,
        },
    })

    const [mainImgSrc, setMainImgSrc] = useState('');
    const [prodDetails, setProdDetails] = useState([])
    const imgVal = ProdImage
    const images = [ProdImage1, ProdImage2, ProdImage3, ProdImage4]

    useEffect(() => {
        const handleSize = () => {
            if (window.innerWidth <= 768) {
                setCustomStyles({
                    ...customStyles, content: {
                        ...customStyles.content,
                        width: '80%',
                        height: '90%'
                    }
                })

            } else {
                setCustomStyles({
                    ...customStyles, content: {
                        ...customStyles.content,
                        width: '80%',
                        height: '80%'
                    }
                })
            }

        }
        window.addEventListener('resize', handleSize);
        handleSize()

        return () => {
            window.removeEventListener('resize', handleSize);
        };
    }, [])

    useEffect(() => {
        if (imgVal) {
            setMainImgSrc(imgVal)
        }
    }, [imgVal])

    useEffect(() => {
        if (prodId) {
            const product = sampleData.find(item => item.id === prodId);
            setProdDetails(product);
        }
    }, [])

    const handleImgClick = (newImg) => {
        setMainImgSrc(newImg)
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Product details"
            >
                {prodDetails ? (

                    <div className='w-full h-full prod-modal-container flex flex-col sm:flex-row items-start justify-between gap-4'>
                        <div className='w-full sm:w-3/5 h-full flex flex-col justify-between gap-4'>
                            <button className='cursor-pointer flex sm:hidden justify-end items-center' onClick={closeModal}>
                                <img className='w-5' src={closeDetailsIcon} alt="image" />
                            </button>
                            <div className='w-full h-full sm:h-96 flex'>
                                <img className='w-full' src={mainImgSrc} alt="image" />
                            </div>

                            <div className='w-full grid grid-cols-4 gap-4'>
                                {images.map((imgSrc, index) => (
                                    <div key={index} className='flex items-center prodImg-container' onClick={() => handleImgClick(imgSrc)}>
                                        <img className='w-full h-full' src={imgSrc} alt="image" />
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='w-full sm:w-2/5 h-full flex flex-col justify-between gap-4 overflow-y-auto'>
                            <div className='h-full'>
                                <div className='flex items-center justify-between gap-4 pb-4'>
                                    <h1 className='roboto-medium text-xl'>{prodDetails.title}</h1>
                                    <button className='cursor-pointer hidden sm:flex justify-end items-center' onClick={closeModal}>
                                        <img className='w-5' src={closeDetailsIcon} alt="image" />
                                    </button>
                                </div>
                                <div className='pt-2 pb-4 flex flex-col items-start gap-1'>
                                    <h3 className='roboto-regular'>MRP&nbsp;:</h3>
                                    <h1 className='text-xl roboto-bold'>{prodDetails.price} /-</h1>
                                </div>

                                <div>
                                    <div className='flex items-center'>
                                        <img className='w-full h-full' src={PartitionImg} alt="image" />
                                    </div>

                                    <div className='py-4 prod-description'>
                                        <h3 className='pb-2 text-sm roboto-medium'>
                                            Product Description&nbsp;:
                                        </h3>
                                        <p className='text-sm roboto-regular'>
                                            {prodDetails.prod_desc}
                                        </p>
                                    </div>

                                    <div className='flex items-center'>
                                        <img className='w-full h-full' src={PartitionImg} alt="image" />
                                    </div>
                                </div>

                                <div className='py-4 prod-content'>
                                    <h3 className='pb-2 text-sm roboto-medium'>
                                        Product Contents&nbsp;:
                                    </h3>
                                    <ul className='prod-list text-sm roboto-regular flex flex-col gap-2'>
                                        {prodDetails.prod_content?.map((proditem, idx) => (
                                            <li key={idx}>
                                                <img src={contentLogo} alt="img" />
                                                <p>{proditem.content}</p>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                            </div>

                            <div className='relative -bottom-40 sm:bottom-0 w-full flex justify-end btnPurchase'>
                                <button className='w-1/2 flex items-center justify-center px-8 py-3 roboto-bold'>PURCHASE</button>
                            </div>

                        </div>
                    </div>
                ) : (
                    <div>Product details not available</div>
                )}

            </Modal>
        </div>
    )
}

export default ProdetailsModal