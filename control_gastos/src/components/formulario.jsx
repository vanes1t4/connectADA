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
    <form onSubmit={onSubmit}>
      <div className='row'>
        <div className='col-sm'>
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
        <div className='col-sm'>
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
        <div className='col-sm'>
          <button type="submit" className='btn btn-primary' />
        </div>
      </div>
    </form>
  )
}

export default Formulario
