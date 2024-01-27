import '../Projects.css';
import IMAGES from './assets/images';

export function MKPJ() {
    return (
        <div className='container project-container'>
            <img src={IMAGES.MKPJ} alt='MKPJ'/>
            <h1>MKPJ</h1>
            <p>
                MKPJ aka Make Project est un project personnel dont l'objectif est la simplification de la création de projet en C++.
            </p>
        </div>
    )
}