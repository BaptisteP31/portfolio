import { createRoot } from 'react-dom/client';
import App from './App.tsx'
import './main.css';

function initializeReactApp() {
    const appContainer = document.getElementById('root');
    if(!appContainer) throw new Error("Well, i'm gonna hang myself")
    const root  = createRoot(appContainer);
    root.render(<App/>);
}

initializeReactApp();