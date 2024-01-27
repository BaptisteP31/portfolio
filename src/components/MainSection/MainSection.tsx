import './MainSection.css';
import IMAGES from './assets/images/images';
import { BasicSection } from '../BasicSection/BasicSection';

export function MainSection() {
    return (
        <>
            <BasicSection className='main-section container'

            components={[
                <div className='main-section-left'>
                    <h1>
                        paqueriaud <br/>
                        baptiste
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae justo sed urna scelerisque volutpat. Sed vel urna ut nisl placerat aliquam. Donec vitae lectus sit amet magna aliquet convallis. Sed vitae justo sed urna scelerisque volutpat. Sed vel urna ut nisl placerat aliquam. Donec vitae lectus sit amet magna aliquet convallis.
                    </p>
                </div>,
                
                <div className='main-section-right container'>
                    <img src={IMAGES.rightDecoration} alt='right-decoration'/>
                </div>
            ]}
            />

        </>
    )
}