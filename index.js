const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

//catboys api-----------------------
urlApi= `https://api.catboys.com/img`;

btnEl.addEventListener("click", async function(){
     try {
        btnEl.disabled = true;
        btnEl.innerText = `Loading------`
        animeNameEl.innerText = "Updating------------"
        //Loading io------------
        // https://loading.io/
        animeImgEl.src = 'spinner.svg';
        const response = await fetch(urlApi).then(data => data.json()); 
        animeContainerEl.style.display = "block";
        animeImgEl.src = response.url;
        animeNameEl.innerText = response.artist;
        btnEl.disabled = false;
        btnEl.innerText = `Get Anime`
     } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = `Get Anime`;
        animeNameEl.innerText = `Try again,Error`;
     }
});