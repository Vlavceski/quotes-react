import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import RandomQuote from "./component/RandomQuote";
import ViewQuote from "./component/ViewQuote";

class App extends React.Component {
    render() {
        return (
            <div>
                <Router>
                    <div className="container">
                        <Routes>
                            <Route exact path="/quotes" element={<ViewQuote />} />
                            <Route exact path="/random-quote" element={<RandomQuote />} />
                        </Routes>
                    </div>
                </Router>
            </div>
        );
    }
}
export default App;