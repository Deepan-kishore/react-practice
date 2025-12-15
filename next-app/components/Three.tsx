import React, { useContext } from 'react';
import { MyContext } from './Ones';

interface TwoProps {
    // Add your props here
}

const Three: React.FC<TwoProps> = () => {

    const {theme,toggleTheme} = useContext(MyContext)
    return (
        <div>
            <h2>Three Component</h2>
            <button onClick={() => toggleTheme()}>toggle theme</button>
           <h5> Reading theme from childer : {theme}</h5>
        </div>
    );
};

export default Three;