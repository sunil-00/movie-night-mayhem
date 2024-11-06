import React from 'react';

/**
 * @function Input
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string;
    className?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, className, ...props }) => {
    return (
        <input
            placeholder={placeholder}
            className={`px-4 py-2 rounded-lg text-black ${className}`}
            {...props}
        />
    );
};

export default React.memo(Input);
