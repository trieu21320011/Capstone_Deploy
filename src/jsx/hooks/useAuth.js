import AuthContext from "../context/AuthProvider";
import { useContext, useDebugValue } from "react";

const useAuth = () => {
    const { auth } = useContext(AuthContext);
    // useDebugValue(auth, auth => auth?.accessToken ? "Logged In" : "Logged Out")
    return useContext(AuthContext);
}

export default useAuth;