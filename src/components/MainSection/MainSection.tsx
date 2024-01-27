import './MainSection.css';
import IMAGES from './assets/images/images';
import { BasicSection } from '../BasicSection/BasicSection';

const mainText = 'Bienvenue sur mon portfolio, je suis un développeur web fullstack junior. Je suis passionné par le développement back-end et depuis peu par le développement front-end. Je suis actuellement en formation dans l\'IUT d\'Aix-Marseille en BUT Informatique.';

export function MainSection() {
    return (
        <>
            <BasicSection className='main-section container'

                components={[
                    <div className='main-section-left'>
                        <h1>
                            paqueriaud <br />
                            baptiste
                        </h1>
                        <p>
                            {mainText}
                        </p>
                    </div>,

                    <div className='main-section-right container'>
                        <img src={IMAGES.rightDecoration} alt='right-decoration' />
                    </div>
                ]}
            />

        </>
    )
}