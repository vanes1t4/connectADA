import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return {
                ...state,
                gastos: [...state.gastos, action.payload],
            };
        case 'DELETE_EXPENSE':
            return {
                ...state,
                gastos: state.gastos.filter((gasto) => gasto.id !== action.payload),
            }
        default:
            return state;
    }
}

const initialState = {
    presupuesto: 2000,
    gastos: [
        { id: 6, nombre: 'Escuela', monto: 400, key: 6 },
        { id: 7, nombre: 'Transporte', monto: 67, key: 7 },
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
        const [state, dispatch] = useReducer(AppReducer, initialState);
        return ( < AppContext.Provider value = {
                {
                    presupuesto: state.presupuesto,
                    gastos: state.gastos,
                    dispatch,

                }
            } > { props.children } <
            /AppContext.Provider>)
        }