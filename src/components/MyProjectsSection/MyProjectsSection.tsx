import { BasicSection } from '../BasicSection/BasicSection';
import { Frame } from '../Frame/Frame';
import './MyProjectsSection.css';
import { AdeVisualizer } from './Projects/AdeVisualizer/AdeVisualizer';
import { MKPJ } from './Projects/MKPJ/MKPJ';
import { MasswordPanager } from './Projects/MasswordPananger/MasswordPanager';

const myProjectsText = 'Rien que pour vous, voici quelques projets que j\'ai réalisé. Il y a des projets que j\'ai fait pour l\'école et d\'autres pour moi et certains sont même en cours de développement.';

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
                                    {myProjectsText}
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