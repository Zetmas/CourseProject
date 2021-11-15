import "./App.scss";
import React, { useCallback } from "react";
import CreatableSelect from "react-select/creatable";

// const options = ["Unclassified"];

const App = () => {
    const handleChange = useCallback((newValue, actionMeta) => {
        console.group("Value Changed");
        console.log(newValue);
        console.log(`action: ${actionMeta.action}`);
        console.groupEnd();
    });

    return (
        <div className="App">
            <div className="flex-container">
                <h2>Select Topics</h2>
                <button>Add Current Page</button>
            </div>
            <CreatableSelect isMulti onChange={handleChange} />
        </div>
    );
};

export default App;
