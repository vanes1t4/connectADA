import { createContext, useReducer } from "react";

const AppReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BUDGET':
            return {
                ...state,
                presupuesto: action.payload,
            }
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
        { id: 6, categoria: 'Membresia', nombre: 'Escuela', monto: 400, key: 6 },
        { id: 4, categoria: 'Alimento', nombre: 'Tacos', monto: 570, key: 4 },
        { id: 7, categoria: 'Transporte', nombre: 'Transporte', monto: 670, key: 7 },
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