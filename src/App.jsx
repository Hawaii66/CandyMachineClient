import './App.css';

import {
    BrowserRouter as Router,
Route,
Switch,
Link,
Redirect
} from "react-router-dom"

//Pages
import MainPage from "./Pages/index.jsx"
//import CandySpecial from "./Pages/Candy/CandySpecial.jsx";
import succes from "./Pages/succes.jsx";
import cancel from "./Pages/cancel.jsx";

//Candy
import GottOchBlandatSur from "./Pages/Candy/GottOchBlandatSur.jsx"
import ColaNappar from "./Pages/Candy/ColaNappar.jsx";

function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/Candy/Success" component={succes}/>
                <Route path="/Candy/Cancel" component={cancel}/>
                <Route path="/Candy/GottochBlandatSur" component={GottOchBlandatSur}/>
                <Route path="/Candy/ColaNapparSur" component={ColaNappar}/>
                <Route path="/" component={MainPage}/>
            </Switch>
        </Router>
    );
}

export default App;