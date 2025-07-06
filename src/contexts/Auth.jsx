import { createContext , useContext , useState,useEffect, Children } from "react";
import { auth,db } from "../firebase";
import {getDoc,doc} from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";


const AuthContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({children}) => {

    const [currentUser , setCurrentUser] =useState(null);
    const [userLoggedIn,setUserLoggedIn] = useState(false);
    const [role,setRole] = useState("");
    const [loading,setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,initializedUser);
        return unsubscribe;

    },[]);

    async function initializedUser(user) {

        if(user){
            setCurrentUser({...user});
            const docRef = doc(db,'users',user.uid);
            const docSnap = await getDoc(docRef);
            const role = docSnap.data().role;
            setRole(role);
            setUserLoggedIn(true);
        }else{
            setCurrentUser(null);
            setUserLoggedIn(false);
            setRole("");
        }
        setLoading(false);
    }


const value = {
    currentUser,
    userLoggedIn,
    role,
    loading,
    setCurrentUser,
    
};

return (
    <AuthContext.Provider value ={value}>{children}</AuthContext.Provider>
)

}