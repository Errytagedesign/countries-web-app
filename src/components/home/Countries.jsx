import React, {useState, useEffect} from 'react'
// import { motion } from 'framer-motion'
import {  BaseUrl } from '../../utils/MotionConainer'
import millify from 'millify'
import {Link} from "react-router-dom"
import { BsSearch } from 'react-icons/bs'


// Styles
import './Countries.scss'
import Spinner from '../spinner/Spinner'

 

function Countries({countryInd}) {

    const [error, setError] = useState(null)
    const [isLoaded, setIsLoaded] = useState(false)
    const [countries, setCountries] = useState([])

    // Set search query
    const [searchQuery, setSearchQuery] = useState("")

    // Set search param
    const [searchParam] = useState([ "name", "capital" ])


   const handleChange =(e) => {

    // set the value of the input into the state "searchQuery" which is empty initially
  setSearchQuery(e.target.value)

  // Then saved the searchQuery value into the search param
  // setSearchParam(searchQuery)

    }

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
return countries.filter((item) => {
  return searchParam.some((newCountries) => {
  
return item[newCountries]?.toString()
.toLowerCase()
.indexOf(searchQuery.toLowerCase()) > -1
  })
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
       onChange={handleChange} /> 
      </aside> 

    <aside className='Select'>
       <select> 
        {countries.map((item, idx) => (
          <option key={idx}> {item.region} </option>
        ))}
      </select> 
      </aside> 

      </div>
      
       <section>
        {
      search(countries).map((item, index) => (
            
              <section 
                data-aos="fade-up"
                data-aos-duration="3000"
                key={index}>
                 <Link to={`${index}`} > 
                  <div>
                     <img src={item.flags.svg} alt="" />
                    </div> 
                   <article data-aos="fade-up"
                    data-aos-duration="4000" className='bg'>
                    <h2> { item.name.common} </h2>
                    <p> Population:  <strong>  {millify(item.population)} </strong> </p>

                    <p> Region:  <strong>  {item.region} </strong> </p>

                    <p> Capital:  <strong>  {item.capital} </strong> </p>
                    </article> 
                    </Link> 
                </section> 
                
            ))
        } </section>
    </main>
  )}
}

export default Countries