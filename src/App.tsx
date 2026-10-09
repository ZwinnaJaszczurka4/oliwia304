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

function Movie({photo, year, name}){
  /**nazwa rok zdjecie */
  return (
    <p>
      <img src={photo}></img><br />
      Nazwa: {name}<br />
      Rok: {year} 

    </p>
  )
}

function App(){
  return (
    // <div>
    //   <Greeter />

    //   <Greeter name ="Mario" age="15"/>

    //   <Greeter name ="Luigi" age="312"/>

    // </div>

    <div>
      <Movie photo="https://movieposters.pl/environment/cache/images/productGfx_537_750_750/137-A1.webp" name="Spiderman" year="1990" />
      <Movie photo="https://static.posters.cz/image/750webp/133030.webp" name="Batman" year="2005"/>
      <Movie photo="https://cdng.europosters.eu/pod_public/750/262683.jpg" name="Catman" year="1203"/>
    
    </div>
  )
}

export default App
