import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Gastado =() => {

const {gastos} = useContext(AppContext)

const totalGastos = gastos.reduce((total, item) => {
  return(total += item.monto)
},0)

  return (
    <div className='alert bg-blue-100 rounded-lg p-4 mb-4 text-sm text-blue-700 font-bold'>
      <p>Gasto Total: $<span>{totalGastos}</span></p></div>
  )
}

export default Gastado
