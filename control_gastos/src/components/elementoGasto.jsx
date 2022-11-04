import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { AppContext } from '../context/AppContext'

const ElementoGasto = (props) => {

const {dispatch} = useContext(AppContext)

const eliminandoGasto = () => {
  dispatch({
    type:'DELETE_EXPENSE',
    payload: props.id,
  })
}

  return (
    <li className='flex justify-between pl-2 text-lg mb-2 rounded-l-lg border-l-4 border-purple-400 bg-purple-100 hover:border-purple-500'>
      {props.categoria +` --- `+ props.nombre}
        <span className='font-bold bg-purple-300 rounded-lg px-5 pt-2'>
          ${props.monto}
        </span>
        <button className='py-1' title='Eliminar registro'>
        <TiDelete size='40' color='red' onClick={eliminandoGasto}/></button>
    
    </li>
  )
}

export default ElementoGasto