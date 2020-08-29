//  Initialize the data source
const dataBase = 'https://ghibliapi.herokuapp.com/films';
// Grabbing the container element
const container = document.querySelector(".container");

// Fetch the data and turn it into a readable object
async function fetchInformation() {
    const response = await fetch(`${dataBase}`);
    console.log(response);
    // Parse the data from a string into an object
    const data = await response.json();
    return data;
}
fetchInformation();

const fetchAndDisplay = async (event) => {
    const movies = await fetchInformation();
    dispayMovies(movies)
}
fetchAndDisplay();

function dispayMovies(movies) {
    // Objects = Objects.sort((a, b) => b.rt_score - a.rt_score);
    movies = movies.sort((a, b) => b.rt_score - a.rt_score);
    const html = movies.map(movie => {
        return `
        <div class="big_container">
            <ul class="wrapper_list">
                <li>
                    <ul class="items">
                        <li><h2><b>Movie title: </b>${movie.title}</h2></li>
                        <li><p><b>Release_date: </b>${movie.release_date}</p></li>
                        <li><p><b>rt_score: </b>${movie.rt_score}</p></li>
                    </ul>
                </li>
                <li><p class="style"><b>Description: </b>${movie.description}</p></li>
                <li>
                    <ul class="last_items">
                        <li><p><b>Director: </b>${movie.director}</p></li>
                        <li><p><b>Producer: </b>${movie.producer}</p></li>
                    </ul>
                </li>
            </ul>
        </div>
        `;
    });
    container.innerHTML = html.join('');
}