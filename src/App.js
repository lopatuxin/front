import style from './App.module.css';
import {NavigationPanel} from "./component/navigationPanel/NavigationPanel";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <NavigationPanel/>
                <div className={style.content}>
                    <Routes>
                        <Route/>
                        <Route/>
                        <Route/>
                        <Route/>
                        <Route/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
