1. Overview of the function of the code: 
	 Our code could be seperated into three main parts: the frontend, algorigtms and datasets. 
	 As for the frontend, the code in this folder will contains the basic implementations of user interface and BM25 algorithm. It constructs a concise and beautful chrome extention called "smart bookmark" and define several usages of it. And then it connects with our input from web scaper and send them to algorithm code so it returns the matched list as output. 
	 As for the datasets, there is a folder called dataset. It contains the test case info by the page crawler function. 
	 As for the algorithm, it's located in frontend/extention/src/utils. It simply implements the BM25 algorithm and it makes interactions with the frontend.

2. How the software is implemented: 
	 This software is bulit based on React app. It mainly contains three parts: the frontend, algorigtms and datasets. 
	 As for the frontend, there is a folder called frontend in the main. Here, it implements a concise chrome extention for our users based on React App. In the frontend/extention/public folder, the code is used to implement the public function of this extension. In the frontend/extention/src folder, App.js contains the main code to implement the smart bookmark function. It will collect the webpage information from page scraper and transform it into the standerd input format so that bm_25 algorithm could deal with it. Then it will handle the output matched items based on the input queries. Also, it contains the main functios of the plugin's interface, such as "add current page" and "delete this page". App.test.js is a simple web test file for validating the correctness of the extention. 
	 As for the datasets, there is a folder called dataset. It contains the test dataset that we need for validing the correctness of our algorithm and extention. The tag_index is a file that contains the url that we scraped. The extract_docs.py is used to crawl all text info from a webpage. Then all of these text info is stored in docs.txt. 
	 As for the algorithm, it's located in frontend/extention/src/utils. This is the code that take the keywords(query) and list(name, link, text) as input and it computes matched list with the highest score based on BM25. So it firstly pre-process the text by eliminating the stop words and stem, then it processes the input and filter the mathced list as the output.

3. The usage of the software:

4. Brief description of contribution of each team member: 
	 As for Miao Zehao, he builds up the constructure of the frontend part(the smart bookmark) based on React. For the user interface design, he designed the UI logic implementation and styling and wrote the code of intection between the algorithm and frontend. Also, he connected the instant web scraper with the frontend so that we could get the web's text info when we added this web into the bookmark. 
	 As for Wu Fan, she wrote two web scrpars for getting the whole text infomation from the webpage. Also, she built up the test case datasets and collected a great number of urls for validating the correctness of our algorithm. 
	 As for Cao Zuhua, he built up the BM25 algorigtm based on the format needs from frontend and return the formatted output to frontend. Also, he wrote the most part of the documentation.
