import React from 'react';

/**
 * @function Logo
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const Logo: React.FC = (): React.JSX.Element => {
    return (
        <a href="/" className="text-2xl font-semibold text-white font-poppins">
            Movie Night Mayhem
        </a>
    );
};

export default React.memo(Logo)
