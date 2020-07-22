import React from 'react'
import facebook from './icon/f.png';
import instagram from './icon/i.png';
import linkedin from './icon/l.png';
import github from './icon/github.png';
import bootstrap from './img/b.png'
import css from './img/css.png'
import html from './img/html.png'
import js from './img/js.png'
import react from './img/react.png'
import redux from './img/Redux.png'
import npm from './img/npm.png'
import node from './img/node.png'
import express from './img/Expressjs.png'
import mongo from './img/mongo.png'
import ms from './img/ms.png'
const Portfolio = () => {

    return (
        <div style={{ width: '100%' }}>
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
                                <p>I've always had a passion for technology and product development.
                                I have 1+ years of development experience building fullstack products from scratch,
developing and integrating APIs, working with a variety of databases. </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                            <div className="text-center">
                                <p className="h5">Below you'll find a list of some of my skills</p>
                            </div>
                            <div className="text-center mb-5">
                                <p className="h5 display-4">FRONT-END</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 text-center">
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={html} alt="html" />
                        </div>
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="70" src={css} alt="css" />
                        </div>
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={js} alt="js" />
                        </div>
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={bootstrap} alt="bootstrap" />
                        </div>
                    </div>
                    <div className="row mb-5 text-center">
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={react} alt="react" />
                        </div>
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={redux} alt="redux" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                            <div className="text-center mb-5">
                                <p className="h5 display-4">SERVER</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 text-center">
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={npm} alt="npm" />
                        </div>
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={node} alt="node" />
                        </div>
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={express} alt="express" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 mt-5">
                            <div className="text-center mb-5">
                                <p className="h5 display-4">DATABASES</p>
                            </div>
                        </div>
                    </div>
                    <div className="row mb-5 text-center">
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={mongo} alt="mongo" />
                        </div>
                        <div className="col-sm-1 col-md-3 col-lg-3">
                            <img width="100" src={ms} alt="node" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio