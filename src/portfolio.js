import React from 'react'
import Covid from './Capture.PNG'
import Expense from './expense.PNG'
import Shoe from './shoeshop.PNG'

const Portfolio = () => {
    
    return (
        <div  style={{width:'100%',backgroundImage: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'}}>
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
                        <p className="display-4 ">Portfolio</p>
                        <p>Some of my latest work</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded" >
                            <img className="card-img-top" src={Covid} alt="covid" />
                            <div className="card-body">
                                <h5 className="card-title">Covid Tracker</h5>
                                <p className="card-text">Covid19 tracker made with material ui,states management and get Live data from API.</p>
                                <a href="http://covid-19-cases-tracker.surge.sh/" className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded" >
                            <img className="card-img-top" src={Expense} alt="covid" />
                            <div className="card-body">
                                <h5 className="card-title">Expense Tracker</h5>
                                <p className="card-text">Expense tracker made Context API for global store And Redux for State management.</p>
                                <a href="http://expense_app_tracker.surge.sh/" className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card shadow-sm p-3 mb-5 bg-white rounded" >
                            <img className="card-img-top" src={Shoe} alt="Covid" />
                            <div className="card-body">
                                <h5 className="card-title">Shoe Shop</h5>
                                <p className="card-text">Shoe Shop made with React Router Dom,Context API ,Redux and simple design.</p>
                                <a href="http://shoeshop.surge.sh/product" className="btn btn-primary">Demo</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Portfolio