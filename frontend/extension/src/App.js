/*global chrome*/
import "./App.scss";
import React, { useCallback, useEffect, useState } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import CreatableSelect from "react-select/creatable";

const App = () => {
    const [storageList, setStorageList, isPersistent, error] =
        useChromeStorageLocal("bookmarks", []);

    const [displayList, setDisplayList] = useState(storageList);

    const [keywords, setKeywords] = useState([]);

    const handleChange = useCallback((newArray) => {
        const newKeywords = newArray.map(({ value }) => value);
        setKeywords(newKeywords);
        computeDisplayList(newKeywords);
    });

    const handleSubmit = useCallback(() => {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            const { title, url } = tabs[0];
            setStorageList([...storageList, { name: title, link: url }]);
        });
    });

    const computeDisplayList = useCallback((keywords) => {
        // TODO: invoke the text ranking computation
        console.log(keywords);
        setDisplayList(storageList);
    });

    useEffect(() => {
        computeDisplayList(keywords);
    }, [storageList]);

    return (
        <div className="App">
            <div className="flex-container">
                <h2>Select Topics</h2>
                <button onClick={handleSubmit}>Add Current Page</button>
            </div>
            <CreatableSelect isMulti onChange={handleChange} />
            <ul>
                {displayList.map(({ name, link }) => {
                    return (
                        <li>
                            {name}: {link}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default App;
