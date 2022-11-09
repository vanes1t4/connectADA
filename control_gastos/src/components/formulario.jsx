import React, {useState, useContext} from 'react'
import { AppContext } from '../context/AppContext'
import { v4 as uuidv4} from 'uuid'

const Formulario = () => {
  //accion del submit
  const {dispatch} = useContext(AppContext)

  const [reg_gasto, setReg_gasto] = useState('')
  const [reg_monto, setReg_monto] = useState('')
  const [reg_categoria, setReg_categoria] = useState('')
  
const onSubmit = (event) => {
  event.preventDefault();

  const id = uuidv4()

  const gasto = {
    id: id,
    categoria: reg_categoria,
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
    <form id='form' onSubmit={onSubmit} className='w-full max-w-lg'>
      <div className='px-8 pt-6 pb-8 mb-4'>
      <h2 className = 'mt-3 mb-3 text-purple-700 font-bold text-2xl bg-purple-300 rounded' > Registrar Gasto < /h2>        
          <div className='mb-4'>
          <label 
            htmlFor="reg_gasto" 
            className='block text-gray-500 font-bold text-lg mb-2'>Descripcion:</label>
          <input 
          type="text" 
          required='required' 
          className='shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
          id='reg_gasto'
          value={reg_gasto}
          onChange={(event) => setReg_gasto(event.target.value)} 
          />

        </div>
        <div className='mb-4'>
          <label 
          htmlFor="reg_monto" 
          className='block text-gray-500 font-bold text-lg mb-2'>Monto:</label>
          <input 
          type="text" 
          required='required' 
          className='shadow appearance-none border rounded w-1/2 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' 
          id='reg_monto'
          value={reg_monto}
          onChange={(event) => setReg_monto(event.target.value)} 
          />

        </div>
        <div className='mb-6'>
        <label 
          htmlFor="reg_categoria" 
          className='block text-gray-500 font-bold text-lg mb-2'>Categoria:</label>
          <select 
          id='reg_categoria'
          required='required'
          className='shadow appearance-none border rounded py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
          onChange={(event) => { setReg_categoria(event.target.value) }}
          >
            <option value="Todas las categorias" >-- Todas las categorias --</option>
            <option value="Alimento">Alimento</option>
            <option value="Transporte">Transporte</option>
            <option value="Membresia">Membresia</option>
            <option value="Telefonia">Telefonia</option>
            <option value="Casa">Casa</option>
          </select>
          </div>
        <div className='mb-3'>
          <button type="submit" className='border rounded text-purple-100 bg-purple-700 w-2/3 font-bold uppercase'>Guardar</button>
        </div>
      </div>
    </form>
  )
}

export default Formulario
