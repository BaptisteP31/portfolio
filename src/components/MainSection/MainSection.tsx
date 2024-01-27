import './MainSection.css';
import IMAGES from './assets/images/images';
import { BasicSection } from '../BasicSection/BasicSection';

export function MainSection() {
    return (
        <>
            <BasicSection className='main-section'

            leftComponent={
                <>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eu nunc. Donec euismod, nisl eget ultricies aliquam, nunc nisl aliquet nunc, eget aliquam nisl nunc eu nunc.</p>

                    <h1>Paqueriaud <br/>
                    Baptiste
                    </h1>                
                </>
            }
            
            rightComponent = {
                <img src={IMAGES.rightDecoration} alt='Main section'/>
            } 
        
            />

        </>
    )
}