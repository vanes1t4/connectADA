import React from 'react'
import './App.css'
import Grafica from './components/grafica'
import Presupuesto from './components/presupuesto'
import Remanente from './components/remanente'
import Gastado from './components/gastoTotal'
import ListaGastos from './components/listaGastos'
import Formulario from './components/formulario'
import { AppProvider } from './context/AppContext'

function App() {
    return ( <
        AppProvider >
        <
        div className = 'App' >
        <
        div className = "container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800" >
        <
        h1 className = "text-4xl py-8 mb-10 bg-slate-800 text-white rounded" > Control de Gastos < /h1>   <
        div className = "grid md:grid-cols-2 gap-4" > { /* grafica */ } <
        div className = "flex justify-content max-w-xs mx-auto" >
        <
        div className = "item" > < Grafica / > < /div> { /* formulario */ } <
        div className = 'flex flex-col py-10 gap-4 row mt-3 ' >
        <
        div className = 'col-sm' > < Presupuesto / > < /div> <
        div className = 'col-sm' > < Remanente / > < /div> <
        div className = 'col-sm' > < Gastado / > < /div> <
        /div> <
        /div> <
        /div> <
        h3 className = 'mt-3' > Lista de Gastos < /h3> <
        div className = 'row mt-3' >
        <
        div className = 'col-sm' > < ListaGastos / > < /div> <
        /div> <
        h3 className = 'mt-3' > Registrar Gasto < /h3> <
        div className = 'mt-3' >
        <
        div className = 'col-sm' > < Formulario / > < /div> <
        /div> <
        /div> <
        /div> <
        /AppProvider>
    )
}

export default App;