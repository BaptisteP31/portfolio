import { BasicSection } from '../BasicSection/BasicSection';
import { Frame } from '../Frame/Frame';
import './MyProjectsSection.css';
import { AdeVisualizer } from './Projects/AdeVisualizer/AdeVisualizer';
import { MKPJ } from './Projects/MKPJ/MKPJ';
import { MasswordPanager } from './Projects/MasswordPananger/MasswordPanager';

export function MyProjectSection() {
    return (
        <>
            <BasicSection
                components={[
                    <BasicSection
                        components={[
                            <div className='container my-projects-presentation'>
                                <h1>Mes projets</h1>
                                <p>
                                    Here are some of my projects that I have worked on. I have done some projects for school and some for myself.
                                </p>
                            </div>
                        ]}
                    />,
                    <BasicSection
                        components={[
                            <Frame
                                components={[
                                    <MKPJ />
                                ]}
                                frameType='left'
                            />]}
                    />,
                ]}
            />
            <BasicSection
                components={[

                    <BasicSection
                        components={[
                            <Frame
                                components={[
                                    <AdeVisualizer />
                                ]}
                                frameType='right'
                            />,
                            <div className='container'>
                                <MasswordPanager />
                            </div>
                        ]}
                    />
                ]}
            />
        </>
    )
}