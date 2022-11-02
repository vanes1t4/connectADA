import React, {useContext} from 'react'
import { AppContext } from '../context/AppContext'

const Presupuesto = () => {
  const {presupuesto} = useContext(AppContext)
  return (
    <div className='alert bg-gray-300 rounded-lg p-4 mb-4 text-sm text-gray-700 font-bold'>
      <p>Presupuesto: $<span>{presupuesto}</span></p></div>
  )
}

export default Presupuesto