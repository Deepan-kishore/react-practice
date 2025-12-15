import React from 'react';
import Three from './Three';

interface TwoProps {
    // Add your props here
}

const Two: React.FC<TwoProps> = () => {
    return (
        <div>
            <h2>Two Component</h2>
            <Three />
        </div>
    );
};

export default Two;