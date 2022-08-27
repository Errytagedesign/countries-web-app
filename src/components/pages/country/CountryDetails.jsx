import React  from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import millify from 'millify'
import './CountryDetails.scss'
import { useCountryFetch } from '../../../utils/MotionConainer'
import Spinner from '../../spinner/Spinner'

// import {BaseUrl} from '../../../utils/MotionConainer'

function CountryDetails({flags, name, population, region, subregion, capital,  languages, currencies, cca3, borders, timezones, car }) {

  const {countries, isLoaded} = useCountryFetch()

  const params = useParams()
  const navigate = useNavigate()

  const goBack = () => {
    navigate("/")
  }




  countries.forEach((country) => {

    if(country.cca3 === params.countryCode)
{
    flags = country.flags.svg; 
    name = country.name; 
    borders = country.borders; 
    car = country.car; 
    // cca3 = country.cca3; 
    population = country.population; 
    timezones = country.timezones; 
    region = country.region; 
    subregion = country.subregion;     
    capital = country.capital; 
    // languages = country.languages; 
    currencies = country.currencies


console.log(borders)

Object.keys(currencies).forEach((key) => {

 currencies = country.currencies[key]
   
})
// console.log(currencies)

languages = country.languages
languages = Object.values(languages)

// console.log(languages)


 }
 })

  

  return (
    <main className='container'> 
      
      <section data-aos="fade-right" className='back' onClick={goBack}> Go back  </section>

     {!isLoaded ? <Spinner /> :
      <section className='country' > 

       <article data-aos="zoom-out" data-aos-duration="6000" className='flag'>
         <img src={flags} alt="" />
        </article>

      <article >
        <h3 data-aos="fade-right"> {name.common}  </h3>
       
         <p data-aos="fade-right">  Official Name: <strong>  {name.official} </strong></p>
      <p data-aos="fade-right"> Currency: <strong>{currencies.name}</strong>  <strong>{currencies.symbol}</strong></p>

 <p data-aos="fade-right"> Language: {!languages ? " No language" : languages.map(item => (
  <strong> { item + "."} </strong>
 ))} </p> 

<p data-aos="fade-right"> Population: <strong> {millify(population) } </strong> </p>
<p data-aos="fade-right"> Region: <strong> {region } </strong> </p>
<p data-aos="fade-right"> Sub Region: <strong> {subregion } </strong> </p>
<p data-aos="fade-right"> Capital: <strong> {capital } </strong> </p>
<p data-aos="fade-right"> Time Zones: <strong> {timezones } </strong> </p>
<p data-aos="fade-right"> Car Side: <strong> {car.side} </strong> </p>

<div data-aos="zoom-out" data-aos-duration="3000"  className='borderCon'><p> Borders:</p> <strong className='borders' > {!borders ? "No borders" :  borders.map(item => ( <Link className='border' to={item === countries.cca3}> {item}  </Link> ))} </strong>  </div> 


</article> 


      </section>
      }
   
      </main>
  )
}

export default CountryDetails