import React, { useState, useEffect } from 'react'
import hmbdydta from './Hmbdydata'

const Homebody = () => {
    const [dtaApi, setdtaApi] = useState([])

    useEffect(() => {
        setdtaApi(hmbdydta)
    }, [])

    return (
        <>
        <div className="hmbdy">
            <div className="hmbdybck" />
            <div className="hmbdycnt">
                <div className="hmbdyhd">
                    <span>how does it work</span>
                </div>
                <div className="hmbdydet">
                    {dtaApi.map((cElm) => {
                        const {dtaid, icon, heading, details} = cElm
                        return (
                            <>
                            <div className="hmbdycrd" key={dtaid}>
                                <div className="hmdtaicnsect"><i className={`hmdtaicn ${icon}`}></i></div>
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
