import React from "react";
import { Link } from 'react-router-dom';
import { navItems } from "@/data";

/**
 * @function NavItems
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const NavItems: React.FC = (): React.JSX.Element => {
    return (
        <div className="flex space-x-4">
            {navItems.map((item) => (
                <Link key={item.name} to={item.path} className="hover:text-gray-400">
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

export default React.memo(NavItems)