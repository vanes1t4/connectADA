import React,{useContext} from 'react'
import { AppContext} from '../context/AppContext'

const Remanente = () => {
  
  //contra que voy a calcular?
  const { gastos , presupuesto } = useContext(AppContext)

  //cuanto es nuestro total de gastos??
  const totalGastos = gastos.reduce((total,item) =>{
    if(parseInt(item.monto)){
        total = total + item.monto
    }
    return (total)
  },0);

  const sobrante = presupuesto - totalGastos;

const alertType = totalGastos > presupuesto ? 'bg-red-300' : 'bg-green-100'

  return (
    <div className={`alert rounded-lg p-4 mb-4 text-sm text-green-700 ${alertType}`}>
      <p>Remanente: $<span>{sobrante}</span></p></div>
  )
}

export default Remanente
