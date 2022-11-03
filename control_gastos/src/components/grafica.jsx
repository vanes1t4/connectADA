import React from 'react'
import { Doughnut } from 'react-chartjs-2'
import { Chart, ArcElement } from 'chart.js'
import Presupuesto from '../components/presupuesto'
import Remanente from '../components/remanente'
import Gastado from '../components/gastoTotal'

Chart.register(ArcElement)

const config = {
  data: {
    datasets: [{
      data: [300, 50, 100],
      backgroundColor: [
        'rgb(255, 99, 132)',
        'rgb(54, 162, 235)',
        'rgb(255, 205, 86)'
      ],
      hoverOffset: 4,
      borderRadius: 20,
      spacing: 5
    }]
  },
  options: {
    cutout: 115
  }
}

export default function Grafica() {
  return (
    
      <div className="flex justify-content max-w-xs mx-auto" >
        <div className="grid col-span-2" >
          <div className="chart relative">
            <Doughnut {...config}></Doughnut>
            <h3 className='mb-4 font-bold title'>Gastado:
            <span className='block text-3xl text-emerald-400'>${0}</span></h3>
          </div>
          <div className='py-10 gap-4' >
            <div className='col-sm' > < Presupuesto /> </div>
            <div className='col-sm' > < Remanente /> </div>
            <div className='col-sm' > < Gastado /> </div>
          </div>
        </div>
      </div>
    )
}
