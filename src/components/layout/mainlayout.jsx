import React from 'react'
import { Footer } from '../footer/footer'
import { Navibar } from '../navigation/navibar'

const Mainlayout = ({ children }) => {
    return (<>
        <Navibar />
        <div>{children}</div>
        <Footer /> </>
    )
}

export default Mainlayout