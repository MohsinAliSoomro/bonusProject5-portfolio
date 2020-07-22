import React from 'react'
import facebook from './icon/f.png';
import instagram from './icon/i.png';
import linkedin from './icon/l.png';
import github from './icon/github.png';
const Portfolio = () => {
    
    return (
        <div style={{width:'100%'}}>
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
                        <p className="display-4 ">About</p>
                        <p>Let's Break the ice little</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="text-center mb-5">
                        <p className="h1">Mohsin Ali Soomro</p>
                        <p>React | Node Js</p>
                        <a href="https://github.com/MohsinAliSoomro"><img width="30" src={github} alt="github" /></a>
                        <a href="https://web.facebook.com/profile.php?id=100004936470736"><img width="30" src={facebook} alt="facebok" /></a>
                        <a href="https://www.instagram.com/mohsinalisoomro1/"><img width="30" src={instagram} alt="ins" /></a>
                        <a href="https://www.linkedin.com/in/mohsin-ali-soomro-a4390815b/"><img width="30" src={linkedin} alt="linkdin" /></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-12 col-lg-12">
                        <div className="text-center">
                        <p>Hi there! I am a Fullstack developer specialized in React and Node.js.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Portfolio