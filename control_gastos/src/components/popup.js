import React from 'react'
import { CgCloseR } from 'react-icons/cg'
import Formulario from './formulario'
import PresupuestoInicial from './presupInicial'

function Popup(props) {

    return (props.trigger) ? ( <
        div className = 'popup' >
        <
        div className = 'popup-inner' >
        <
        Formulario / >
        <
        PresupuestoInicial / >
        <
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