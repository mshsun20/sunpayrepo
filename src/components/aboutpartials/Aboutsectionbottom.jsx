import React from 'react'
import { abtsctnbtmdta } from './Abtdata'
import { Button } from '@material-ui/core'

const Aboutsectionbottom = () => {
    return (
        <>
        <div>
            <div className="abtbtmpht"></div>
            <div className="abtbtminf">
                <div className="abtbtmtips"><span>--support in any languages</span></div>
                <div className="abtbtmhd"><span>World class support is available 24/7</span></div>
                <div className="abtbtmbdy">
                    {
                        abtsctnbtmdta.map(cElm => {
                            const {id, title, details} = cElm
                            return (
                                <>
                                <div key={id}>
                                    <div><small>{id}</small></div>
                                    <div>
                                        <div>{title}</div>
                                        <div>{details}</div>
                                    </div>
                                </div>
                                </>
                            )
                        })
                    }
                </div>
                <div className="abttpbtn"><Button className="btn">learn more</Button></div>
            </div>
        </div>
        </>
    )
}

export default Aboutsectionbottom
