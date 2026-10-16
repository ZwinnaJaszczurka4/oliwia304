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
      <img src={photo}></img><br />
      Nazwa: {name}<br />
      Rok: {year} 

    </p>
  )
}

interface Movie{
  photo?:string;
  year:string;
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
  year:string;
  pages:string;
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
  year:string;
}


function App(){

  /*
  
  Array.map()

  wykorzystujac map robic cialo funkcji

  Array.filter

  [m1, m2, m3].map((m)=> 
(
  <Movie {costamcos}
  ))




  lista w liscie
  
  <Album ...> jakis komponent {children} po f12 widac
    <track><>
    </album>
  */ 
 let filmy:Movie []=[];
  filmy.push({name: "Spiderman", year: "1990", photo: "https://movieposters.pl/environment/cache/images/productGfx_537_750_750/137-A1.webp" });
  


  return (
    // <div>
    //   <Greeter />

    //   <Greeter name ="Mario" age="15"/>

    //   <Greeter name ="Luigi" age="312"/>

    // </div>
<body>
    <div>
      <Movie photo="https://movieposters.pl/environment/cache/images/productGfx_537_750_750/137-A1.webp" name="Spiderman" year="1990" />
      <Movie photo="https://static.posters.cz/image/750webp/133030.webp" name="Batman" year="2005"/>
      <Movie photo="https://cdng.europosters.eu/pod_public/750/262683.jpg" name="Catman" year="1203"/>
    </div>
    <div>
      <Book cover="https://s.lubimyczytac.pl/upload/books/138000/138913/170x243.jpg" title="Wiedźmin" year="1990" pages="500"/>
      <Book cover="https://s.lubimyczytac.pl/upload/books/5191000/5191464/1274660-170x243.jpg" title="Zbrodnia i kara" year="1966" pages="592"/>
      <Book cover="https://s.lubimyczytac.pl/upload/books/4942000/4942534/1177545-170x243.jpg" title="Diuna" year="1965" pages="777"/>
      
      <MusicAlbum title="Mellon Collie and the Infinite sadness" bandName="Smashing Pumpkins" genre="rock" year="1995" cover="https://m.media-amazon.com/images/I/71Nu+PjWRYL.jpg"/>
      <MusicAlbum title="Dopamine Chamber" bandName="Fontaines D.C." genre="alt" year="2026" cover="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBjEMFREgrIhIfAtCCHmaZfp0AjM93N_gz-d1gUleZ5w&s=10"/>
      <MusicAlbum title="(What's the story) Morning glory" bandName="Oasis" genre="rock" year="1995" cover="https://m.media-amazon.com/images/I/91s+CxEDriL.jpg"/>

    </div></body>
  )
}

export default App
