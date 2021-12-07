import "./App.scss";
import React, { useCallback, useState } from "react";
import CreatableSelect from "react-select/creatable";

const App = () => {
    const [collectionList, setCollectionList] = useState([]);
    
    const handleChange = useCallback((newArray) => {
        console.log(newArray);
        // TODO: invoke the computation of the new collection list, then update it
        const newList = newArray; // should be BM25 ranking function instead 

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
