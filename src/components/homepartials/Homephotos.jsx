import React from 'react'
import spay1 from '../../images/spay1.jpg'
import spay2 from '../../images/spay2.jpg'

const Homephotos = () => {
    return (
        <>
        <div className="hmphts">
            <div className="hmphtgrp">
                <img className="pht2" src={spay2} alt="s-pay 02" />
                <img className="pht1" src={spay1} alt="s-pay 01" />
            </div>
        </div>
        </>
    )
}

export default Homephotos
