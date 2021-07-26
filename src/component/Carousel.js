import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import Bizz from './header/bizz.jpg'
import Bizz2 from './header/bizz2.jpg'
import Bizz3 from './header/bizz3.jpg'
import Bizz4 from './header/bizz4.jpg'
import Bizz5 from './header/bizz5.jpg'


const items = [
    <div className="item" data-value="1"><img src={Bizz} alt="" className="bizz" /></div>,
    <div className="item" data-value="2"><img src={Bizz2} alt="" className="bizz" /></div>,
    <div className="item" data-value="3"><img src={Bizz3} alt="" className="bizz" /></div>,
    <div className="item" data-value="4"><img src={Bizz4} alt="" className="bizz" /></div>,
    <div className="item" data-value="5"><img src={Bizz5} alt="" className="bizz" /></div>,
];

const Carousel = () => (
    <div className="Carousel">
        <AliceCarousel
        animationType="fadeout" 
        animationDuration={800}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
    />
    </div>
);

export default Carousel ;