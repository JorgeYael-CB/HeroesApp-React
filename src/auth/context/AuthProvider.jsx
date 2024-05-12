import { useReducer } from "react"
import { AuthContext } from "./AuthContext"
import { authReducer } from "./authReducer"
import { types } from "../types/types"


const nameLS = 'user';

const init = () => {
    const user = JSON.parse(localStorage.getItem(nameLS));

    return {
        logged: !!user,
        user
    }
};


export const AuthProvider = ( {children} ) => {
    const [authState, dispatch] = useReducer( authReducer, {}, init );

    const onLogin = async( name = '' ) => {
        const user = { id: 'ABC', name}
        const action = { type: types.login, payload: user};

        localStorage.setItem(nameLS, JSON.stringify( user ));
        dispatch(action);
    };

    const onLogout = async() => {
        localStorage.removeItem(nameLS);
        const action = {
            type: types.logout
        }

        dispatch(action);
    }


    return (
        <AuthContext.Provider value={ {
                login: onLogin,
                logout: onLogout,
                ...authState,
            }}>
            {children}
        </AuthContext.Provider>
    )
}
