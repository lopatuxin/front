import style from './App.module.css';
import {NavigationPanel} from "./component/navigationPanel/NavigationPanel";

function App() {
    return (
        <div className={style.app}>
            <NavigationPanel/>
        </div>
    );
}

export default App;
