import React, {useState, useEffect} from 'react'
// import { motion } from 'framer-motion'
import {  BaseUrl } from '../../utils/MotionConainer'
// import millify from 'millify'
// import {Link} from "react-router-dom"
import { BsSearch } from 'react-icons/bs'


// Styles
import './Countries.scss'
import Spinner from '../spinner/Spinner'
import Country from '../country/Country'

 

function Countries() {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [countries, setCountries] = useState([])
    const [filterRegion, setFilterRegion] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")
    const [searchParam] = useState([ "name", "capital" ])

    useEffect(() => {
      fetch(BaseUrl)

      .then(res => res.json())
      .then((result) => {

    setIsLoaded(true)

    //  set the result from the api into the state
    setCountries(result)
    console.log(result)
      },
    
    //   Incase of error, this will log the eror 
      (error) => {
        setIsLoaded(true)
        setError(error)
      })
    }, [])


  // Search function

  // Filter out the countries useState value, and return it
  const search = (countries) => {

    // filter the countries data to return data by search queries
// eslint-disable-next-line array-callback-return
return countries.filter((item) => {

  // If statement to check if filter by region value matches countries.region
  if (filterRegion === item.region)
{return searchParam.some((newCountries) => {
  
return item[newCountries]?.toString()
.toLowerCase()
.indexOf(searchQuery.toLowerCase()) > -1
  })
} else if (filterRegion === "All")
  {return  searchParam.some((newCountries) => {
  
return <Spinner /> && item[newCountries]?.toString()
.toLowerCase()
.indexOf(searchQuery.toLowerCase()) > -1
  })}
})
  }

    if (error){
      return <div> {error.message} </div>
    } else if(!isLoaded){
      return <Spinner />
    } else 
{
  return (
    <main className='container'>

      <div className='Header '> 

      <aside className='Input'> 
      <BsSearch/>  
      <input 
      name="search-form"
      id="search-form" 
       type="search" 
       placeholder='search for country'
        onChange={(e) =>  setSearchQuery(e.target.value) } /> 
      </aside> 

    <aside className='Select'>
       <select className='txt' onChange={(e) => setFilterRegion(e.target.value)}> 
       <option  value="All"> Filter by Region </option>
       <option value="Africa"> Africa </option>
       <option value="Americas"> Americas </option>
       <option value="Antarctic"> Antarctic </option>
       <option value="Asia"> Asia </option>
       <option value="Europe"> Europe </option>
       <option value="Oceania"> Oceania </option>
       
      </select> 
      </aside> 

      </div>
      
       <section className='MapCont'>
        {
      search(countries).map((country, index) => (
            <section className='MapItems'>
              <Country key={index}  country={country} />
            </section>
                
            ))
        } </section>
    </main>
  )}
}

export default Countries