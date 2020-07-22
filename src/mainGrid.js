import React from 'react'
import Background from './back.jpg'
import Image from './my.jpg'
import Typist from 'react-typist';
const MainGrid = () => {
    return (
        <div style={{width:'100%'}}>
    <div
        data-aos="slide-down"
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
        <div className="container">
            <div className="row mt-5">
                <div className="col mt-5">
                    <div 
                    data-aos="slide-up"
                    data-aos-offset="200"
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out"
                    data-aos-mirror="true"
                    data-aos-once="false"
                    >
                    <img width="20%" className="img-responsive shadow p-3 mb-5 bg-white rounded" src={Image} alt="develper" />
                    </div>
                    <div style={{height:200}}>
                    <Typist>
                    <p className="h1 mt-5 text-dark"> Full Stack Developer </p>
                    <p> I am Mohsin Ali Full stack developer in
                    this technologies <br /> React.js, MongoDb, Express.js ,Node.js
                    </p>
                </Typist>
                </div>
                </div>
            </div>
            
        </div>
        </div>
    </div>
    </div>
    )
}

export default MainGrid