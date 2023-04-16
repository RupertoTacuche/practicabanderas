import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Country from './Country'

const Home = () => {
  const [countries, setCountries] = useState([])
  const [region, setRegion] = useState("")

  const handleChangeRegion = (e) => {
    setRegion(e.target.value)
  }
  useEffect(() =>{
      const URL =`https://restcountries.com/v3.1/${region === "" ? "all" : `region/${region}`}`;
      console.log(URL)
      axios
      .get(URL)
      .then((res) =>setCountries(res.data))
      .catch((err) => console.log(err));
      

  },[region]);
  
  return (
    <section>
      <form className='grid gap-6 py-6 px-4'>
        <div className='flex items-center gap-2 bg-white px-4 py-4 rounded-md shadow-md shadow-gray-200'>
          <i className='bx bx-search text-gray-400 text-lg'></i>
          <input className='flex-1 outline-none text-xs' type="text" placeholder='search for a country'  />
        </div>
        <select onChange={handleChangeRegion} className='max-w-max p-4 rounded-md shadow-md shadow-gray-200 outline-none font-semibold'>
            <option value="">All</option>
            <option value="Africa">Africa</option>
            <option value="America">America</option>
            <option value="Asia">Asia</option>
            <option value="Europa">Europa</option>
            <option value="Oceania">Ocenia</option>
        </select>
      </form>
      <section className="grid gap-8 px-10">
        {
          countries.map((country) => (
            <Country key={country.name.official}country={country} />
        ))}
      </section>
    </section>
  )
}

export default Home