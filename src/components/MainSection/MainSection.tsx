import './MainSection.css';
import IMAGES from './assets/images/images';

export function MainSection() {
    return (
        <section className='main-section'>
            <div className='container main-section'>
                <div className='left'>
                    <p>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt 
                    ut labore et dolore magna aliqua. 
                    </p>
                    <h1>
                        Paqueriaud <br/>
                        Baptiste
                    </h1>
                </div>
                <div className='right'>
                    <img src={IMAGES.rightDecoration} alt='right_decoration' />
                </div>
            </div>
        </section>
    )
}