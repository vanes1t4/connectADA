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
    <li className='list-group-item d-flex justify-content-between mb-2 select-none rounded-l-lg border-l-4 border-purple-400 bg-purple-100 p-4 font-medium hover:border-purple-500'>
      {props.nombre}
        <span className='font-bold bg-purple-300 rounded-lg'>
          ${props.monto}
        </span>
        <button className='px-30'>
        <TiDelete size='40' onClick={eliminandoGasto}/></button>
    
    </li>
  )
}

export default ElementoGasto