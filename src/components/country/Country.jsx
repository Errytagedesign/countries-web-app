import React from 'react'

import millify from 'millify'
import {Link} from "react-router-dom"


// Styles
import './Country.scss'

 

function Country({country: {name, population, region, capital, cca3, flags }}) {

   
  return (
    <div>

       <section
     className='Country'
                data-aos="fade-up"
                data-aos-duration="3000"
               >
                 <Link to={cca3} > 
                  <div>
                     <img src={flags.svg} alt="" />
                    </div> 
                   <article data-aos="fade-up"
                    data-aos-duration="4000" className='bg'>
                    <h2> {  name.common} </h2>
                    <p> Population:  <strong>  {millify(population)} </strong> </p>

                    <p> Region:  <strong>  {region} </strong> </p>

                    <p> Capital:  <strong>  {capital} </strong> </p>
                    </article> 
                    </Link> 
              
        </section>
    </div>
  )
}

export default Country