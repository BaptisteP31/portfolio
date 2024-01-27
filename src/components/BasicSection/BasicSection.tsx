import './BasicSection.css';
import React from 'react';
import { Separator } from '../Separator/Separator';

export function BasicSection(content: {components:React.JSX.Element[], className?: string}) {
    return (
        <>
        <section>
            <div className={`basic-section ${content.className}`}>
                {content.components}
            </div>
            <Separator/>
        </section>
        </>
    )
}