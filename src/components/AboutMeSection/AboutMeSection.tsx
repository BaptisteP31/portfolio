import { BasicSection } from '../BasicSection/BasicSection';
import { Frame } from '../Frame/Frame';
import './AboutMeSection.css';
import IMAGES from './assets/images/images.tsx';

const aboutMeText = 'ça c\'est moi (enfin, je suis pas en noir et blanc non plus). Je vais vous éviter la lecture d\'une longue tirade shakespeareenne sur ma vie, mais si vous voulez en savoir plus sur moi, vous pouvez aller voir mon CV juste en dessous.';

export function AboutMeSection() {
    return (
        <>
            <BasicSection className='about-me-section'
                components={[
                    
                    <Frame components={[<img src={IMAGES.photoDeMoi}/>]} className='about-me-section-left' frameType='right'/>,

                    <p style={{maxWidth: '50%', margin: 'auto', textAlign: 'justify'}}
                    >
                        {aboutMeText}
                    </p>
                ]}
            />
        </>
    );
}