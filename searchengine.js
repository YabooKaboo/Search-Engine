//Create a search bar
var searchBar = document.createElement("input");
searchBar.type = "text";
searchBar.placeholder = "Search...";

//Create a search button
var searchButton = document.createElement("button");
searchButton.textContent = "Search";

//Listen for a click on the search button
searchButton.addEventListener("click", function() {
    //Get the query from the search bar
    var query = searchBar.value;
 
    //Perform the search
    search(query);
});

//Search function
function search(query) {
    //Perform AJAX request to search engine
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://example.com/search?q=" + query);
    xhr.send();
 
    //Parse the results and display them
    xhr.onload = function() {
        var results = JSON.parse(xhr.responseText);
        displayResults(results);
    };
}

//Display results function
function displayResults(results) {
    //Iterate over the results array
    for (var i = 0; i < results.length; i++) {
        //Create a div to hold the result
        var resultDiv = document.createElement("div");
        resultDiv.className = "result";
 
        //Create an h3 to hold the result title
        var resultTitle = document.createElement("h3");
        resultTitle.textContent = results[i].title;
 
        //Create a p to hold the result description
        var resultDescription = document.createElement("p");
        resultDescription.textContent = results[i].description;
 
        //Append the title and description to the result div
        resultDiv.appendChild(resultTitle);
        resultDiv.appendChild(resultDescription);
 
        //Append the result div to the page
        document.body.appendChild(resultDiv);
    }
}
