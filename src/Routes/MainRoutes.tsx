import React, { useContext } from 'react';
import { Route, Navigate, Routes } from 'react-router-dom';


import { ROUTES } from './routes';
import { AppContext } from '../AppContext';
import { checkRouteBasedOnRoles } from './checkRoutes';
import Login from '../Pages/Auth/Login';

export default function RootRoutes() {

    const {
        isLoggedIn,
        token,
        role
    } = useContext(AppContext);

    return (
        <Routes>
            <>
                {isLoggedIn === true || token !== undefined
                    ?
                    <>
                        {ROUTES.SHOPING_ROUTES.map((each, index) =>
                            // checkRouteBasedOnRoles(role, each?.rolesAllowed as string[])
                                // ?
                                <React.Fragment key={index}>
                                    <Route path={each.path} element={<each.element />} />
                                    {each.submenu &&
                                        each?.submenu.map((sub, i) => (
                                            <Route
                                                key={i}
                                                path={sub.path}
                                                element={<sub.element />}
                                            />
                                        ))}
                                </React.Fragment>
                                // :
                                // <></>
                        )}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </>
                    :
                    <>
                        <Route path="/" element={<Login />} />
                    </>}
            </>
        </Routes>
    );
}
