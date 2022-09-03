import React, {useRef} from 'react'
import { useHomeFetch} from '../../../Hooks/fetchCountries'
import { BsSearch } from 'react-icons/bs'


// Styles
import './Countries.scss'
import Spinner from '../../spinner/Spinner'
import Country from '../../country/Country'



function Countries() {
  

    const {countries, countriesMain, isLoaded, setCountries} = useHomeFetch()

    

    
  //  const countryInputRef = useRef()
   const regionRef = useRef()

  const noCountry = countries.status || countries.message

  // country search

  const searchIt = (e) => {
    
  const value = e.target.value;


 const filterCountry =  countriesMain.filter((item) => {

  // convert array into an object
// item.city = Object.assign({}, item.capital )
//   console.log(item.city)


  return (item.capital.toLowerCase().includes(value.toLowerCase()) || 
  item.name.common.toLowerCase().includes(value.toLowerCase())
 
 )

})
setCountries(filterCountry)
// console.log(filterCountry)

  }


  // Filter by region
  
  const handleSelect = (e) => {
    e.preventDefault();

    // Setting the value of the select event to selectValue
    const selectValue = e.target.value

    // filter countries to return only regions
    const selectRegion = countriesMain.filter((item) => {

      // check if the selected value is "All" and return countries without filtering it
      if(selectValue === "All"){
        return item

        // else return base on filter value
      } else {

        return item.region === selectValue
      }
    })

    setCountries(selectRegion)
  }

  // Another way to filter by fetching over again

//   const filterByRegion = (filterRegion) => {

//  filterRegion = regionRef.current.value

//    if (filterRegion){
//       const fetchRegion = async () => {
//       const response = await fetch(`https://restcountries.com/v3.1/region/${filterRegion}`)
//      const data = await response.json()

//      if(filterRegion === "All"){
//       try{
//         fetchData()
//       } catch(error){
//         console.log(error)
//       } return;
//      }
//      setCountries(data)

// }
// try {
//   fetchRegion()
// } catch(error){
//   console.log(error)
// }


//     }

//   }

 if(!isLoaded){
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
      //  ref={countryInputRef}
      //  value={searchQuery}
      onChange={ searchIt} /> 
      </aside> 

    <aside className='Select'>
       <select 
       ref={regionRef}
       className='txt' 
       onChange={handleSelect}
     > 
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
 !noCountry ? (countries.map((country, index) => (
            <section key={index} className='MapItems'>
              <Country   country={country} />
            </section>
                
            ))) : <p> No country found .... </p>
        } </section>
    </main>
  )}
}

export default Countries