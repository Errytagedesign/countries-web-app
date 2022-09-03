import {useState, useEffect} from "react"
import { useParams } from "react-router-dom"



export const BaseUrl = "https://restcountries.com/v3.1/all"




export const useCountryFetch = () => {
  
  
  const [countries, setCountries] = useState([])
  const [dataNew, setDataNew] = useState({})
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  const {countryCodes} = useParams();



  useEffect(() => {


  const fetchData = async () => {
    const response = await fetch(BaseUrl)
    const data =  await response.json()
    
    let result = []
 for (let i = 0; i < data.length; i++) {
  const country = data[i];
  


  // const currencies =  country.currencies
  // Object.values(currencies)
  // console.log(currencies)

  // const languages = country.languages
  // Object.values(country.languages)
  // console.log(languages)




  
 
    const dataToFetch = {
      languages: country.languages,
      currencies: country.currencies,
      flags: country.flags.svg,
       name: country.name,
        population: country.population,
         region: country.region,
          subregion: country.subregion, 
          capital: country.capital && country.capital.length > 0 ? country.capital[0] : "",  
          borders: country.borders, 
          timezones: country.timezones, 
          car: country.car.side,
          slug: country.cca3,
          
        } 

       result.push(dataToFetch)
      //  console.log(dataToFetch.name)
        
        setCountries(result)
      }



  // console.log(result)

  const filterById = result.filter((item) => 
  
    // console.log(money)

item.slug.toLowerCase() === countryCodes.toLowerCase()
)
  



  // console.log(filterById[0])

    setDataNew(filterById[0])
    setIsLoaded(true)
    
  }

    try {
  fetchData()
  
} 
catch(error){
setError(true)
}  



  }, [countryCodes])


 



  return { countries, dataNew, isLoaded, error, setCountries, setDataNew}
}