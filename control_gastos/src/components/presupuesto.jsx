import React, { useState, useContext } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import { AppContext } from '../context/AppContext'
import Popup from '../components/popup'

const Presupuesto = () => {
  const { presupuesto } = useContext(AppContext)
  const [buttonPopup, setButtonPopup] = useState(false)

return (
  <div className='alert bg-gray-300 rounded-lg mb-4 text-lg text-gray-700 font-bold'>
    <p className='p-4 '>Presupuesto: $<span>{presupuesto}</span>
    <button className = 'ml-4' title = 'Agregar Presupuesto' onClick = {() => setButtonPopup(true)} > <AiFillPlusCircle size = { 40 }
  color = { 'gray' } /></button><Popup trigger={buttonPopup} setTrigger={setButtonPopup}/>
    </p>
  </div>
)
}

export default Presupuesto