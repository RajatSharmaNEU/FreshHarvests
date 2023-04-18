import React, { Component } from 'react';
import appleStoreBadge from "../../../../images/appleStoreBadge.png";
import playStoreBadge from "../../../../images/playStoreBadge.png";
import "./Download.scss";

export class Download extends Component {
    render() {
        return (
            <section id="download">
                <div className="scrollcontainer">
                    <div className="scrollcontent">
                        <div className='download-box'>
                            <h1 style={{ marginBottom: 0 }}>Get it now</h1>
                            <p>Available on all native App Store</p>
                            <div className="img-container">
                                <img alt="apple store" style={{ margin: 'none' }} src={appleStoreBadge} />&nbsp;&nbsp;
                                <img alt="play store" style={{ margin: 'none' }} src={playStoreBadge} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Download