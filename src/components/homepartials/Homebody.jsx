import React from 'react'
import hmbdydta from './Hmbdydata'

const Homebody = () => {
    return (
        <>
        <div className="hmbdy">
            <div className="hmbdybck" />
            <div className="hmbdycnt">
                <div className="hmbdyhd">
                    <span>how does it work</span>
                </div>
                <div className="hmbdydet">
                    {hmbdydta.map((cElm) => {
                        const {dtaid, icon, heading, details} = cElm
                        return (
                            <>
                            <div className="hmbdycrd" key={dtaid}>
                                <div><img className="hmdtaicn" src={icon} alt="" /></div>
                                <div className="hmdtahdng">{heading}</div>
                                <div className="hmdtadtls">{details}</div>
                            </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}

export default Homebody
