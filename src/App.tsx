import { MainSection } from "./components/MainSection/MainSection.tsx";
import { Navabar } from "./components/Navbar/Navbar.tsx";
import { Separator } from "./components/Separator/Separator.tsx";

const App = () => {
    return (
        <div>
            <Navabar/>
            <MainSection/>
            <Separator/>
            <div style={{height: "2000px"}}></div>
        </div>
    );
}

export default App;