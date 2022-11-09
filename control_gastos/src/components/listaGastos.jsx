import React, { useState, useContext } from 'react'
import ElementoGasto from './elementoGasto'
import { AppContext } from '../context/AppContext'

const ListaGastos = () => {
  const { gastos } = useContext(AppContext);
  const [lim_categoria, setLim_categoria] = useState('Todas las categorias')

  if (gastos.length>0) {
    return (
      <div>
      <label 
          htmlFor="lim_categoria" 
          className=' text-gray-500 font-bold text-lg mb-2'>Filtrar por Categoria:{' '}</label>
          <select 
          id='lim_categoria'
          className='shadow appearance-none border rounded pt-2 mb-4 px-3 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(event) => { setLim_categoria(event.target.value) }}
          >
            <option value="Todas las categorias" >-- Todas las categorias --</option>
            <option value="Alimento">Alimento</option>
            <option value="Transporte">Transporte</option>
            <option value="Membresia">Membresia</option>
            <option value="Telefonia">Telefonia</option>
            <option value="Casa">Casa</option>
          </select>
      <ul>
        {gastos.map((gasto) => (lim_categoria === gasto.categoria || lim_categoria === 'Todas las categorias'?
          <ElementoGasto id={gasto.id} categoria={gasto.categoria} nombre={gasto.nombre} monto={gasto.monto} key={gasto.id} /> : ""
        ))}
      </ul></div>
    )
  } else {
    return (
      <h2>No hay registros de gastos</h2>
    )
  }
}

export default ListaGastos
