import { BasicSection } from '../BasicSection/BasicSection';
import { Frame } from '../Frame/Frame';
import './AboutMeSection.css';
import IMAGES from './assets/images/images.tsx';

export function AboutMeSection() {
    return (
        <>
            <BasicSection className='about-me-section'
                components={[
                    
                    <Frame components={[<img src={IMAGES.photoDeMoi}/>]} className='about-me-section-left' frameType='right'/>,

                    <p style={{maxWidth: '50%', margin: 'auto', textAlign: 'justify'}}
                    >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo sed urna scelerisque volutpat. Sed vel urna ut nisl placerat aliquam. Donec vitae lectus sit amet magna aliquet convallis. Sed vitae justo sed urna scelerisque volutpat. Sed vel urna ut nisl placerat aliquam. Donec vitae lectus sit amet magna aliquet convallis.</p>
                ]}
            />
        </>
    );
}