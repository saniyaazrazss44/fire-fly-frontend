import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import About from '../About/About'
import Products from '../Products/Products'
import Footer from '../Footer/Footer'
import ProdetailsModal from '../ProductDetails/ProdetailsModal'

const Home = () => {
    return (
        <div className='scroll-smooth focus:scroll-auto'>
            <Navbar />
            <Main />
            <About />
            <Products />
            <ProdetailsModal />
            <Footer />
        </div>
    )
}

export default Home