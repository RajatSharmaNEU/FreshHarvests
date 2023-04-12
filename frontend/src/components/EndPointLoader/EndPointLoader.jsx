import React from 'react';
import {bool, number} from "prop-types";

const EndPointLoader = (props) => {
    const {showLoader, uploadPercentage} = props;

    return (
        <div>
            {
                showLoader === true ?
                    <div className="overlay">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 text-center">
                                    <p className="secondaryColor fontBoldSmall">
                                        Load<span style={{color: "white"}}>ing...</span>
                                    </p>
                                    <div className="progress form-group" style={{width: "30%", margin: "auto"}}>
                                        <div className="progress-bar progress-bar-striped" role="progressbar"
                                             style={{width: `${uploadPercentage}%`, backgroundColor: "#0e76a8"}}>
                                        </div>
                                    </div>
                                    <span style={{color: "#0e76a8", fontSize: "130%"}}>{uploadPercentage}<span
                                        style={{color: "white"}}>%</span></span>
                                </div>
                            </div>
                        </div>
                    </div> : null
            }
        </div>
    )
}

EndPointLoader.propTypes = {
    showLoader: bool,
    uploadPercentage: number
}

export default React.memo(EndPointLoader)