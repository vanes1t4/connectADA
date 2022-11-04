import React,{ useState, useContext} from 'react'
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

const sobrante = presupuesto - totalGastos

  let porcentaje = useState(0)
    if(presupuesto>0){
    porcentaje = (totalGastos/presupuesto)*100;
  } 
  //poniendo colores segun el porcentaje
  let alertType
  if(porcentaje<50){
    alertType = 'bg-green-100 text-green-700'
  }else
   if(porcentaje<80){
    alertType = 'bg-yellow-300 text-yellow-800'
   } else{
    alertType = 'bg-red-300 text-red-900'
   }

  return (
    <div className={`alert font-bold rounded-lg p-4 mb-4 text-lg ${alertType}`}>
      <p>Remanente: $<span>{sobrante}</span></p></div>
  )
}

export default Remanente
