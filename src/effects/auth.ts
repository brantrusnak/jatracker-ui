import { GET, POST } from "../shared/http";
import { User } from "../models/User";
import { Signin } from "../models/Signin";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthHandler = () => {
    const auth = useContext(AuthContext);

    const handleRequest = async (): Promise<User> => await GET('http://localhost:5000/api/user');

    const handleSignin = async (signin: Signin) => {
        let {token, user} = await POST('http://localhost:5000/api/auth/signin', JSON.stringify(signin));
        auth.dispatch({type: 'LOGIN', payload: {token, user} });
    };

    return { handleRequest, handleSignin };
};
