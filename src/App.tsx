function Greeter({age = 15, name} : Props){
    
  if (age <300){
    return(
      <p>Witaj {name}!</p>
    )
  }
  else{
    return (
      <p>Dzien dobry {name}!</p>
    )
  }
  
}
interface Props {
  /** dzien dobry komentarz ktory wyswietla sie pod name*/
  name: string;
  /** znak zapytania mowi ze pole jest opcjonalne */
  age?: number;
}


function Movie({photo, year, name}: Movie){
  /**nazwa rok zdjecie */
  return (
    <p>
      <img src={photo} className="movieimg" ></img><br />
     {name}<br />
      {year} 

    </p>
  )
}

interface Movie{
  photo?:string;
  year:number;
  name:string;
}

function Book({cover, title, year, pages}: Book){

  return (
    <p>
      <img src={cover}></img><br/>
      Title: {title}<br/>
      Release Year: {year}<br/>
      Pages: {pages}<br/>
    </p>

  )
}

interface Book{
  cover?:string;
  title: string;
  year:number;
  pages:number;
}

function MusicAlbum({cover, title, bandName, genre, year} : Album ){
  return(
    <p>
      <img src={cover}></img><br/>
      {title}<br/>
      {bandName}<br/>
      {genre}<br/>
      Release Year: {year}<br/>
    </p>
  )
}

interface Album{
  cover?:string;
  title:string;
  bandName:string;
  genre:string;
  year:number;
}

function Track({title, length} : Track){
  return(
    <p>
      {title}  {length}
    </p>
  )
}

interface Track{
  /** title of the song (string) */
  title:string;
  /** duration of the song (string) */
  length :string;
}


function App(){

  /*
  
  Array.filter

  lista w liscie
  
  <Album ...> jakis komponent {children} po f12 widac
    <track><>
    </album>
  */ 
 let filmy: Movie[] = [
    {
        name: "Spiderman",
        year: 2002,
        photo: "https://a.ltrbxd.com/resized/film-poster/5/1/5/6/1/51561-spider-man-0-2000-0-3000-crop.jpg?v=a7394840f4"
    },
    {
      name: "Batman",
      year: 2022,
      photo: "https://a.ltrbxd.com/resized/film-poster/3/4/8/9/1/4/348914-the-batman-0-2000-0-3000-crop.jpg?v=ec12a8b7ce"
    },
    {
      name: "Avengers. Endgame",
      year: 2019,
      photo: "https://a.ltrbxd.com/resized/film-poster/2/2/6/6/6/0/226660-avengers-endgame-0-2000-0-3000-crop.jpg?v=d4006bfd5e"
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

let albums : Album[] = [
  {
    title: "Mellon Collie and the Infinite sadness",
    bandName: "Smashing Pumpkins", 
    genre: "Rock",
    year: 1995,
    cover: "https://m.media-amazon.com/images/I/71Nu+PjWRYL.jpg"
  },
  {
    title: "Dopamine Chamber",
    bandName: "Fontaines D.C.",
    genre: "Alt",
    year: 2026,
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjEMFREgrIhIfAtCCHmaZfp0AjM93N_gz-d1gUleZ5w&s=10"
  },
  {
    title: "(What's the story) Morning glory",
    bandName: "Oasis",
    genre: "Rock",
    year: 1995,
    cover: "https://m.media-amazon.com/images/I/91s+CxEDriL.jpg"
  }
]

let tracklist: Track[] = [
  {
    title: "Mellon Collie and the Infinite Sadness",
    length: "2:52"
  },
  {
    title: "Tonight, Tonight",
    length:  "4:14"
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
]
  
const moviesResult = filmy.map(film => {
  return (
    <div>
      <Movie name={film.name} year={film.year} photo={film.photo}/>
    </div>
  );
});

const booksResult = books.map(book => {
  return (
    <div>
      <Book cover={book.cover} title={book.title} year={book.year} pages={book.pages}
      />
    </div>
  );
});

const albumsResult = albums.map(album => {
  return (
    <div>
      <MusicAlbum title={album.title} bandName={album.bandName} genre={album.genre} year={album.year} cover={album.cover}
      />
    </div>
  );
});

const tracks = tracklist.map(track => {
  return (
    <div>
      <Track title={track.title} length={track.length}/>
    </div>
  )
})

  
  return (
    <body>
      <div id="moviesdiv">
        {moviesResult}
      </div>
      <div id="booksdiv">
        {booksResult}
      </div>
      <div id="albumsdiv">
        {albumsResult}
        {tracks}
      </div>
    </body>
  )
}

export default App
