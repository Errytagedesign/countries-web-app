import {useState, useEffect} from "react"

export const Container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      stagerChildren: 0.2,
    }
  }
}

export const BaseUrl = "https://restcountries.com/v3.1/all"

export const useCountryFetch = () => {

  const [countries, setCountries] = useState([])
  const [countriesMain, setCountriesMain] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
  fetchData()
} 
catch(error){
setError(true)
}  
   
  }, [])


  const fetchData = async () => {
    const response = await fetch(BaseUrl)
    const data =  await response.json()
    setCountries(data)
    setCountriesMain(data)
    setIsLoaded(true)
    // console.log(data)
  }



  return { countries, countriesMain, isLoaded, error, setCountries, fetchData}
}