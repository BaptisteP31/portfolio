import './MasswordPanager.css';
import IMAGES from './assets/images';

export function MasswordPanager() {
    return (
        <div className='container project-container'>
            <img src={IMAGES.logoMP} alt='MKPJ' />
            <h1>
                Massword
                Panager
            </h1>
            <p>
                MKPJ aka Make Project est un project personnel dont l'objectif est la simplification de la création de projet en C++.
            </p>
        </div>
    )
}