import axios from "axios";
import { useEffect, useState } from "react";
import User from "../types/User";


const UserHook = () => {
    const [user, setUser] = useState<User | undefined>(undefined);

    const fetchUser = async () => {
        const response = await axios.get<User>(`https://api.github.com/users/Kertf22`);

        setUser(response.data);
    }

    useEffect(() => {


        fetchUser()
    },[])

    return user;
};

export default UserHook;