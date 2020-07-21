import React from 'react'
import Navbar from './navbar';
import Background from './back.jpg'
import Image from './my.jpg'
import Typist from 'react-typist';
const MainGrid = () => {
    return (
    <div
        data-aos="fade-right"
        data-aos-offset="200"
        data-aos-delay="50"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="false"
        data-aos-anchor-placement="top-center"
    >
        <div style={{backgroundImage:`url(${Background})`,
            backgroundRepeat:'no-repeat',
            backgroundSize:'100%'
    }}>
            
            <Navbar />
        <div className="container">
            <div className="row mt-5">
                <div className="col mt-5">
                    <div 
                    data-aos="zoom-out"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    data-aos-anchor-placement="top-center"
                    >
                    <img width="20%" className="img-responsive shadow p-3 mb-5 bg-white rounded" src={Image} alt="develper" />
                    </div>
                    <Typist>
                    <p className="h1 mt-5 text-dark"> Full Stack Developer </p>
                    <p> I am Mohsin Ali Full stack developer in
                    this technologies <br /> React.js, MongoDb, Express.js ,Node.js
                </p></Typist>
                </div>
            </div>
            
        </div>
        </div>
    </div>
    )
}

export default MainGrid