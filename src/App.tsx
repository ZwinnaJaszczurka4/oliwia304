import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
  console.log(event);
  console.log(event.target);
}
export function LoggingButton() {
  return (
    <button onClick={handleClick}>Kliknij mnie</button>
  );
}
function Movie({ photo, year, name, rating }: Movie) {

  /**nazwa rok zdjecie */
  return (
    
      <div className="card text-bg-secondary mb-3" data-bs-theme="dark" onClick={() => console.log("Wybrano film: " + name)}>
        {rating > 8 &&
          <div className="card-header text-center"> <span className="badge bg-warning text-dark fw-bold">Polecany</span></div>}
        <div className="card-body ">
          <img src={photo} className="card-img-top movieimg object-fit-cover" style={{ height: "300px", width: "200px" }}></img><br />
          <h1 className="card-title text-center mb-3" >{name}<br /></h1>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item text-center">{year}</li>
          <li className="list-group-item text-center">Rating: {rating}</li>
        </ul>
        <button onClick={() => console.log("pokaz szczegoly placeholder")}>Pokaż szczegóły</button>
      </div>

  )
}

interface Movie {
  photo?: string;
  year: number;
  name: string;
  rating: number;
}

function Book({ cover, title, year, pages }: Book) {

  return (
    <div className="card text-bg-secondary mb-3" data-bs-theme="dark">
      {year < 2000 && (
        <div className="card-header text-center">
          <span className="badge bg-warning text-dark fw-bold">Klasyka</span>
        </div>
      )}

      <div className="card-body text-center">
        <img src={cover} className="card-img-top bookimg object-fit-cover mb-3" style={{ height: "300px", width: "200px" }} />
        <h5 className="card-title text-center mb-0">{title}</h5>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">Release Year: {year}</li>
        <li className="list-group-item text-center">Pages: {pages}</li>
      </ul>
    </div>
  )
}

interface Book {
  cover?: string;
  title: string;
  year: number;
  pages: number;
}

function MusicAlbum({ cover, title, bandName, genre, year, tracklist }: Album) {
  return (
    <div className="card text-bg-secondary mb-3" data-bs-theme="dark">
      <div className="card-body text-center">
        <img src={cover} className="card-img-top albumimg object-fit-cover mb-3" style={{ height: "300px", width: "300px" }} />

        <h5 className="card-title text-center">{title}</h5>
        <p className="card-text text-light">{bandName} | {genre}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-center">Release Year: {year}</li>
      </ul>
      <div className="">
        <table className="table table-dark table-striped table-hover">
          <thead>
            <tr>
              <th className="">Tracklist</th>
              <th className="text-end">Length</th>
            </tr>
          </thead>
          <tbody>
            {tracklist.map((track) => (
              <Track title={track.title} length={track.length} />
            ))}

            {tracklist.length === 0 && (
              <tr>
                <td colSpan={2} className="text-center text-warning">Brak utworów</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

interface Album {
  cover?: string;
  title: string;
  bandName: string;
  genre: string;
  year: number;
  tracklist: Track[];
}

function Track({ title, length }: Track) {
  return (
    <tr>
      <td className="ps-3">{title}</td>
      <td className="text-end">{length}</td>
    </tr>
  );
}

interface Track {
  /** title of the song (string) */
  title: string;
  /** duration of the song (string) */
  length: string;
}


function App() {

  const [isMoviesOpen, setIsMoviesOpen] = useState(false);
  const [isMoviesAfter2010Open, setIsMoviesAfter2010Open] = useState(false);
  const [isBooksOpen, setIsBooksOpen] = useState(false);
  const [isBooksByYearOpen, setIsBooksByYearOpen] = useState(false);
  const [isAlbumsOpen, setIsAlbumsOpen] = useState(false);
  const [isMaxtracksOpen, setIsMaxtracksOpen] = useState(false);

  let tracklistarray: Track[][] = [
    [
      {
        title: "Mellon Collie and the Infinite Sadness",
        length: "2:52"
      },
      {
        title: "Tonight, Tonight",
        length: "4:14"
      },
      {
        title: "Jellybelly",
        length: "3:01"
      },
      {
        title: "Zero",
        length: "2:41"
      },
      {
        title: "Here Is No Why",
        length: "3:45"
      },
      {
        title: "Bullet with Butterfly Wings",
        length: "4:18"
      },
      {
        title: "To Forgive",
        length: "4:17"
      },
      {
        title: "An Ode To No One",
        length: "4:51"
      },
      {
        title: "Love",
        length: "4:21"
      },
      {
        title: "Cupid de Locke",
        length: "2:50"
      },
      {
        title: "Galapogos",
        length: "4:47"
      },
      {
        title: "Muzzle",
        length: "3:44"
      },
      {
        title: "Porcelina of the Vast Oceans",
        length: "9:21"
      },
      {
        title: "Take Me Down",
        length: "2:52"
      }
    ],
    [
      {
        title: "Six Shot Morning",
        length: "4:56"
      },
      {
        title: "Marianne",
        length: "3:45"
      },
      {
        title: "Mimesis",
        length: "3:51"
      },
      {
        title: "Happy for You",
        length: "3:48"
      },
      {
        title: "Demolition",
        length: "3:19"
      },
      {
        title: "Tongue",
        length: "3:13"
      },
      {
        title: "One Man",
        length: "4:58"
      },
      {
        title: "Where Is Gone?",
        length: "5:16"
      },
      {
        title: "You Miss Me",
        length: "3:35"
      },
      {
        title: "Japan",
        length: "3:15"
      },
      {
        title: "Intimate",
        length: "3:57"
      }
    ],
    [
      {
        title: "Hello",
        length: "3:21"
      },
      {
        title: "Roll with It",
        length: "3:59"
      },
      {

        title: "Wonderwall",
        length: "4:18"
      },
      {
        title: "Don't Look Back in Anger",
        length: "4:48"
      },
      {
        title: "Hey Now!",
        length: "5:41"
      },
      {
        title: "Untitled",
        length: "0:44"
      },
      {
        title: "Some Might Say",
        length: "5:29"
      },
      {
        title: "Cast No Shadow",
        length: "4:51"
      },
      {
        title: "She's Electric",
        length: "3:40"
      },
      {
        title: "Morning Glory",
        length: "5:03"
      },
      {
        title: "Untitled ",
        length: "0:39"
      },
      {
        title: "Champagne Supernova",
        length: "7:27"
      }
    ]
  ]

  let filmy: Movie[] = [
    {
      name: "Spiderman",
      year: 2002,
      photo: "https://a.ltrbxd.com/resized/film-poster/5/1/5/6/1/51561-spider-man-0-2000-0-3000-crop.jpg?v=a7394840f4",
      rating: 7.3
    },
    {
      name: "Batman",
      year: 2022,
      photo: "https://a.ltrbxd.com/resized/film-poster/3/4/8/9/1/4/348914-the-batman-0-2000-0-3000-crop.jpg?v=ec12a8b7ce",
      rating: 7.8
    },
    {
      name: "Avengers",
      year: 2019,
      photo: "https://a.ltrbxd.com/resized/film-poster/2/2/6/6/6/0/226660-avengers-endgame-0-2000-0-3000-crop.jpg?v=d4006bfd5e",
      rating: 8.4
    }
  ];

  let books: Book[] = [
    {
      cover: "https://s.lubimyczytac.pl/upload/books/138000/138913/170x243.jpg",
      title: "Wiedźmin",
      year: 1990,
      pages: 500
    },
    {
      cover: "https://s.lubimyczytac.pl/upload/books/5191000/5191464/1274660-170x243.jpg",
      title: "Zbrodnia i kara",
      year: 1966,
      pages: 592
    },
    {
      cover: "https://s.lubimyczytac.pl/upload/books/4942000/4942534/1177545-170x243.jpg",
      title: "Diuna",
      year: 1965,
      pages: 777
    }
  ];

  let albums: Album[] = [
    {
      title: "Mellon Collie and the Infinite sadness",
      bandName: "Smashing Pumpkins",
      genre: "Rock",
      year: 1995,
      cover: "https://m.media-amazon.com/images/I/71Nu+PjWRYL.jpg",
      tracklist: tracklistarray[0]
    },
    {
      title: "Dopamine Chamber",
      bandName: "Fontaines D.C.",
      genre: "Alt",
      year: 2026,
      cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjEMFREgrIhIfAtCCHmaZfp0AjM93N_gz-d1gUleZ5w&s=10",
      tracklist: tracklistarray[1]
    },
    {
      title: "(What's the story) Morning glory",
      bandName: "Oasis",
      genre: "Rock",
      year: 1995,
      cover: "https://m.media-amazon.com/images/I/91s+CxEDriL.jpg",
      tracklist: tracklistarray[2]
    }
  ]

  const moviesResult = filmy.sort((a, b) => a.name.localeCompare(b.name)).map(film => {
    return (
      <div className="col">
        <Movie name={film.name} year={film.year} photo={film.photo} rating={film.rating} />
      </div>
    );
  });

  const moviesAfter2010 = filmy.filter(film => film.year > 2010).map(film => {
    return (
      <div className="col">
        <Movie name={film.name} year={film.year} photo={film.photo} rating={film.rating} />
      </div>
    );
  });

  const booksResult = books.sort((a, b) => a.title.localeCompare(b.title)).map(book => {
    return (
      <div className="col">
        <Book cover={book.cover} title={book.title} year={book.year} pages={book.pages}
        />
      </div>
    );
  });

  const booksbyyear = books.sort((a, b) => a.year - b.year).map(book => {
    return (
      <div className="col">
        <Book cover={book.cover} title={book.title} year={book.year} pages={book.pages}
        />
      </div>
    );
  });

  const albumsResult = albums.sort((a, b) => a.title.localeCompare(b.title)).map(album => {
    return (
      <div className="col">
        <MusicAlbum title={album.title} bandName={album.bandName} genre={album.genre} year={album.year} cover={album.cover} tracklist={album.tracklist}
        />
      </div>
    );
  });
  /*[...albums] is copy of albums*/
  const maxtracksalbum = [...albums].sort((a, b) => b.tracklist.length - a.tracklist.length).slice(0, 1).map(album => {
    return (
      <div className="col">
        <MusicAlbum title={album.title} bandName={album.bandName} genre={album.genre} year={album.year} cover={album.cover} tracklist={album.tracklist}
        />
      </div>
    );
  }
  )
  return (
    <div className="container text-center">
      <h1 onClick={() => { setIsMoviesOpen(!isMoviesOpen) }}>{isMoviesOpen ? "▾ " : "▸ "}Movies</h1>
      {isMoviesOpen && (
        <div id="allmovies" className="col">
          <div className="row justify-content-center">
            {moviesResult}
          </div>
          <h2 onClick={() => { setIsMoviesAfter2010Open(!isMoviesAfter2010Open) }}>{isMoviesAfter2010Open ? "▾ " : "▸ "}Movies released after 2010:</h2>
          {isMoviesAfter2010Open && (
            <div className="row justify-content-center">
              {moviesAfter2010}
            </div>

          )}
        </div>
      )}

      <h1 onClick={() => { setIsBooksOpen(!isBooksOpen) }}>{isBooksOpen ? "▾ " : "▸ "}Books</h1>
      {isBooksOpen && (
        <div id="allbooksdiv" className="col">

          <div className="row justify-content-center">
            {booksResult}
          </div>
          <h2 onClick={() => { setIsBooksByYearOpen(!isBooksByYearOpen) }}>{isBooksByYearOpen ? "▾ " : "▸ "}Books sorted by release year:</h2>
          {(isBooksByYearOpen && isBooksOpen) && (
            <div className="row justify-content-center">
              {booksbyyear}
            </div>

          )}
        </div>
      )}

      <h1 onClick={() => { setIsAlbumsOpen(!isAlbumsOpen) }}>{isAlbumsOpen ? "▾ " : "▸ "}Music Albums</h1>
      {isAlbumsOpen && (
        <div id="allalbumsdiv" className="col">
          <div className="row justify-content-center">

            {albumsResult}


          </div>
          <h2 onClick={() => { setIsMaxtracksOpen(!isMaxtracksOpen) }}>{isMaxtracksOpen ? "▾ " : "▸ "}Album with the most tracks:</h2>
          {(isMaxtracksOpen && isAlbumsOpen) && (
            <div className="row justify-content-center">

              {maxtracksalbum}
            </div>

          )}
        </div>
      )}


    </div>
  )
}

export default App
