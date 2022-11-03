import React from 'react'
import { CgCloseR } from 'react-icons/cg'
import Formulario from './formulario'


function Popup(props) {
    return (props.trigger) ? ( <
        div className = 'popup' >
        <
        div className = 'popup-inner' >
        <
        h2 className = 'font-bold pb-4 text-xl' > Registrar Gasto < /h2> <
        div className = 'form' >
        <
        Formulario / >
        <
        /
        div > <
        /div> <
        button className = 'close-btn'
        onClick = {
            () => props.setTrigger(false)
        } >
        <
        CgCloseR size = { 40 }
        color = { 'white' }
        / > < /
        button > { props.children } < /
        div >
    ) : "";
}

export default Popup