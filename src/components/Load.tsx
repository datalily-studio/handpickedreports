import React from 'react';
import Lottie from 'lottie-react';
import dotWalkcycleAnimation from '../dot_walkcycle.json';
import '../styles/Load.css';

const Load: React.FC = () => {
    return (
        <div className="load-container">
            <div className="lottie-wrapper">
                <Lottie 
                    animationData={dotWalkcycleAnimation}
                    loop={true}
                    autoplay={true}
                    className="lottie-animation"
                />
            </div>
        </div>
    );
};

export default Load;
