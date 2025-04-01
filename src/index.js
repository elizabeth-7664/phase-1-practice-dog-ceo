console.log('%c HI', 'color: firebrick')
document.addEventListener("DOMContentLoaded", () => {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
    const breedUrl = "https://dog.ceo/api/breeds/list/all";
    const dogImageContainer = document.getElementById("dog-image-container");
    const dogBreedsList = document.getElementById("dog-breeds");
    const breedDropdown = document.getElementById("breed-dropdown");
    let breeds = [];
  
    // Fetch and display dog images
    fetch(imgUrl)
      .then(response => response.json())
      .then(data => {
        data.message.forEach(imageUrl => {
          const img = document.createElement("img");
          img.src = imageUrl;
          img.style.width = "200px";
          img.style.margin = "10px";
          dogImageContainer.appendChild(img);
        });
      });
  
    // Fetch and display dog breeds
    fetch(breedUrl)
      .then(response => response.json())
      .then(data => {
        breeds = Object.keys(data.message);
        renderBreeds(breeds);
      });
  
    // Function to render breeds
    function renderBreeds(breeds) {
      dogBreedsList.innerHTML = "";
      breeds.forEach(breed => {
        const li = document.createElement("li");
        li.innerText = breed;
        li.style.cursor = "pointer";
        li.addEventListener("click", () => {
          li.style.color = "blue";
        });
        dogBreedsList.appendChild(li);
      });
    }
  
    // Filter breeds based on dropdown selection
    breedDropdown.addEventListener("change", (event) => {
      const selectedLetter = event.target.value;
      const filteredBreeds = breeds.filter(breed => breed.startsWith(selectedLetter));
      renderBreeds(filteredBreeds);
    });
  });
  