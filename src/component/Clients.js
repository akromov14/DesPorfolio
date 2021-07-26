import React from 'react';
import mitti1 from './header/mitti1.png';
import Microsoft from './microsoft.png';
import Shar from './shar.png';
import Medium from './medium.png';
import Shop from './shop.png';

export default function Clients() {
    return (
        <div className="Clients">
            <div className="Clients2">
                <h3>Clients</h3>
            </div>
            <h1>Big Deal<br /> With</h1>
            <div>
                <div className="mitti mitti1">
                    <img src={mitti1} alt="" />
                    <h4 className="Slack2">Slack</h4>
                </div>
                <div className="mitti mitti2">
                    <img src={Medium} alt="" />
                    <h4>Medium</h4>
                </div>
                <div className="mitti mitti3">
                    <img src={Microsoft} alt="" />
                    <h4>Microsoft</h4>
                </div>
                <div className="mitti mitti4">
                    <img src={Shar} alt="" />
                    <h4 className="Slack">Zeplin</h4>
                </div>
                <div className="mitti mitti5">
                    <img src={Shop} alt="" />
                    <h4>Shopifiy</h4>
                </div>
            </div>
        </div>
    )
}
