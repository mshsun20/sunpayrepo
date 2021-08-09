import React from 'react'
import Homecaption from './Homecaption'
import Homephotos from './Homephotos'

const Homeheader = () => {
    return (
        <>
        <div className="hmhdr">
            <div className="hmhdrcnt">
                <Homecaption />
                <Homephotos />
            </div>
        </div>
        </>
    )
}

export default Homeheader
