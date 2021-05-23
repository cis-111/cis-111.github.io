/* Homework Lab ZBooks 11.5 by Renee Hollomon
 This is tricky because a JSON object is returned if all is copacetic
 but an array is returned if ["error":"foo"]
 */

"use strict;"
/* window.alert("hello"); */
/* declare too early, and   multiple requests pile up on the url. */
let url;
window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

     // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;

      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);
   });
});

function fetchQuotes(topic, count) {
  url = "https://wp.zybooks.com/quotes.php?";
  url = url + "topic=" + topic + "&count=" + count;
  let xhr = new XMLHttpRequest();
  xhr.addEventListener("load", responseReceivedHandler);
  xhr.responseType = "json";
  xhr.open("GET", url);
  xhr.send();
}

function responseReceivedHandler() {
  if (this.status == 200) {
    let quoteObject = this.response;
    if (! (! quoteObject.error)) {
      // an error has occured that must be shown on the HTML page.
      document.querySelector("#quotes").innerHTML = quoteObject.error;
    } else {
        let html = "<ol>";
        let quote;
        let source;
			  let x;
        for (x = 0; x < quoteObject.length; x++) {
          quote = quoteObject[x].quote;
          source = quoteObject[x].source;
          html += "<li>" + quote + " - " + source + "</li>"
        document.querySelector("#quotes").innerHTML = html;
      }
        html += "</ol>";
        document.querySelector("#quotes").innerHTML = html;
    }
  }
}