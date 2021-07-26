import React from 'react';
import Homan from './human.png';
import Oddiy from './oddiy.png';

export default function Header() {
    return (
        <div>
            <div className="header">
                <nav>
                   <div className="d-flex">
                        <div className="aalar">
                            <h2>A</h2>
                        </div>
                        <div className="mt-3">
                            <ul>
                                <li><a href="#"><strong className="text-dark">About</strong></a></li>
                                <li><a href="#"><b className="text-secondary">Services</b></a></li>
                                <li><a href="#"><b className="text-secondary">Works</b></a></li>
                                <li><a href="#"><b className="text-secondary">Blog</b></a></li>
                            </ul>
                        </div>
                   </div>
                   <div>
                       <button className="btn"><i class="fas fa-bars"></i></button>
                   </div>
                </nav>
                <div class="row text-start mt-5">
                    <div className="col-lg-6 adam">
                        <div className="adam2">
                            <p>Hello,</p>
                            <h1>Adam Zakob</h1>
                            <p>a freelance UX Designer</p>
                            <button className="talk">Let's Talk</button>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={Homan} alt="" className="human" />
                    </div>
                </div>
                <div className="Services">
                   <div className="Services2">
                       <p>Services</p>
                   </div>
                   <div>
                       <h1><b>What actually<br/> I love to do</b></h1>
                   </div>
                   <div class="row">
                       <div className="col-lg-4">
                           <div>
                               <div className="d-flex">
                                  <div>
                                    <img src={Oddiy} alt="" className="image2"/>
                                    <i class="fas fa-mobile-alt"></i>
                                  </div>
                                  <h3 className="uxxx">UX Research</h3>
                               </div>
                               <p className="Neque">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Neque odit fuga aspernatur recusandae hic natus quae.</p>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div>
                               <div className="d-flex">
                                  <div>
                                    <img src={Oddiy} alt="" className="image2"/>
                                    <i class="fas fa-wifi"></i>
                                  </div>
                                  <h3 className="uxxx">UX Research</h3>
                               </div>
                               <p className="Neque">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Neque odit fuga aspernatur recusandae hic natus quae.</p>
                           </div>
                       </div>
                       <div className="col-lg-4">
                           <div>
                               <div className="d-flex">
                                  <div>
                                    <img src={Oddiy} alt="" className="image2"/>
                                    <i class="far fa-address-card"></i>
                                  </div>
                                  <h3 className="uxxx">UX Research</h3>
                               </div>
                               <p className="Neque">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Neque odit fuga aspernatur recusandae hic natus quae.</p>
                           </div>
                       </div>
                   </div>
                </div>
            </div>
        </div>
    )
}
