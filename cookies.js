document.addEventListener("DOMContentLoaded", function () {

    const cookieOverlay = document.getElementById("cookieOverlay");

    const acceptButton = document.getElementById("acceptBtn");

    const declineButton = document.getElementById("declineBtn");

 

    const executeCodes = () => {

        acceptButton.addEventListener("click", () => {

            const expirationDate = new Date();

            expirationDate.setMonth(expirationDate.getMonth() + 1);

            document.cookie = "cookieBy=versatile; max-age=" + 60 * 60 * 24 * 30 + "; expires=" + expirationDate.toUTCString();

 

            cookieOverlay.style.display = "none";

            document.querySelector(".main-content").style.display = "block";

 

            alert("You have accepted the cookies.");

                cookieBox.style.display = "none";

        });

 

        declineButton.addEventListener("click", () => {

            // Handle declining cookies (e.g., display a message or take action)

 

            // cookie overlay

            cookieOverlay.style.display = "none";

            document.querySelector(".main-content").style.display = "block";

 

            alert("You have accepted the cookies.");

            cookieBox.style.display = "none";

        });

    };

 

    window.addEventListener("load", executeCodes);

});

let selectedWordIndex = -1;

 

    // Define a mapping of words to URLs or anchors

    const wordToURLMap = {

        "Apple": "apple.html",

        "Programmer": "about.html#programmer",

        "Contact": "contact.html",

        "Date": "events.html#date",

        "Grape": "about.html#grape",

    };

 

    function search(event) {

        const searchInput = document.getElementById("search");

        const searchText = searchInput.value;

        const searchRegex = new RegExp(searchText, "i");

 

        // Perform search and display results

        const data = Object.keys(wordToURLMap);

        const searchResults = data.filter(item => searchRegex.test(item));

 

        const searchResultsContainer = document.getElementById("searchResults");

        searchResultsContainer.innerHTML = "";

 

        if (searchResults.length > 0) {

            searchResults.forEach((result, index) => {

                const resultItem = document.createElement("div");

                resultItem.textContent = result;

                searchResultsContainer.appendChild(resultItem);

 

                resultItem.addEventListener("click", () => {

                    searchInput.value = result;

                    performSearch(result); // Pass the selected word to performSearch

                });

 

                resultItem.addEventListener("mouseover", () => {

                    selectedWordIndex = index;

                    updateSelectedWord();

                });

            });

            selectedWordIndex = -1;

            updateSelectedWord();

        } else {

            searchResultsContainer.textContent = "No results found.";

        }

 

        if (event.key === "ArrowDown" && selectedWordIndex < searchResults.length - 1) {

            selectedWordIndex++;

            updateSelectedWord();

        } else if (event.key === "ArrowUp" && selectedWordIndex > 0) {

            selectedWordIndex--;

            updateSelectedWord();

        } else if (event.key === "Enter") {

            searchInput.value = searchResults[selectedWordIndex];

            performSearch(searchResults[selectedWordIndex]);

        }

    }

 

    function updateSelectedWord() {

        const searchResultsContainer = document.getElementById("searchResults");

        const searchResults = searchResultsContainer.querySelectorAll("div");

 

        searchResults.forEach(result => {

            result.classList.remove("selected");

        });

 

        if (selectedWordIndex >= 0 && selectedWordIndex < searchResults.length) {

            searchResults[selectedWordIndex].classList.add("selected");

        }

    }

 

    function performSearch(selectedWord) {

        if (selectedWord) {

            const urlOrAnchor = wordToURLMap[selectedWord];

            if (urlOrAnchor) {

                // Redirect or scroll to the URL or anchor

                window.location.href = urlOrAnchor;

            }

        }

    }