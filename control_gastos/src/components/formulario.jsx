import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4} from 'uuid'

const Formulario = () => {
  //accion del submit
  const {dispatch} = useContext(AppContext)

  const [reg_gasto, setReg_gasto] = useState('')
  const [reg_monto, setReg_monto] = useState('')

const onSubmit = (event) => {
  event.preventDefault();

  const id = uuidv4()

  const gasto = {
    id: id,
    nombre: reg_gasto,
    monto: parseInt(reg_monto),
    key: id,
  }

  dispatch({
    type: 'ADD_EXPENSE',
    payload: gasto,
  })
}

  return (
    <form id='form' onSubmit={onSubmit}>
      <div className='form max-w-sm mx-auto w-96'>
        <div className='grid gap-4'>
          <select className='input-group'>
            <option value="Todas las categorias" defaultValue={'defaultValue'}>-- Todas las categorias --</option>
            <option value="Alimento">Alimento</option>
            <option value="Transporte">Transporte</option>
            <option value="Membresia">Membresia</option>
            <option value="Telefonia">Telefonia</option>
            <option value="Casa">Casa</option>
          </select>
          <label htmlFor="reg_gasto">Gasto Realizado:</label>
          <input 
          type="text" 
          required='required' 
          className='form-control' 
          id='reg_gasto'
          value={reg_gasto}
          onChange={(event) => setReg_gasto(event.target.value)} 
          />

        </div>
        <div className='input-group'>
          <label htmlFor="reg_monto">Monto:</label>
          <input 
          type="text" 
          required='required' 
          className='form-control' 
          id='reg_monto'
          value={reg_monto}
          onChange={(event) => setReg_monto(event.target.value)} 
          />

        </div>
        <div className='submit-btn'>
          <button type="submit" className='border py-2 text-white bg-indigo-500 w-full font-bold uppercase'>Registrar</button>
        </div>
      </div>
    </form>
  )
}

export default Formulario
