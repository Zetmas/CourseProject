# CS 410 Course project---Smart Bookmarks
Group member: Zehao Miao, Fan Wu, Zuhua Cao

This is a Chrome Extension aiming to help users group their bookmarks intelligently. The extension will classify all bookmarks based on the given keyword list by inputting keywords. 

## Installation & set up

```
# Download the current repository.
git clone https://github.com/Zetmas/CourseProject.git
```
Go to path /CourseProject/frontend/extension/src. 

**Note:** The extension is based on React.js. You need to ensure you have the latest node.js, npm installed to build it.

```
# Install the packages
npm install
# Build the extension:
npm run build
```
Generally, if this command executes successfully, it will generate a new folder called: build.

Now you can try to load this build into your Chrome Browser.
- Go to chrome://extensions/
- Make sure you are in developer mode. 
- Click the top-left button "Load unpacked"
- Select the build folder as the path.
- You can try this new extension now!

## Overview of the function of the code: 

The smart bookmark extension can divide into three functional parts: frontend (UI Interface), web scraper, classification algorithm, and datasets(for the test). 

Frontend: This part serves as a simple user interface where users can input keywords, add current web pages as bookmarks, and list the classified bookmark groups.
- Web scraper function: When a new webpage is added as a bookmark, the scraper will immediately be called. It runs a script in content.js to extract all text information inside the target webpage and save the content into a newly created bookmark object.
- Classification algorithm: When a list of keywords is input by the user. The algorithm function is called. It first preprocesses the raw text data, removes punctuations, stops words, etc. For classification, we use the BM25 algorithm to do the job. The algorithm will take a keyword as a search query and take the top 10 most related results as the return value. The core bm25 function uses an external library: wink-bm25-text-search.


## How the software is implemented: 

The frontend is based on the React.js framework. All algorithm-related functions and webpage scraper are implemented using Javascript.

- Frontend: inside the frontend folder. The main code is in /extention/src/App.js, including the HTML part of the extension. It collects the webpage information from the page scraper and transforms it into the standard input format so that the bm_25 algorithm can deal with it. Then it will handle the output matched items based on the input queries. Also, it contains the main functions of the plugin's interface, such as "add current page" and "delete this page". App.test.js is a simple web test file for validating the correctness of the extension. 

- Web scraper function: This function is only called when a new webpage is added as a bookmark. It will send a message from the popup.js (App.js) and ask the content script(/public/content.js) to return inner text inside the current tab.

- Classification algorithm: It's located in frontend/extension/src/utils. The algorithm takes the keywords(query), and list(name, link, text) as input, and it computes matched list with the highest score based on BM25. So it firstly preprocesses the text by eliminating the stop words and stem, then processes the input and filters the matched list as the output.

- Dataset: It contains the test dataset that we need for validating the correctness of our algorithm and extension. The tag_index is a file that contains the URL that we scraped. The extract_docs.py is used to crawl all text info from a webpage. Then all of this text info is stored in docs.txt. 

## Brief description of the contribution of each team member: 
Zehao Miao: He builds up the structure of the frontend part(the smart bookmark) based on React. He designed the UI logic implementation and styling for the user interface design and wrote the code of interaction between the algorithm and frontend. 

Fan Wu: She's responsible for the web scraper function to get the web page's full-text information. Besides, she built up the test case dataset and collected a great number of URLs to validate our algorithm's correctness. She also wrote to the documentation. 

Zuhua Cao: He built up the BM25 algorithm based on the frontend format needs and returned the formatted output to the frontend. In addition, he is the original author of this documentation.
