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
                        const {_id, icon, details} = cElm
                        return (
                            <>
                            <div className="hmbdycrd" key={_id}>
                                <div><img className="hmdtaicn" src={icon} alt="" /></div>
                                <div className="hmdtadtls"><span>{details}</span></div>
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
