import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/context/AuthContext';
import { useContext } from 'react';


export const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(AuthContext);
    const name = user ? user.name : undefined;


    const onLogout = () => {
        logout();

        navigate('/login', {
            replace: true,
        });
    }


    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark p-2">
            <Link
                className="navbar-brand"
                to="/"
            >
                Asociaciones
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink
                        to="/marvel"
                        className={`nav-item nav-link ${({isActive}) => isActive? 'active': ''}`}
                    >
                        Marvel
                    </NavLink>

                    <NavLink
                        className={`nav-item nav-link ${({isActive}) => isActive? 'active': ''}`}
                        to="/dc"
                    >
                        DC
                    </NavLink>

                    <NavLink
                        className={`nav-item nav-link ${({isActive}) => isActive? 'active': ''}`}
                        to="/search"
                    >
                        Search
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                <ul className="navbar-nav ml-auto">
                    <span className='nav-item nav-link text-info'>
                        {name ? name: 'Desconocido'}
                    </span>

                    <button
                        className='nav-item nav-link btn'
                        onClick={ onLogout }
                        >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
};