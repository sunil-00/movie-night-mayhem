import React from 'react';

/**
 * @function Modal
 * @param {React.ReactNode} children
 * @param {() => void} onClose
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

interface ModalProps {
    children: React.ReactNode;
    onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ children, onClose }): React.JSX.Element => {
    const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    return (
        <div
            className="absolute top-0 left-0 w-full h-full z-50 flex justify-end"
            onClick={handleOverlayClick}
        >
            <div className="bg-gray-600 rounded-lg absolute top-16 right-10 shadow-lg p-3 h-96 w-11/12 md:w-1/3">
                <button className="absolute top-1 right-10 text-white text-2xl hover:text-gray-800" onClick={onClose}>
                    &times;
                </button>
                <div className="overflow-y-auto h-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;
