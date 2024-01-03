import style from './App.module.css';
import {NavigationPanel} from "./component/navigationPanel/NavigationPanel";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./component/header/Header";

function App() {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <Header/>
                <div className={style.contentWrapper}>
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
            </div>
        </BrowserRouter>
    );
}

export default App;
