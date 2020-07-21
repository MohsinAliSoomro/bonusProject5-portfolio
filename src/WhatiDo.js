import React from 'react'
import {CodeIcon} from '@primer/octicons-react'

const MainGrid = () => {
    return (
    <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
    >
        <div className="container">
            <div className="row mt-5">
                <div className="col text-center">
                    <p className="display-4 ">WHAT I DO</p>
                    <p>Things I'm skilled at and passionate about.</p>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="text-center" >
                        <CodeIcon size={128} />
                        <p  className="h1">Web Application Development</p>
                    </div>
                </div>
                <div className="col">
                <div className="text-center" >
                        <CodeIcon size={128} />
                        <p  className="h1">Web Application Development</p>
                    </div>
                </div>
                <div className="col">
                <div className="text-center" >
                        <CodeIcon size={128} />
                        <p  className="h1">Web Application Development</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    
    )
}

export default MainGrid