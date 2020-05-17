import { GET, POST } from "../shared/http";
import { User } from "../models/User";
import { Signin } from "../models/Signin";

export const useAuthHandler = () => {
    const handleRequest = async (): Promise<User> => await GET('http://localhost:5000/api/user');
    const handleSignin = async (user: Signin): Promise<{ token: string, user: User }> => await POST('http://localhost:5000/api/auth/signin', JSON.stringify(user));
    return { handleRequest, handleSignin };
};
