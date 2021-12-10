chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        console.log("at c_s_public");
        // data: document.all[0].innerText,
         if(request.method == "getText"){
             console.log("c_s received")
            sendResponse({data: document.all[0].innerText, method: "getText"}); //same as innerText
        }
    }
);
// function getText(){
//     return document.body.innerText
// }
// function getHTML(){
//     return document.body.outerHTML
// }
// console.log(getText());             //Gives you all the text on the page
// console.log(getHTML());             //Gives you the whole HTML of the page
