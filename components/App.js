import React, { useState, useEffect} from "react";

export default function App() {
    
    const [allMovies, setMovies] = useState([]);

    async function fetchMemes() {
		const response = await fetch('https://ghibliapi.herokuapp.com/films');
        const movies = await response.json();
        setMovies(movies);
    }

	useEffect(() => {
		fetchMemes();
    }, []);

    return(
        allMovies.map(item => {
            return (
                <div className="big_container" key={item.id}>
                    <ul className="wrapper_list">
                        <li>
                            <ul className="items">
                                <li><h2><b>MOVIE TITLE: </b>{item.title}</h2></li>
                                <li><p><b>RELEASED_DATE: </b>{item.release_date}</p></li>
                                <li><p><b>RT_SCORE: </b>{item.rt_score}</p></li>
                            </ul>
                        </li>
                        <li><p className="style"><b>DESCRIPTION: </b>{item.description}</p></li>
                        <li>
                            <ul className="last_items">
                                <li><p><b>DIRECTOR: </b>{item.director}</p></li>
                                <li><p><b>PRODUCER: </b>{item.producer}</p></li>
                            </ul>
                        </li>
                    </ul>
            </div>
            )
        })
    )
}


// const dataBase = 'https://ghibliapi.herokuapp.com/films';
// const container = document.querySelector(".container");

// const fetchAndDisplay = async (event) => {
//     const movies = await fetchInformation();
//     dispayMovies(movies)
// }
// fetchAndDisplay();

// // Display the data in the lists
// function dispayMovies(movies) {
//     movies = movies.sort((a, b) => b.rt_score - a.rt_score);
//     const html = movies.map(movie => {
//         return `
        // <div class="big_container">
        //     <ul class="wrapper_list">
        //         <li>
        //             <ul class="items">
        //                 <li><h2><b>MOVIE TITLE: </b>${movie.title}</h2></li>
        //                 <li><p><b>RELEASED_DATE: </b>${movie.release_date}</p></li>
        //                 <li><p><b>RT_SCORE: </b>${movie.rt_score}</p></li>
        //             </ul>
        //         </li>
        //         <li><p class="style"><b>DESCRIPTION: </b>${movie.description}</p></li>
        //         <li>
        //             <ul class="last_items">
        //                 <li><p><b>DIRECTOR: </b>${movie.director}</p></li>
        //                 <li><p><b>PRODUCER: </b>${movie.producer}</p></li>
        //             </ul>
        //         </li>
        //     </ul>
        // </div>
//         `;
//     });
//     // Inserting the html elements inside of the big html
//     container.innerHTML = html.join('');
// }