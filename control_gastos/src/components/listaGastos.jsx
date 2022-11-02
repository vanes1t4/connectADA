import React, {useContext} from 'react'
import ElementoGasto from './elementoGasto'
import { AppContext } from '../context/AppContext'

const ListaGastos = () => {
  const {gastos} = useContext(AppContext);

  return (
    <ul>
      { gastos.map((gasto) => (
        <ElementoGasto id={gasto.id} nombre={gasto.nombre} monto={gasto.monto} key={gasto.id} />
      ))}
    </ul>
  )
}

export default ListaGastos
