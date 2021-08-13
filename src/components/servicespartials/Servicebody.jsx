import React, { useState, useEffect } from 'react'
import { srvcdta } from './Srvcdata'

const Servicebody = () => {
    const [dtaApi, setdtaApi] = useState([])

    useEffect(() => {
        setdtaApi(srvcdta)
    }, [])

    return (
        <>
        <div className="srvcbdy">
            <div className="srvcbdybck" />
            <div className="srvcbdycnt">
                <div className="srvcbdyhd">
                    <span>how does it work</span>
                </div>
                <div className="srvcbdydet">
                    {dtaApi.map((cElm) => {
                        const {dtaid, icon, heading, details} = cElm
                        return (
                            <>
                            <div className="srvcbdycrd" key={dtaid}>
                                <div className="srvcdtaicnsect"><i className={`srvcdtaicn ${icon}`}></i></div>
                                <div className="srvcdtahdng">{heading}</div>
                                <div className="srvcdtadtls">{details}</div>
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

export default Servicebody
