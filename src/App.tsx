import { MainSection } from "./components/MainSection/MainSection.tsx";
import { Navabar } from "./components/Navbar/Navbar.tsx";
import { BasicSection } from "./components/BasicSection/BasicSection.tsx";

const App = () => {
    return (
        <div>
            <Navabar/>
            <MainSection/>
            <BasicSection components={
                [
                    <p>test</p>,
                    <p>test</p>,
                    <p>test</p>,
                ]
            }/>
            <div style={{height: "2000px"}}></div>
        </div>
    );
}

export default App;