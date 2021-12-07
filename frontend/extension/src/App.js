/*global chrome*/
import "./App.scss";
import React, { useCallback, useEffect, useState } from "react";
import { useChromeStorageLocal } from "use-chrome-storage";
import CreatableSelect from "react-select/creatable";

const App = () => {
    const [storageList, setStorageList, isPersistent, error] =
        useChromeStorageLocal("bookmarks", []);

    const [displayList, setDisplayList] = useState(storageList);

    const handleChange = useCallback((newArray) => {
        console.log(newArray);
        // // TODO: invoke the computation of the new collection list, then update it
        // setStorageList([
        //     ...storageList,
        //     { name: "test", link: "www.google.com" },
        // ]);
    });

    const handleSubmit = useCallback(() => {
        chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
            const { title, url } = tabs[0];
            setStorageList([...storageList, { name: title, link: url }]);
        });
    });

    useEffect(() => {
        console.log(storageList);
    }, [storageList]);

    return (
        <div className="App">
            <div className="flex-container">
                <h2>Select Topics</h2>
                <button onClick={handleSubmit}>Add Current Page</button>
            </div>
            <CreatableSelect isMulti onChange={handleChange} />
            <ul>
                {storageList.map(({ name, link }) => {
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
