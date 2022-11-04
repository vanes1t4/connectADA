import React, { useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai'
import './App.css'
import Grafica from './components/grafica'
import ListaGastos from './components/listaGastos'
import { AppProvider } from './context/AppContext'
import Popup from './components/popup'

function App() {

    const [buttonPopup, setButtonPopup] = useState(false)

    return ( <
        AppProvider >
        <
        div className = 'App' >
        <
        div className = "container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800" >
        <
        h1 className = "text-4xl py-8 mb-10 bg-purple-800 text-white rounded" > Control de Gastos < /h1>  <
        Grafica / >
        <
        div className = 'max-w-2xl' >
        <
        h3 className = 'mt-3 mb-3 text-purple-700 font-bold text-2xl bg-purple-300 rounded' > Lista de Gastos < /h3>  <
        ListaGastos / > < /div>  <
        div >
        <
        button className = 'new-btn'
        title = 'Agregar un gasto'
        onClick = {
            () => setButtonPopup(true)
        } > < AiFillPlusCircle size = { 70 }
        color = { 'purple' }
        / > < /button > <
        Popup trigger = { buttonPopup }
        setTrigger = { setButtonPopup }
        /> < /
        div > <
        /div> < /
        div > <
        /AppProvider>
    )
}

export default App;