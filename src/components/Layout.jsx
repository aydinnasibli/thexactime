import React from 'react'
import Header from './Header'
import Footer from './Footer'
function Layout({ children }) {
    return (
        <>

            <Header />
            <body className="mx-auto flex  items-center justify-center p-6 lg:px-8">
                {children}
            </body>

            <Footer />
        </>

    )
}

export default Layout