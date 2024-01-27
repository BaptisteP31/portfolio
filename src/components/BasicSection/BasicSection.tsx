import './BasicSection.css';
import React from 'react';
import { Separator } from '../Separator/Separator';

export function BasicSection(content: {leftComponent: React.JSX.Element, rightComponent: React.JSX.Element, className?: string}) {
    return (
        <>
            <div className='container basic-section'>
                <div className='left'>
                    {content.leftComponent}
                </div>
                <div className='right'>
                    {content.rightComponent}
                </div>
            </div>
            <Separator/>
        </>
    )
}