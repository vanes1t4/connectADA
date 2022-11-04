import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext'

const PresupuestoInicial = () => {
  //accion del submit
  const {dispatch} = useContext(AppContext)

  const [presupuesto, setPresupuesto] = useState('')
  
const onSubmit = (event) => {
  event.preventDefault();

  dispatch({
    type: 'ADD_BUDGET',
    payload: presupuesto,
  })
}

  return (
    <form id='form' onSubmit={onSubmit} className='w-full max-w-lg'>
      <div className='px-8 pt-6 pb-8 mb-4'>
        <h2 className='mt-3 mb-3 text-purple-700 font-bold text-2xl bg-purple-300 rounded'>Presupuesto</h2>
          <div className='mb-4'>
          <label 
            htmlFor="presupuesto" 
            className='block text-gray-500 font-bold text-lg mb-2'>Indique su monto inicial:</label>
          <input 
          type="text" 
          required='required' 
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
          id='presupuesto'
          value={presupuesto}
          onChange={(event) => setPresupuesto(event.target.value)} 
          />

        </div>
        <div className='mb-3'>
          <button type="submit" className='border rounded text-purple-100 bg-purple-700 w-2/3 font-bold uppercase'>Guardar</button>
        </div>
      </div>
    </form>
  )
}

export default PresupuestoInicial
