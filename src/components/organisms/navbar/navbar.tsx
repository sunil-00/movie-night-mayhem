
import React from 'react';
import { Brand, NavItem, Search } from '@/components';

/**
 * @function NavItems
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const Navbar: React.FC = (): React.JSX.Element => {
    return (
        <nav className="flex flex-1 flex-col bg-gray-800 text-white justify-between items-center p-4 sm:flex-row gap-4">
            <Brand />
            <div className="flex items-center space-x-4">
                <NavItem />
                <Search />
            </div>
        </nav>
    );
};

export default React.memo(Navbar);
