const moviesGrid = document.getElementById("moviesGrid");
const moviesSelect = document.getElementById("moviesSelect");

const addMovieToWebsite = (image) => {
    const div = document.createElement("div");

    const img = document.createElement("img");
    img.src = image;
    img.loading = "lazy";


    div.append(img);
    return div;
};

const renderMovies = (movies) => {
    moviesGrid.innerHTML = "";

    movies.forEach((movie) => {
        if (movie.show.image) {
            const moviePoster = addMovieToWebsite(
                movie.show.image.medium,
                movie.show.name,
            );
            moviesGrid.append(moviePoster);
        }
    });
};

const getAllMovies = (query) => {
    fetch(`https://api.tvmaze.com/search/shows?q=${query}`)
        .then((res) => res.json())
        .then((data) => renderMovies(data))
        .catch((err) => console.error(err));
};

moviesSelect.addEventListener("change", () => {
    getAllMovies(moviesSelect.value);
});

getAllMovies(moviesSelect.value);
