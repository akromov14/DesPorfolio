import React from 'react'
import Web1 from './web1.jpg';
import Web2 from './web2.jpg';

export default function Portfolio() {
    return (
        <div className="portfolio">
            <div className="text-start porti">
                <h4>Portfolio</h4>
            </div>
            <div className="creative">
                <h2>All Creative<br /> Projects</h2>
                <div>
                    <a href="#" className="Explore">Explore More</a>
                   <i class="fas fa-long-arrow-alt-right"></i>
                </div>
            </div>
            <div class="row">
                <div className="col-lg-6">
                    <img src={Web1} alt="" className="web12" />
                </div>
                <div className="col-lg-6">
                    <img src={Web2} alt="" className="web12" />
                </div>
            </div>  
        </div>
    )
}
