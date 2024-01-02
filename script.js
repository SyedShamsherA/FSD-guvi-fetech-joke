document.addEventListener("DOMContentLoaded", () => {
    const apiUrls = 
        "https://api.chucknorris.io/jokes/random"
  
    // Function to fetch data using Promises
    const fetchData = (url) => {
        return fetch(url)
          .then((response) => {
            if (!response.ok) {
              throw new Error("Network response was not ok");
            }
            return response.json();
          })
          .catch((error) => {
            console.error("There was a problem fetching the data:", error);
          });
      };
    
      const displayChuckNorrisJoke = (data) => {
        const chuckNorrisContainer = document.getElementById("chuck-norris-joke");
        chuckNorrisContainer.textContent = `Chuck Norris Joke: ${data.value}`;
      };
    
      // Fetch data for API 
      fetchData(apiUrls).then((data) => {
        displayChuckNorrisJoke(data);
      });
  });
  