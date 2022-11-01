import './App.css'
import Grafica from './components/grafica.jsx'

function App() {
    return (

        <
        div className = "App" >
        <
        div className = "container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800" >
        <
        h1 className = "text-4xl py-8 mb-10 bg-slate-800 text-white rounded" > Control de Gastos < /h1>  

        { /* grid columnas */ } <
        div className = "grid md:grid-cols-2 gap-4" > { /* grafica */ } <
        Grafica > < /Grafica> { /* formulario */ } <
        /div> <
        /div>  <
        /div>
    )
}

export default App;