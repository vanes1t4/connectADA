import React, { useState, useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import Presupuesto from '../components/presupuesto'
import Remanente from '../components/remanente'
import Gastado from '../components/gastoTotal'

Chart.register(ArcElement)

export default function Grafica() {

  const {gastos,presupuesto} = useContext(AppContext)
  const totalGastos = gastos.reduce((total, item) => {
    return(total += item.monto)
  },0)
  
  let porcentaje = useState(0)
  let restante = useState(100)
  if(presupuesto>0){
    porcentaje = (totalGastos/presupuesto)*100;
    restante = 100 - porcentaje;
  } 

  //poniendo colores segun el porcentaje
  let bga
  if(porcentaje<50){
    bga = 'rgba(219,234,254)'
  }else
   if(porcentaje<80){
    bga = 'rgba(234,179,8)'
   } else{
    bga = 'red'
   }

//actualizando los valores en config
let config = {
  data: {
    datasets: [{
      data: [porcentaje,restante,],
      backgroundColor: [bga,'rgba(209,213,219)',],
      hoverOffset: 2,
      borderRadius: 10,
      spacing: 5
    }]
  },
  options: {
    cutout: 90,
    responsive: true,
    maintainAspectRatio: false
  }
}

  return (
    
      <div className="w-full max-w-6lg" >
        <div className="flex flex-wrap mx-3 mb-6" >
          <div className="chart relative mx-auto md:w-1/2 px-3 mb-6 md:mb-0 h-60 ">
            <Doughnut {...config}></Doughnut>
            <h3 className='font-bold absolute bottom-1/2 text-blue-700 '>Gastado:
            <span className='block text-3xl text-blue-700'>{porcentaje.toFixed(2)}%</span></h3>
          </div>
          <div className='mx-auto md:w-1/2 px-3' >
            <div className='col-sm' > < Presupuesto /> </div>
            <div className='col-sm' > < Remanente /> </div>
            <div className='col-sm' > < Gastado /> </div>
          </div>
        </div>
      </div>
    )
}
