import React from 'react'
import { abtsctntpdta } from './Abtdata'
import { Button } from '@material-ui/core'

const Aboutsectiontop = () => {
    return (
        <>
        <div>
            <div className="abttppht"></div>
            <div className="abttpinf">
                <div className="abttptips"><span>--available @ google play store and ios app store only</span></div>
                <div className="abttphd"><span>How to use the App?</span></div>
                <div className="abttpbdy">
                    {
                        abtsctntpdta.map(cElm => {
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

export default Aboutsectiontop
