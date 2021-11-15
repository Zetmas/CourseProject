import "./App.scss";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const options = [{ label: "Unclassified", value: "Unclassified" }];

const App = () => {
    const [selected, setSelected] = useState([]);

    return (
        <div className="App">
            <h2>Select Topics</h2>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
                isCreatable="true"
            />
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </Router>
        </div>
    );
};

export default App;
