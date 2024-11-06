import { NavBar } from '@/components'
import { LayoutSpace } from '@/types'
import React from 'react'

/**
 * @function Card
 * @returns React.JSX.Element
 * @author Sunil Dhakal
 */

const MainLayout: React.FunctionComponent<LayoutSpace.Layout> = ({ children }): React.JSX.Element => {
    return (
        <main className='flex flex-col flex-1'>
            <NavBar />
            {children}
        </main>
    )
}

export default React.memo(MainLayout)