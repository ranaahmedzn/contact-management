import React from 'react';
import {useLocation, Navigate} from 'react-router-dom'

interface Props {
    children:  React.ReactElement;
}

const RedirectRoute : React.FC<Props> = ({children}) => {
    const location = useLocation();

    if(location.pathname === '/'){
        return <Navigate to="/contact" />
    }

    return children;
};

export default RedirectRoute;