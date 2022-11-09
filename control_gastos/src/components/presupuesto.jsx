import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Presupuesto = () => {

  const { presupuesto } = useContext(AppContext)

return (
  <div className='alert bg-gray-300 rounded-lg mb-4 text-lg text-gray-700 font-bold'>
    <p className='p-4 '>Presupuesto: $<span>{presupuesto}</span></p>
  </div>
)
}

export default Presupuesto