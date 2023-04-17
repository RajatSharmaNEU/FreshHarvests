import React from 'react';
import "./Feature.scss";
import { Fade } from "react-awesome-reveal";
import featureImage from "../../../../images/featureImage.jpg";

function Feature() {
    return (
        <div>
            <section className="sec-pad-lg grdnt-yellow light" id="features">
                <div className="container-fluid">
                    <div className="row">
                        <div className="flx-container res-center-sm align-flx-center flx-off-sm row">
                            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 res-margin-sm wow  fadeInUp animated" data-wow-duration="1s" data-wow-delay=".2s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.2s', animationName: 'fadeInUp' }}>
                                <Fade left>
                                    <div className="text first-part">
                                        <h3>Create shared shopping list</h3>
                                        <div className="spce"></div>
                                        <p></p>
                                        <div className="spce"></div>
                                    </div>
                                </Fade>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 text-center wow  fadeInUp animated" data-wow-duration="1s" data-wow-delay=".4s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.4s', animationName: 'fadeInUp' }}>
                                <Fade bottom>
                                    <img className="feature-img" src={featureImage} alt="featureImage" />
                                </Fade>
                            </div>
                            <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-md-offset-1 col-sm-4">
                                <Fade right>
                                    <div className="right-dir-col wow  fadeInUp animated" data-wow-duration="1s" data-wow-delay=".6s" style={{ visibility: 'visible', animationDuration: '1s', animationDelay: '0.6s', animationName: 'fadeInUp' }}>
                                        <div className="list">
                                            <div className="feature-content">
                                                <i className="icon-md fa fa-smile-o"></i>
                                                <div className="text"><h5>Fresh Picks</h5><p>Perfect for health-conscious shoppers who prioritize wholesome, farm-to-table ingredients.</p></div>
                                            </div>
                                            <div className="spce"></div>
                                        </div>
                                        <div className="list">
                                            <div className="feature-content">
                                                <i className="icon-md fa fa-comments"></i>
                                                <div className="text"><h5>Organic & Natural</h5><p>Environmentally-friendly choices for your family.</p></div>
                                            </div>
                                            <div className="spce"></div>
                                        </div>
                                        <div className="list">
                                            <div className="feature-content">
                                                <i className="icon-md fa fa-certificate"></i>
                                                <div className="text"><h5>Seasonal Delights</h5><p>Featuring seasonal products that capture the flavors and festivities of the time of year.</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Feature