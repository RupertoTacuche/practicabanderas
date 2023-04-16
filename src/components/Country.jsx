import React from 'react'

const Country = ({country}) => {
  return (
    <article className='bg-white rounded-md overflow-hidden shadow-md shadow-gray-200'>
        <div className='h-[200px]'>
            <img className='h-full w-full object-cover' src={country.flags.svg} alt="" />
        </div>

        <section className='p-6'>
            <h2 className='font-bold text-xl mb-3'>{country.name.common}</h2>
            <ul className='grid gap-1 text-base'>
                <li className='font-semibold'>Population: <span className='font-normal'>{country.population}</span></li>
                <li className='font-semibold'>Region: <span className='font-normal'>{country.region}</span></li>
                <li className='font-semibold'>Capital: <span className='font-normal'>{country.capital?.[0]}</span></li>
            </ul>
       </section>
    </article>
  )
}
 
export default Country