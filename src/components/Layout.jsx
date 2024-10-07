import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Layout({ children }) {
    return (
        <>

            <Header />
            <hr className="h-px mb-10 h-0.5  border-0 bg-our-black" />
            {children}
            <Footer />
        </>

    )
}

export default Layout