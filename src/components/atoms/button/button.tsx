import React from 'react';

/**
 * @function Button
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label: string;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className, ...props }) => {
    return (
        <button className={`px-4 py-2 rounded-lg ${className}`} {...props}>
            {label}
        </button>
    );
};

export default React.memo(Button);
