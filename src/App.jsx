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
import about from "./Pages/About.jsx";
import howto from "./Pages/HowTo.jsx";

//Candy
import ColaBilar from "./Pages/Candy/FerrariColaBilar.jsx"; //1
import FruktNappar from "./Pages/Candy/FruktNappar"; //2
import SuraS from "./Pages/Candy/SuraS.jsx"; //3

function App() {
    return ( 
        <Router>
            <Switch>
                <Route path="/HowTo" component={howto}/>
                <Route path="/About" component={about}/>
                <Route path="/Candy/Success" component={succes}/>
                <Route path="/Candy/Cancel" component={cancel}/>
                <Route path="/Candy/SuraS" component={SuraS}/>
                <Route path="/Candy/FruktNappar" component={FruktNappar}/>
                <Route path="/Candy/FerrariColaBilar" component={ColaBilar}/>
                <Route path="/" component={MainPage}/>
            </Switch>
        </Router>
    );
}

export default App;