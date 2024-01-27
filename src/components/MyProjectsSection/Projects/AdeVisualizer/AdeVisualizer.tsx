import './AdeVisualizer.css';
import IMAGES from './assets/images';

export function AdeVisualizer() {
    return (
        <div className='container project-container'>
            <img src={IMAGES.AdeBanner} alt='MKPJ' />
            <h1>ADE Visualizer</h1>
            <p>
                ADE Visualizer est un projet d'étude visant à créer un outil permettant de visualiser la répartition des volumes horaires des professeurs de l'Université Aix-Marseille.
            </p>
        </div>
    )
}