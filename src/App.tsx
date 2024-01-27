import { MainSection } from "./components/MainSection/MainSection.tsx";
import { Navabar } from "./components/Navbar/Navbar.tsx";

const App = () => {
    return (
        <div>
            <Navabar/>
            <MainSection/>
            <div style={{height: "2000px"}}></div>
        </div>
    );
}

export default App;