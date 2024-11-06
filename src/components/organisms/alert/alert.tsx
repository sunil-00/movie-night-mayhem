import React from 'react';

interface AlertProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    children: React.ReactNode;
}

const Alert: React.FC<AlertProps> = ({ isOpen, onClose, title, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg p-4 max-w-sm w-full">
                {title && <h2 className="text-lg font-bold mb-2 font-poppins">{title}</h2>}
                <div className='font-poppins'>{children}</div>
                <div className="flex justify-end mt-4">
                    <button
                        onClick={onClose}
                        className="bg-blue-500 text-white py-2 px-4 rounded font-poppins"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Alert);
