import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

export const Settings: React.FC = () => {
    const auth = useContext(AuthContext);
    return <div>
        <pre>{JSON.stringify(auth.state.user, null, 2)}</pre>
    </div>
};