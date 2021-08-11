import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-web';
import './anmi.css';


function Anmi() {
    const container = useRef(null);

    useEffect(() =>{
    Lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: require('./anmi1.json')

    })

    }, []) 
        return (
        <div className="Anmi">
            <div className="container" ref={container}></div>
        </div>
    );
}

export default Anmi;