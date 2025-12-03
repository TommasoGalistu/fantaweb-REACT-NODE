import { createContext, useState } from "react";

export const ContextData = createContext(); 

export const ContextProvider = ({ children }) => {
    const [isLoggin, setIsLoggin] = useState(false); 
    const [loading, setLoading] = useState(false);
    const [role, setRole] = useState('');
    const [users, setUsers] = useState('');//arrivano dalla modale della creazione del campionato e filtrati
    const [championship, setChampionship] = useState([]);//arrivano dalla modale della creazione del campionato e filtrati
    const [userJoinChampion, setUserJoinChampion] = useState([]);

    // Funzioni per gestire il caricamento
    const showLoading = () => setLoading(true);
    const hideLoading = () => setLoading(false);
    console.log('isLogin: ', isLoggin, ' role: ', role)
    return (
        <ContextData.Provider value={{userJoinChampion, setUserJoinChampion, setChampionship,championship, setUsers, users, role, setRole, isLoggin, setIsLoggin, showLoading, hideLoading, loading }}>
            {children}
        </ContextData.Provider>
    );
};
