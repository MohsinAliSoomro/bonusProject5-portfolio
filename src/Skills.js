import React from 'react'
import {CodeIcon,DeviceMobileIcon,ToolsIcon} from '@primer/octicons-react'

const Skill = () => {
    return (
        <div className="">
    <div 
        data-aos="slide-up"
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
                <div className="col-sm-12 col-md-4 col-lg-4">
                    <div className="text-center" >
                        <CodeIcon size={128} />
                        <p  className="h3">Web Application Development</p>
                        <p>Fast, responsive and engaging apps that bring your ideas to life.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="text-center" >
                <DeviceMobileIcon size={124} />
                        <p  className="h3">Mobile Application Development</p>
                        <p>Cross-platform apps built with efficiency and speed for Android and iOS at once.</p>
                    </div>
                </div>
                <div className="col-sm-12 col-md-4 col-lg-4">
                <div className="text-center" >
                <ToolsIcon size={128} />
                        <p  className="h3">API Integration & Development</p>
                        <p>REST and SOAP API integration.
REST API development with Node.js and Loopback.</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    )
}

export default Skill